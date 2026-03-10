import { execFileSync, spawn } from 'node:child_process';
import { existsSync, mkdtempSync, mkdirSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { createServer } from 'node:net';
import { tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import process from 'node:process';
import { setTimeout as delay } from 'node:timers/promises';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';

const scriptDir = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(scriptDir, '..');
const distEntry = join(repoRoot, 'dist', 'index.mjs');

if (!existsSync(distEntry)) {
  throw new Error('Build output not found. Run `pnpm build` before `pnpm smoke:consumer`.');
}

const tempRoot = mkdtempSync(join(tmpdir(), 'vue3-jsoneditor-smoke-'));
const tarballDir = join(tempRoot, 'tarballs');
const consumerDir = join(tempRoot, 'consumer');
const consumerSrcDir = join(consumerDir, 'src');
const keepTemp = process.env.KEEP_SMOKE_TMP === '1';
const runBrowserSmoke = process.env.SMOKE_BROWSER !== '0';

const baseEnv = {
  ...process.env,
  HUSKY: '0',
};

const run = (command, args, cwd, options = {}) => {
  const printableCommand = [command, ...args].join(' ');
  console.log(`\n> ${printableCommand}`);

  return execFileSync(command, args, {
    cwd,
    env: options.env ?? baseEnv,
    encoding: options.encoding,
    stdio: options.stdio ?? 'inherit',
  });
};

const getAvailablePort = async () => {
  return await new Promise((resolve, reject) => {
    const server = createServer();

    server.once('error', reject);
    server.listen(0, '127.0.0.1', () => {
      const address = server.address();

      if (!address || typeof address === 'string') {
        server.close();
        reject(new Error('Could not resolve a local TCP port for the smoke preview server.'));
        return;
      }

      server.close(closeError => {
        if (closeError) {
          reject(closeError);
          return;
        }

        resolve(address.port);
      });
    });
  });
};

const waitForUrl = async (url, timeoutMs = 20000) => {
  const deadline = Date.now() + timeoutMs;

  while (Date.now() < deadline) {
    try {
      const response = await fetch(url);

      if (response.ok) {
        return;
      }
    }
    catch {
      // The preview server is not ready yet.
    }

    await delay(250);
  }

  throw new Error(`Timed out waiting for preview server at ${url}.`);
};

const stopProcess = async (childProcess) => {
  if (!childProcess || childProcess.exitCode !== null) {
    return;
  }

  childProcess.kill('SIGTERM');

  await Promise.race([
    new Promise(resolve => childProcess.once('exit', resolve)),
    delay(5000),
  ]);

  if (childProcess.exitCode === null) {
    childProcess.kill('SIGKILL');
    await new Promise(resolve => childProcess.once('exit', resolve));
  }
};

const runBrowserSmokeTest = async () => {
  const port = await getAvailablePort();
  const url = `http://127.0.0.1:${port}/`;
  const previewServer = spawn(
    'pnpm',
    ['vite', 'preview', '--host', '127.0.0.1', '--port', String(port), '--strictPort'],
    {
      cwd: consumerDir,
      env: baseEnv,
      stdio: ['ignore', 'pipe', 'pipe'],
    }
  );

  previewServer.stdout.on('data', chunk => process.stdout.write(chunk));
  previewServer.stderr.on('data', chunk => process.stderr.write(chunk));

  try {
    await waitForUrl(url);

    const browser = await chromium.launch({
      headless: true,
    });
    const page = await browser.newPage();
    const consoleErrors = [];
    const pageErrors = [];

    page.on('console', message => {
      if (message.type() === 'error') {
        consoleErrors.push(message.text());
      }
    });

    page.on('pageerror', error => {
      pageErrors.push(error.message);
    });

    await page.goto(url, { waitUntil: 'networkidle' });
    await page.getByTestId('smoke-ready').waitFor();

    const modelJsonText = await page.getByTestId('model-json').textContent();

    if (modelJsonText?.trim() !== '{"hello":"world"}') {
      throw new Error(`Unexpected initial v-model payload: ${modelJsonText}`);
    }

    const rootTreeItem = page.getByRole('treeitem', { name: '{ hello : world }' });
    const valueButton = page.getByRole('button', { name: 'world' });

    await rootTreeItem.waitFor();
    await valueButton.waitFor();
    await valueButton.click();

    const contextMenuButton = page.getByRole('button', { name: /Open context menu/ });

    await contextMenuButton.waitFor();
    await browser.close();

    const unexpectedConsoleErrors = consoleErrors.filter(message => !message.includes('/favicon.ico'));

    if (pageErrors.length > 0 || unexpectedConsoleErrors.length > 0) {
      const details = [...pageErrors, ...unexpectedConsoleErrors].join('\n');
      throw new Error(`Browser smoke test reported runtime errors:\n${details}`);
    }
  }
  finally {
    await stopProcess(previewServer);
  }
};

const createConsumerFixture = (tarballPath) => {
  mkdirSync(consumerSrcDir, { recursive: true });

  writeFileSync(
    join(consumerDir, 'package.json'),
    JSON.stringify(
      {
        name: 'vue3-jsoneditor-smoke-consumer',
        private: true,
        type: 'module',
        scripts: {
          build: 'vite build',
        },
        dependencies: {
          vue: '^3.5.30',
          'vue3-ts-jsoneditor': `file:${tarballPath}`,
        },
        devDependencies: {
          '@vitejs/plugin-vue': '^6.0.4',
          typescript: '^5.9.3',
          vite: '^7.3.1',
        },
      },
      null,
      2
    )
  );

  writeFileSync(
    join(consumerDir, 'tsconfig.json'),
    JSON.stringify(
      {
        compilerOptions: {
          target: 'ES2022',
          module: 'ESNext',
          moduleResolution: 'Bundler',
          strict: true,
          jsx: 'preserve',
          esModuleInterop: true,
          allowSyntheticDefaultImports: true,
          lib: ['ES2022', 'DOM'],
          types: ['vite/client'],
        },
        include: ['src/**/*.ts', 'src/**/*.vue'],
      },
      null,
      2
    )
  );

  writeFileSync(
    join(consumerDir, 'vite.config.ts'),
    `import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
})
`
  );

  writeFileSync(
    join(consumerDir, 'index.html'),
    '<!doctype html><html><body><div id="app"></div><script type="module" src="/src/main.ts"></script></body></html>'
  );

  writeFileSync(
    join(consumerSrcDir, 'main.ts'),
    `import { createApp } from 'vue'
import App from './App.vue'
import { JsonEditorPlugin } from 'vue3-ts-jsoneditor'

createApp(App).use(JsonEditorPlugin).mount('#app')
`
  );

  writeFileSync(
    join(consumerSrcDir, 'App.vue'),
    `<script setup lang="ts">
import { ref } from 'vue'

const value = ref({ hello: 'world' })
</script>

<template>
  <main>
    <h1 data-testid="smoke-ready">vue3-ts-jsoneditor smoke</h1>
    <pre data-testid="model-json">{{ JSON.stringify(value) }}</pre>
    <JsonEditor v-model="value" mode="tree" :main-menu-bar="false" />
  </main>
</template>
`
  );
};

const main = async () => {
  mkdirSync(tarballDir, { recursive: true });

  const packOutput = run('pnpm', ['pack', '--pack-destination', tarballDir], repoRoot, {
    encoding: 'utf8',
    stdio: 'pipe',
  });

  if (packOutput) {
    process.stdout.write(packOutput);
  }

  const tarballName = readdirSync(tarballDir).find(fileName => fileName.endsWith('.tgz'));

  if (!tarballName) {
    throw new Error('Could not find packed tarball after `pnpm pack`.');
  }

  const tarballPath = join(tarballDir, tarballName);

  createConsumerFixture(tarballPath);
  run('pnpm', ['install', '--no-frozen-lockfile'], consumerDir);
  run('pnpm', ['build'], consumerDir);

  if (runBrowserSmoke) {
    await runBrowserSmokeTest();
  }

  if (!keepTemp) {
    rmSync(tempRoot, { recursive: true, force: true });
  }

  console.log(`\nSmoke test passed. Consumer build succeeded with ${tarballName}.`);

  if (runBrowserSmoke) {
    console.log('Browser smoke test passed against the packaged consumer app.');
  }

  if (keepTemp) {
    console.log(`Temporary workspace preserved at: ${tempRoot}`);
  }
};

main().catch(error => {
  console.error(`\nSmoke test failed. Temporary workspace preserved at: ${tempRoot}`);

  if (!keepTemp) {
    console.error('Set KEEP_SMOKE_TMP=1 to keep the generated consumer app for debugging.');
  }

  console.error(error);
  process.exitCode = 1;
});

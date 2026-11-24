import {fileURLToPath, URL} from 'node:url';
import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import pkg from './package.json' with {type: 'json'};

/**
 * Runtime dependencies are resolved by the consumer's package manager and bundler instead of being
 * bundled into `dist/`. This keeps transitive dependencies (Ajv, fast-uri, svelte runtime, ...) visible
 * to `npm audit` and lets consumers pick up patched versions without a new release of this package.
 * It also preserves the lazy `import()` boundaries inside vanilla-jsoneditor, which keeps browser-only
 * modules from being evaluated during SSR.
 */
const externalPackages = [...Object.keys(pkg.dependencies ?? {}), ...Object.keys(pkg.peerDependencies ?? {})];

const isExternal = (id: string) => externalPackages.some((name) => id === name || id.startsWith(`${name}/`));

/**
 * `vite build` builds the publishable library into `dist/`.
 * `vite build --mode gh` builds the demo app (index.html) for GitHub Pages into `gh-dist/`.
 */
export default defineConfig(({mode}) => {
  const isGhPagesBuild = mode === 'gh';

  return {
    base: isGhPagesBuild ? '/vue3-jsoneditor/' : '/',
    plugins: [
      vue(),
      !isGhPagesBuild &&
        dts({
          insertTypesEntry: true,
          rollupTypes: true,
          copyDtsFiles: true,
        }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    define: {
      __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false,
    },
    optimizeDeps: {
      include: [
        'ajv',
        'ajv-dist',
        'ajv-formats',
        'ajv-i18n',
        'immutable-json-patch',
        'lodash-es',
        '@fortawesome/free-regular-svg-icons',
        '@fortawesome/free-solid-svg-icons',
        'jmespath',
        'jsonrepair',
        'vanilla-jsoneditor',
      ],
      esbuildOptions: {
        define: {
          global: 'globalThis',
        },
      },
    },
    build: isGhPagesBuild
      ? {
          cssMinify: 'esbuild',
          target: 'es2022',
          outDir: 'gh-dist',
          commonjsOptions: {
            transformMixedEsModules: true,
            include: [/node_modules/],
          },
          chunkSizeWarningLimit: 1000,
        }
      : {
          cssMinify: 'esbuild',
          target: 'es2022',
          // `public/` holds demo-only files (favicon, search-engine verification); keep them out of the npm package.
          copyPublicDir: false,
          lib: {
            name: 'JsonEditorPlugin',
            entry: './src/JsonEditorPlugin.ts',
            formats: ['es'],
            fileName: () => 'index.mjs',
          },
          rollupOptions: {
            external: isExternal,
            output: {
              generatedCode: {
                constBindings: true,
              },
              exports: 'named',
              chunkFileNames: '[name].js',
            },
          },
        },
  };
});

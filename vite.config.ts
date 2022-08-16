import {fileURLToPath, URL} from 'url';

import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import typescript2 from 'rollup-plugin-typescript2';
import {envConfig} from 'vite-plugin-env-config';
import {chunkSplitPlugin} from 'vite-plugin-chunk-split';
import libCss from 'vite-plugin-libcss';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    libCss(),
    typescript2({
      check: false,
      clean: true,
      include: ['src/components/*.vue'],
      tsconfigOverride: {
        compilerOptions: {
          sourceMap: true,
          declaration: true,
          declarationMap: true,
        },
        exclude: ['vite.config.ts', 'main.ts'],
      },
    }),
    envConfig({
      prefix: 'VITECONFIG_',
      separator: '_',
    }),
    chunkSplitPlugin({
      strategy: 'single-vendor',
      customSplitting: {
        'vanilla-jsoneditor': ['vanilla-jsoneditor'],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    cssCodeSplit: false,
    lib: {
      entry: './src/JsonEditorPlugin.ts',
      formats: ['es'],
      name: 'JsonEditorPlugin',
      fileName: () => 'index.mjs',
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
});

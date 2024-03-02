import {fileURLToPath, URL} from 'url';
import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';

import {envConfig} from 'vite-plugin-env-config';
import {chunkSplitPlugin} from 'vite-plugin-chunk-split';

export default defineConfig({
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true,
      rollupTypes: true,
    }),
    envConfig({
      prefix: 'VITECONFIG_',
      separator: '_',
    }),
    chunkSplitPlugin({
      strategy: 'single-vendor',
      customSplitting: {
        'vanilla-jsoneditor': [/vanilla-jsoneditor/],
      },
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

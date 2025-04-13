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
        'immutable-json-patch': [/immutable-json-patch/],
        jmespath: [/jmespath/],
        'json-source-map': [/json-source-map/],
        'jsonpath-plus': [/jsonpath-plus/],
        'lodash-es': [/lodash-es/],
        jsonrepair: [/jsonrepair/],
        ajv: [/ajv/],
        'memoize-one': [/memoize-one/],
        '@fortawesome_free-solid-svg-icons': [/@fortawesome\/free-solid-svg-icons/],
        '@jsonquerylang_jsonquery': [/@jsonquerylang\/jsonquery/],
        '@replit_codemirror-indentation-markers': [/@replit\/codemirror-indentation-markers/],
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
    cssMinify: 'esbuild',
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

import {fileURLToPath, URL} from 'node:url';
import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import {envConfig} from 'vite-plugin-env-config';

export default defineConfig({
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true,
      rollupTypes: true,
      copyDtsFiles: true,
    }),
    envConfig({
      prefix: 'VITECONFIG_',
      separator: '_',
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
  build: {
    cssMinify: 'esbuild',
    target: 'es2022',
    lib: {
      name: 'JsonEditorPlugin',
      entry: './src/JsonEditorPlugin.ts',
      formats: ['es'],
      fileName: () => 'index.mjs',
    },
    commonjsOptions: {
      transformMixedEsModules: true,
      include: [/node_modules/],
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
        interop: 'auto',
        generatedCode: {
          constBindings: true,
        },
        preserveModules: false,
        exports: 'named',
        manualChunks: (id) => {
          if (id.includes('vanilla-jsoneditor')) return 'vanilla-jsoneditor';
          if (id.includes('immutable-json-patch')) return 'immutable-json-patch';
          if (id.includes('jmespath')) return 'jmespath';
          if (id.includes('json-source-map')) return 'json-source-map';
          if (id.includes('jsonpath-plus')) return 'jsonpath-plus';
          if (id.includes('lodash-es')) return 'lodash-es';
          if (id.includes('jsonrepair')) return 'jsonrepair';
          if (id.includes('memoize-one')) return 'memoize-one';
          if (id.includes('@fortawesome/free-solid-svg-icons')) return 'fortawesome';
          if (id.includes('@jsonquerylang/jsonquery')) return 'jsonquerylang';
          if (id.includes('@replit/codemirror-indentation-markers')) return 'replit';

          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
        chunkFileNames: '[name].js',
      },
      onwarn(warning, warn) {
        if (warning.code === 'CIRCULAR_DEPENDENCY' && warning.message.includes('node_modules')) {
          return;
        }
        warn(warning);
      },
    },
    chunkSizeWarningLimit: 1000,
  },
});

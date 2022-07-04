import {fileURLToPath, URL} from 'url';

import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import typescript2 from 'rollup-plugin-typescript2';
import {envConfig} from 'vite-plugin-env-config';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    typescript2({
      check: false,
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
      formats: ['es', 'cjs'],
      name: 'JsonEditorPlugin',
      fileName: (format) => (format === 'es' ? 'index.mjs' : 'index.cjs'),
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

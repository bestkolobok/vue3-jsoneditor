import js from '@eslint/js';
import pluginVue from 'eslint-plugin-vue';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: ['**/dist/**', '**/gh-dist/**', '**/node_modules/**'],
  },

  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  {
    files: ['**/*.vue'],
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
      },
    },
  },
  {
    rules: {
      'prettier/prettier': 'off',
      '@typescript-eslint/indent': 'off',
      '@typescript-eslint/quotes': 'off',
      '@typescript-eslint/semi': 'off',
      '@typescript-eslint/comma-dangle': 'off',
      '@typescript-eslint/space-before-function-paren': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
    },
  }
);

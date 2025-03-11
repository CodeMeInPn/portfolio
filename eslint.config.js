// eslint.config.js
import js from '@eslint/js';
import astro from 'eslint-plugin-astro';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import prettier from 'eslint-config-prettier';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  js.configs.recommended, // JavaScript defaults
  astro.configs.recommended, // Astro recommended settings
  {
    ignores: ['node_modules', 'dist'],
  },
  {
    files: ['**/*.astro'],
    languageOptions: {
      parser: astro.parser, // ✅ Use Astro parser
      parserOptions: {
        extraFileExtensions: ['.astro'],
      },
    },
    plugins: { astro },
    rules: {},
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: { project: './tsconfig.json' },
    },
    plugins: { '@typescript-eslint': tseslint },
    rules: {
      '@typescript-eslint/no-unused-vars': 'warn',
    },
  },
  prettier,
]);

/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',

    '@vue/typescript',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
  },
  rules: {
    'vue/multi-word-component-names': 0,
    'no-unused-vars': 0,
    '@typescript-eslint/no-unused-vars': 'error',
  },
};

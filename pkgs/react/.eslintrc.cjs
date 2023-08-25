module.exports = {
  root: true,
  extends: ['atlrdsgn'],
  env: { node: true, browser: true },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.json',
    warnOnUnsupportedTypeScriptVersion: true,
  },
  rules: {},
};

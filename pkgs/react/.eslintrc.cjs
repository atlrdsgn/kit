module.exports = {
  root: true,
  extends: ['atlrdsgn'],
  env: { node: true, browser: true },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
    ecmaFeatures: {},
    project: './tsconfig.json',
    warnOnUnsupportedTypeScriptVersion: true,
  },
  plugins: ['@typescript-eslint', 'import', 'react'],
  rules: {
    // rules are handled by `eslint-config-atlrdsgn`
  },
};

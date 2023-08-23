module.exports = {
  root: true,
  extends: ['atlrdsgn'],
  env: { node: true, browser: true },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports and exports
    ecmaFeatures: {
      jsx: true, // allows for the parsing of JSX
    },
    tsconfigRootDir: __dirname, // root directory for relative tsconfig paths
    project: ['./tsconfig.json'], // specify it only if you want to type-check
    warnOnUnsupportedTypeScriptVersion: true,
  },
  /**
   * not 100% sure if these need to be set,
   * because we are extending the atlrdsgn config
   * which already has these set.
   *
   * They in fact do not need to be set.
   */
  rules: {},
};

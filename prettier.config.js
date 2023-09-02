/** @type {import('prettier').Options} */
module.exports = {
  arrowParens: 'always',
  bracketSameLine: true,
  bracketSpacing: true,
  jsxSingleQuote: true,
  useTabs: false,
  tabWidth: 2,
  printWidth: 80,
  semi: true,
  singleAttributePerLine: true,
  singleQuote: true,
  trailingComma: 'all',
  plugins: ['prettier-plugin-packagejson'],
};

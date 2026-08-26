// eslint-disable-next-line no-undef
module.exports = {
  root: true,
  env: { node: true, browser: true, es2022: true },
  // → ESLint to load [eslint-config-atlrdsgn].
  extends: ['atlrdsgn'],
  settings: {
    react: { version: 'detect' },
    next: { rootDir: ['apps/*/'] },
  },
  rules: {
    // all rules are @ the project level.
  },
};

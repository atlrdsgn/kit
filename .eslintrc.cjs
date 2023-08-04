module.exports = {
  root: true,
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

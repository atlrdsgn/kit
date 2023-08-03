module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-acme`
  extends: ['atlrdsgn'],
  settings: {
    react: { version: 'detect' },
    next: { rootDir: ['apps/*/'] },
  },
  rules: {
    // Your project-specific rules
  },
};

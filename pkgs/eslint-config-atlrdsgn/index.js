module.exports = {
  extends: [
    // 'turbo',
    'prettier',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['@typescript-eslint', 'prettier', 'react'],
  settings: {
    react: { version: 'detect' },
    next: { rootDir: ['apps/*/'] },
  },
  rules: {
    'no-html-link-for-pages': 'off',
    'no-unused-vars': 'off',
    'no-console': 'warn',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',

    /**
     * typescript eslint rules.
     */
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-var-requires': 'warn',
  },
  parserOptions: {},
};

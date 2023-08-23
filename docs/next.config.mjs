import nextra from 'nextra';

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './src/kit-theme/kit.config.tsx',

  /*
  latex: true,
  flexsearch: {
    codeblock: false,
  },
  */
});

export default withNextra({
  reactStrictMode: true,
});

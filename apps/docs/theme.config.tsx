import React from 'react';
import Logo from './src/components/kit.logo';
import { type DocsThemeConfig } from 'nextra-theme-docs';

/**
 * @type {import('nextra-theme-docs').DocsThemeConfig}
 */
const config: DocsThemeConfig = {
  logo: (
    <span>
      <Logo />
    </span>
  ),
  project: {
    link: 'https://github.com/shuding/nextra-docs-template',
  },
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    text: 'Copyright © 2023 atlrdsgn®, All rights reserved.',
  },
  primaryHue: {
    dark: 180,
    light: 146,
  },
};

export default config;

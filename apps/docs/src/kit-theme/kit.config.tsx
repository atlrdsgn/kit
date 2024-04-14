import React from 'react';
import Logo from '../components/kit.logo';
import { type DocsThemeConfig } from 'nextra-theme-docs';

/**
 *
 * To customize this theme, you can:
 *
 * Grab the [DocsThemeConfig] type from nextra source code
 * and extend it with your own properties.
 */

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
    link: 'https://github.com/atlrdsgn/kit',
  },
  docsRepositoryBase: 'https://github.com/atlrdsgn/kit/tree/main/apps/docs',
  footer: {
    text: 'Copyright © 2023 atlrdsgn®, All rights reserved.',
  },
  primaryHue: {
    dark: 180,
    light: 146,
  },
};

export default config;

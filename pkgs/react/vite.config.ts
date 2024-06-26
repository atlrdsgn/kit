import { defineConfig } from 'vite';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

import pkg from './package.json';
import tsconfigPaths from 'vite-tsconfig-paths';
import banner from 'vite-plugin-banner';
import dts from 'vite-plugin-dts';

const npmv = pkg.version;
const peers = Object.keys(pkg.peerDependencies);

export default defineConfig({
  build: {
    target: 'esnext',
    sourcemap: true,
    lib: {
      entry: 'src/index.ts',
      name: 'kit',
      fileName: (format) => (format === 'es' ? 'index.esm.js' : 'index.js'),
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: [
        '@radix-ui/react-dropdown-menu',
        '@radix-ui/react-label',
        '@radix-ui/react-menubar',
        '@radix-ui/react-popover',
        '@radix-ui/react-portal',
        '@radix-ui/react-select',
        '@radix-ui/react-slot',
        '@radix-ui/react-switch',
        '@radix-ui/react-tabs',
        '@radix-ui/react-toast',
        '@radix-ui/react-tooltip',
        'clsx',
        'framer-motion',
        'react/jsx-runtime',
        ...peers,
      ],
      output: {
        globals: {
          '@radix-ui/react-dropdown-menu': 'DROP',
          '@radix-ui/react-label': 'LABL',
          '@radix-ui/react-menubar': 'MBAR',
          '@radix-ui/react-popover': 'POP',
          '@radix-ui/react-portal': 'P',
          '@radix-ui/react-select': 'SLCT',
          '@radix-ui/react-slot': 'SLOT',
          '@radix-ui/react-switch': 'SWI',
          '@radix-ui/react-tabs': 'TAB',
          '@radix-ui/react-toast': 'TST',
          '@radix-ui/react-tooltip': 'TIP',
          clsx: 'clsx',
          'framer-motion': 'motion',
          react: 'react',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'jsxRuntime',
        },
      },
    },
  },
  plugins: [
    tsconfigPaths(),
    dts({
      /**
       *
       * searches for `src` directories inside
       * the project and replaces it with the
       * contents of that directory.
       */
      beforeWriteFile: (filePath, content) => ({
        content,
        filePath: filePath.replace('src', ''),
      }),
      entryRoot: 'src',
      outDir: 'dist/types',
      staticImport: true,
      compilerOptions: {
        baseUrl: './src/',
        composite: true,
        emitDeclarationOnly: true,
        noEmit: false,
      },
      include: ['src'],
      exclude: ['node_modules', 'dist'],
    }),
    vanillaExtractPlugin({
      // options are `debug` and `short`
      identifiers: 'short',
    }),
    banner(`
    * @atlrdsgn/kit v${npmv} 
    * see https://kit.atlrdsgn.com for more information.
    * see https://docs.atlrdsgn.com for further documentation.
    * 
    * This package is licensed under the MIT license.
    *
    * Copyright © 2024 atlrdsgn®. 
    * All rights reserved.
    `),
  ],
});

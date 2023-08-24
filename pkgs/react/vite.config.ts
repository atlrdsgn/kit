import { defineConfig } from 'vite';

import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import { resolve } from 'path';

// import react from '@vitejs/plugin-react';
import zipPack from 'vite-plugin-zip-pack';
import banner from 'vite-plugin-banner';
import dts from 'vite-plugin-dts';

const primitiveDeps = [
  'react',
  'react-dom',
  '@radix-ui/react-dropdown-menu',
  '@radix-ui/react-select',
  '@radix-ui/react-switch',
  '@radix-ui/react-portal',
  '@radix-ui/react-popover',
  '@radix-ui/react-menubar',
  '@radix-ui/react-tabs',
  '@radix-ui/react-label',
  '@radix-ui/react-slot',
  'clsx',
  'framer-motion',
];

/** @type {import('vite').UserConfig} */
export default defineConfig({
  build: {
    target: 'esnext',
    sourcemap: true,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'kit',
      fileName: (format) => (format === 'es' ? 'index.esm.js' : 'index.js'),
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: [...primitiveDeps],
      output: {
        globals: {
          motion: 'framer-motion',
          clsx: 'clsx',
          react: 'React',
          'react-dom': 'ReactDom',
          'react/jsx-runtime': 'jsxRuntime',

          '@radix-ui/react-dropdown-menu': 'DROP',
          '@radix-ui/react-select': 'SLCT',
          '@radix-ui/react-switch': 'SWI',
          '@radix-ui/react-portal': 'P',
          '@radix-ui/react-popover': 'POP',
          '@radix-ui/react-menubar': 'MBAR',
          '@radix-ui/react-tabs': 'TAB',
          '@radix-ui/react-label': 'LABL',
          '@radix-ui/react-slot': 'SLOT',
        },
      },
    },
  },
  plugins: [
    dts({
      entryRoot: 'src',
      outDir: 'dist/types',
      staticImport: true,
      compilerOptions: {
        composite: true,
        emitDeclarationOnly: true,
        noEmit: false,
      },
      include: ['src'],
      exclude: ['node_modules', 'dist', 'prod.package'],
    }),
    vanillaExtractPlugin({
      identifiers: 'short',
      // emitCssInSsr: true,
    }),
    banner(`
    * @atlrdsgn/kit v${process.env.npm_package_version} 
    * see https://kit.atlrdsgn.com for more information.
    * see https://docs.atlrdsgn.com for further documentation.
    * 
    * This package is licensed under the MIT license.
    *
    * Copyright © 2023 atlrdsgn®. 
    * All rights reserved.
    `),

    zipPack({
      outDir: 'prod.package',
      outFileName: `kit.[${process.env.npm_package_version}].zip`,
    }),
  ],
});

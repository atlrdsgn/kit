import { defineConfig } from 'vite';
import { peerDependencies } from './package.json';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

import react from '@vitejs/plugin-react';
import zipPack from 'vite-plugin-zip-pack';
import banner from 'vite-plugin-banner';
import dts from 'vite-plugin-dts';
import path from 'path';

const peerDeps = Object.keys(peerDependencies);
const primitiveDeps = [
  'clsx',
  '@radix-ui/react-dropdown-menu',
  '@radix-ui/react-select',
  '@radix-ui/react-switch',
  '@radix-ui/react-portal',
  '@radix-ui/react-popover',
  '@radix-ui/react-menu',
  '@radix-ui/react-tabs',
];

export default defineConfig({
  build: {
    target: 'esnext',
    sourcemap: true,
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'kit',
      fileName: (format) => (format === 'es' ? 'index.esm.js' : 'index.js'),
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: [...peerDeps, ...primitiveDeps, 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDom',
          'react/jsx-runtime': 'jsxRuntime',
          clsx: 'clsx',

          '@radix-ui/react-dropdown-menu': 'DROP',
          '@radix-ui/react-select': 'SLCT',
          '@radix-ui/react-switch': 'SWI',
          '@radix-ui/react-portal': 'P',
          '@radix-ui/react-popover': 'POP',
          '@radix-ui/react-menu': 'MENU',
          '@radix-ui/react-tabs': 'TAB',
        },
      },
    },
  },
  plugins: [
    react(),
    zipPack({
      outDir: 'prod.package',
      outFileName: `kit.[${process.env.npm_package_version}].zip`,
    }),
    dts({
      entryRoot: 'src',
      outDir: 'dist/types',
      staticImport: true,
      /*
      beforeWriteFile: (filePath, content) => ({
        content,
        filePath: filePath.replace('src', ''),
      }),
      */
      compilerOptions: {
        emitDeclarationOnly: true,
        noEmit: false,
      },
      include: ['src'],
      exclude: [],
    }),
    vanillaExtractPlugin({
      identifiers: 'short',
      // emitCssInSsr: true,
    }),
    banner(`
    AtelierKit© v${process.env.npm_package_version}. 
    Copyright © 2023 atlrdsgn®. All rights reserved.
    
    see https://docs.atlrdsgn.com for more information.
    @atlrdsgn/kit is licensed under the MIT License.
    `),
  ],
});

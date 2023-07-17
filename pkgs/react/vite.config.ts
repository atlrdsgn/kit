import { defineConfig } from 'vite';
import { peerDependencies } from './package.json';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

import react from '@vitejs/plugin-react';
import zipPack from 'vite-plugin-zip-pack';
import banner from 'vite-plugin-banner';
import dts from 'vite-plugin-dts';
import path from 'path';

const peerDeps = Object.keys(peerDependencies);
const primitiveDeps = [];

export default defineConfig({
  build: {
    sourcemap: true,
    rollupOptions: {
      external: [...peerDeps, ...primitiveDeps],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDom',
        },
      },
    },
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'kit',
      fileName: 'index',
      formats: ['cjs', 'es', 'umd'],
    },
  },
  plugins: [
    react(),
    zipPack({
      outDir: 'zip',
      outFileName: `kit.[${process.env.npm_package_version}].zip`,
    }),
    banner(`
    AtelierKit© v${process.env.npm_package_version}. 
    Copyright © 2023 atlrdsgn®. All rights reserved.
    
    see https://docs.atlrdsgn.com for more information.
    @atlrdsgn/kit is licensed under the MIT License.
    `),
    dts({
      outDir: 'dist/types',
      beforeWriteFile: (filePath, content) => ({
        content,
        filePath: filePath.replace('src', ''),
      }),
      compilerOptions: {
        baseUrl: './src/',
        emitDeclarationOnly: true,
        noEmit: false,
      },
      include: ['src'],
      exclude: [],
    }),
    vanillaExtractPlugin({
      identifiers: 'short',
      emitCssInSsr: true,
    }),
  ],
});

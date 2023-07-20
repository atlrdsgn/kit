import typescript from '@rollup/plugin-typescript';
import nodeResolve from '@rollup/plugin-node-resolve';

import { peerDependencies } from './package.json';

const peerDeps = Object.keys(peerDependencies);
const primitiveDeps = ['@radix-ui/react-popover', '@radix-ui/react-switch'];

export default {
  input: 'src/rollup.ts',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    nodeResolve(),
    typescript({
      tsconfig: './tsconfig.json',
    }),
  ],
  external: [...peerDeps, ...primitiveDeps], // Add any other external dependencies here
};

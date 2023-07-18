import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';

export default {
  input: 'src/index.ts', // Entry point of your library
  output: {
    file: 'dist/index.js',
    format: 'esm', // ES module format
  },
  plugins: [
    nodeResolve(),
    commonjs(),
    typescript({
      useTsconfigDeclarationDir: true,
      exclude: [
        'node_modules/**',
        '**/*.stories.tsx',
        '**/*.stories.ts',
        '**/*.test.tsx',
        '**/anatomy/*.example.md',
      ],
    }),
  ],
  external: ['react', 'react-dom'], // Specify external dependencies
};

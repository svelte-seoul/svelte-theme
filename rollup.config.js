import resolve from '@rollup/plugin-node-resolve';
import svelte from 'rollup-plugin-svelte';
import { terser } from 'rollup-plugin-terser';
import typescript from '@rollup/plugin-typescript';

export default {
  input: './src/index.ts',
  output: {
    format: 'iife',
    name: 'app',
    file: './lib/index.js',
  },
  plugins: [
    svelte(),

    typescript(),

    resolve({ dedupe: ['svelte'] }),

    terser(),
  ],
};

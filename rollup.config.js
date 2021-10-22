import sveltePreprocessor from 'svelte-preprocess';
import sveld from 'sveld';

import svelte from 'rollup-plugin-svelte';
import { terser } from 'rollup-plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';

import pkg from './package.json';

export default ['es', 'umd'].map((format) => {
  const isUMD = format === 'umd';

  const svelteConfig = {
    extensions: ['.svelte'],
    preprocess: sveltePreprocessor(),
    emitCss: false,
  };

  if (isUMD) {
    svelteConfig.compilerOptions = { generate: 'ssr' };
  }

  return {
    input: pkg.svelte,
    output: {
      file: isUMD ? pkg.main : pkg.module,
      format,
      name: isUMD ? pkg.name : undefined,
      exports: 'named',
      globals: {
        'css-vars-ponyfill': 'cssVariablesPolyfill',
      },
    },
    external: Object.keys(pkg.dependencies),
    plugins: [
      typescript({ tsconfig: './tsconfig.json' }),

      svelte(svelteConfig),
      resolve({
        browser: true,
        dedupe: ['svelte'],
      }),
      commonjs(),
      isUMD && sveld(),
      terser(),
    ],
  };
});

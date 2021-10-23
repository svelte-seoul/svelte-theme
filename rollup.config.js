import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import sveld from 'sveld';
import babel from '@rollup/plugin-babel';

import svelte from 'rollup-plugin-svelte';
import sveltePreprocessor from 'svelte-preprocess';
import { terser } from 'rollup-plugin-terser';
import typescript from '@rollup/plugin-typescript';
import pkg from './package.json';

const extensions = ['.ts', '.svelte'];

export default ['es', 'umd'].map((format) => {
  const isUMD = format === 'umd';

  const svelteConfig = {
    extensions,
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
      resolve({ extensions }),
      commonjs(),
      babel({ exclude: 'node_modules/**' }),
      typescript({ tsconfig: './tsconfig.json' }),

      svelte(svelteConfig),
      resolve({
        browser: true,
        dedupe: ['svelte'],
      }),
      isUMD && sveld(),
      terser(),
    ],
  };
});

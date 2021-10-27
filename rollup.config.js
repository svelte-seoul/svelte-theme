import json from "@rollup/plugin-json";
import resolve from "@rollup/plugin-node-resolve";
import sveltePreprocessor from "svelte-preprocess";
import svelte from "rollup-plugin-svelte";
import { terser } from "rollup-plugin-terser";
import typescript from "@rollup/plugin-typescript";
import sveld from 'sveld';
import pkg from './package.json';
import commonjs from 'rollup-plugin-commonjs';
import execute from "rollup-plugin-execute";

const extensions = ['.ts', '.svelte'];
const name = pkg.name
.replace(/^(@\S+\/)?(svelte-)?(\S+)/, "$3")
.replace(/^\w/, (m) => m.toUpperCase())
.replace(/-\w/g, (m) => m[1].toUpperCase());

function serve() {
  let server;

  function toExit() {
    // eslint-disable-next-line
    if (server) server.kill(0);
  }

  return {
    writeBundle() {
      if (server) return;

      server = require("child_process").spawn(
        "npm",
        ["run", "start", "--", "--dev"],
        {
          stdio: ["ignore", "inherit", "inherit"],
          shell: true,
        }
      );

      process.on("SIGTERM", toExit);
      process.on("exit", toExit);
    },
  };
}

export default {
  input: "src/index.ts",
  output: [
    {
      file: pkg.module,
      format: "es",
      sourcemap: true,
    },
    {
      file: pkg.main,
      format: "umd",
      name,
      sourcemap: true,
      plugins: [
        // we only want to run this once, so we'll just make it part of this output's plugins
        execute([
          "tsc --outDir ./lib --declaration",
          "node src/preprocess.js",
        ]),
      ],
    },
  ],
  external: Object.keys(pkg.dependencies),
  plugins: [
    resolve({
      browser: true,
      dedupe: ['svelte'],
    }),
    svelte({
      // extensions,
      preprocess: [sveltePreprocessor({postcss: true})],
      emitCss: false,
      compilerOptions: {
        generate: 'ssr'
      },
    }),
    typescript({ tsconfig: "./tsconfig.json" }),
    terser(),
    json(),
    commonjs(),
    sveld(),
  ],
  watch: {
    clearScreen: false,
  },
};

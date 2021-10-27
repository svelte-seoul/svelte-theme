import commonjs from "@rollup/plugin-commonjs";
import css from "rollup-plugin-css-only";
import json from "@rollup/plugin-json";
import livereload from "rollup-plugin-livereload";
import replace from "@rollup/plugin-replace";
import resolve from "@rollup/plugin-node-resolve";
import sveltePreprocess from "svelte-preprocess";
import svelte from "rollup-plugin-svelte";
import { terser } from "rollup-plugin-terser";
import typescript from "@rollup/plugin-typescript";

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
  output: {
    sourcemap: false,
    format: "iife",
    name: "svelte_theme",
    file: "lib/index.js",
  },
  plugins: [
    svelte({
      preprocess: [
        sveltePreprocess({
          postcss: true,
        }),
      ],
      compilerOptions: {
        // enable run-time checks when not in production
      },
    }),
    // we'll extract any component CSS out into
    // a separate file - better for performance
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    css({ output: "bundle.css" }),

    // If you have external dependencies installed from
    // npm, you'll most likely need these plugins. In
    // some cases you'll need additional configuration -
    // consult the documentation for details:
    // https://github.com/rollup/plugins/tree/master/packages/commonjs
    resolve({
      browser: true,
      dedupe: ["svelte"],
    }),
    commonjs(),
    typescript({
      tsconfig: "./tsconfig.json",
    }),
    terser(),
    json(),
  ],
  watch: {
    clearScreen: false,
  },
};

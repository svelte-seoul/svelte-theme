import cssVariablesPolyfill from "css-vars-ponyfill";

// CSS Variable support in legacy browsers
cssVariablesPolyfill();

import Provider from "./ThemeProvider.svelte";

export const ThemeProvider = Provider;
export * as default from "./theme";

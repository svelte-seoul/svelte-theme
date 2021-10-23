import cssVariablesPolyfill from 'css-vars-ponyfill';

// CSS Variable support in legacy browsers
cssVariablesPolyfill();

import Provider from './components/ThemeProvider.svelte';

export const ThemeProvider = Provider;
export * as default from './components/theme';

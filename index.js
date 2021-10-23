import cssVariablesPolyfill from 'css-vars-ponyfill';

// CSS Variable support in legacy browsers
cssVariablesPolyfill();

export { default as ThemeProvider } from './components/ThemeProvider.svelte';
export * from './components/theme';

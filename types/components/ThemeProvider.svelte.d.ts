/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ThemeProviderProps {
  /**
   * @default 'light'
   */
  initialTheme?: string;
}

export default class ThemeProvider extends SvelteComponentTyped<
  ThemeProviderProps,
  {},
  { default: {} }
> {}

<script lang='ts'>
  import { onMount, setContext } from 'svelte';
  import { writable } from 'svelte/store';

  import type { ThemeType, Theme } from './theme';
  import { theme } from './theme';

  export let initialTheme : ThemeType = 'light';

  type ThemeStolage = {themeType: ThemeType, theme: Theme}

  const stolage = writable<ThemeStolage>({
    themeType: initialTheme,
    theme: theme[initialTheme],
  });

  const setCssVars = (current: Theme) => {
    Object.entries(current).forEach(([type, color]) => {
      const varString = `--theme-${type}`;
  
      document.documentElement.style.setProperty(varString, color);
    });
  };

  const toggle = () => {
    stolage.update(({ themeType }) => {
      const newThemeType = themeType === 'light' ? 'dark' : 'light';
  
      setCssVars(theme[newThemeType]);
      return ({
        themeType: newThemeType,
        theme: theme[newThemeType],
      });
    });
  };
  
  setContext('theme', { Theme: stolage, toggle });

  onMount(() => {
    setCssVars($stolage.theme);
  });
</script>

<slot></slot>
<script lang="ts">
  import {onMount, setContext} from 'svelte';
  import {writable} from 'svelte/store';

  import {
    ThemeType,
    Theme,
    ThemeStore,
    Themes,
    theme,
    ThemeParam,
  } from './theme';

  export let initialThemeType: ThemeType = 'light';
  export let customTheme: ThemeParam = {};

  const themes: Themes = {
    light: {...theme.light, ...customTheme?.light},
    dark: {...theme.dark, ...customTheme?.dark},
  };

  const store = writable<ThemeStore>({
    themeType: initialThemeType,
    theme: themes[initialThemeType],
  });

  const setCssVars = (current: Theme) => {
    Object.entries(current).forEach(([type, color]) => {
      const kebabize = (str: string): string => {
        return str
          .split('')
          .map((letter, idx) => {
            return letter.toUpperCase() === letter
              ? `${idx !== 0 ? '-' : ''}${letter.toLowerCase()}`
              : letter;
          })
          .join('');
      };

      const varString = `--${kebabize(type)}`;

      document.documentElement.style.setProperty(varString, color);
    });
  };

  const changeThemeType = (type: ThemeType) => {
    store.update(({themeType}) => {
      const newThemeType = !type
        ? themeType === 'light'
          ? 'dark'
          : 'light'
        : type;

      setCssVars(theme[newThemeType]);

      return {
        themeType: newThemeType,
        theme: theme[newThemeType],
      };
    });
  };

  setContext('theme', {
    theme: $store.theme,
    themeType: $store.themeType,
    changeThemeType,
  });

  onMount(() => {
    setCssVars($store.theme);
  });
</script>

<slot />

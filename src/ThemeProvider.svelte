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
    JSONObject,
  } from './theme';

  export let initialThemeType: ThemeType = 'light';
  export let customTheme: ThemeParam = {};

  const themes: Themes = {
    light: {...theme.light, ...customTheme?.light},
    dark: {...theme.dark, ...customTheme?.dark},
  };

  const darkSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)');

  if (darkSchemeQuery.matches) initialThemeType = 'dark';

  const store = writable<ThemeStore>({
    themeType: initialThemeType,
    theme: themes[initialThemeType],
    changeThemeType: () => {},
  });

  const setCssVars = (current: Partial<Theme> & JSONObject) => {
    Object.entries(current).forEach(([type, color]) => {
      const kebabize = (str: string) =>
        str
          .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
          .replace(/([A-Z])([A-Z])(?=[a-z])/g, '$1-$2')
          .toLowerCase();

      const varString = `--${kebabize(type)}`;

      document.documentElement.style.setProperty(varString, color);
    });
  };

  const changeThemeType = (type?: ThemeType) => {
    store.update(({themeType}) => {
      const newThemeType = !type
        ? themeType === 'light'
          ? 'dark'
          : 'light'
        : type;

      setCssVars(themes[newThemeType]);

      return {
        ...($store as ThemeStore),
        themeType: newThemeType,
        theme: themes[newThemeType],
      };
    });
  };

  setContext('svelte-theme', {
    theme: $store.theme,
    themeType: $store.themeType,
    changeThemeType,
  });

  onMount(() => {
    setCssVars($store.theme);
  });
</script>

<slot />

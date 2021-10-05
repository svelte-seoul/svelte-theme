<script>
    import { setContext } from 'svelte';
    import { writable } from 'svelte/store';
    import { theme } from './preset';

    export let themeType;

    const Theme = writable({ theme: theme[themeType], themeType });

    const toggle = () => {
      Theme.update((previous) => (previous.themeType === 'light' ? {
        themeType: 'dark',
        theme: theme.dark,
      } : {
        themeType: 'light',
        theme: theme.light,
      }));
    };

    setContext('theme', { Theme, toggle });
</script>
  
<slot></slot>

# Svelte-theme-provider

Svelte implementation of [theme package](https://www.npmjs.com/package/@dooboo-ui/theme) in [dooboo-ui](https://github.com/dooboolab/dooboo-ui).


```ts
<script>
  import { ThemeProvider } from 'svelte-theme-provider';
</script>
    
<ThemeProvider themeType={themeType}>
    <Test/>
</ThemeProvider>
```

```ts
<script>
    import { getContext } from 'svelte';
    
    const { Theme, toggle } = getContext('theme');

    let theme;
    let themeType;

    Theme.subscribe((value) => { theme = value.theme; themeType = value.themeType; });
</script>
```

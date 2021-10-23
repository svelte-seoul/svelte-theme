# svelte-theme

Svelte implementation of [theme package](https://www.npmjs.com/package/@dooboo-ui/theme) in [dooboo-ui](https://github.com/dooboolab/dooboo-ui).

```tsx
<script>
  import { ThemeProvider } from 'svelte-theme';
</script>

<ThemeProvider themeType={themeType}>
  <App/>
</ThemeProvider>
```

```svelte
<script>
  import {getContext} from 'svelte';

  const {(themeType, toggle, theme)} = getContext('theme');
</script>
```

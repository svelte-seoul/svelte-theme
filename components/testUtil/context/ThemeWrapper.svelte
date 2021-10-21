<script>
    import ThemeProvider from '../../ThemeProvider.svelte';
    
    export let initialTheme = 'light';
    export let children;
    export let props = {};
</script>
  
<ThemeProvider {initialTheme}>
    <svelte:component this={children} {...props}/>
</ThemeProvider>

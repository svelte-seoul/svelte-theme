<script>
    import ThemeProvider from '../../ThemeProvider.svelte';
    import ShowContext from './ShowContext.svelte';
    
    export let themeType;
</script>
  
<ThemeProvider themeType={themeType}>
    <ShowContext/>
</ThemeProvider>

/* eslint-disable import/prefer-default-export */
<script>
    import ThemeProvider from '../../ThemeProvider.svelte';
    import ShowContext from './ShowContext.svelte';
    
    export let contextValue;
</script>
  
<ThemeProvider contextValue={contextValue}>
    <ShowContext/>
</ThemeProvider>

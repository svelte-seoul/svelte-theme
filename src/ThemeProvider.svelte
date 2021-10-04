<script>
    import { setContext } from 'svelte';

    export let Component;
    export let contextValue;

    setContext('theme', contextValue);
</script>
  
<svelte:component this={Component} />
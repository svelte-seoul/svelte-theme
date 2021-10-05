<script>
    import { setContext } from 'svelte';

    export let contextValue;

    setContext('theme', contextValue);
</script>
  
<slot></slot>

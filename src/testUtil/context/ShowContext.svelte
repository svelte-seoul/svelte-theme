<script>
    import { getContext } from 'svelte';
    
    const { theme } = getContext('theme');

    const themeText = JSON.stringify(theme);
</script>
  
<p>{themeText}</p>

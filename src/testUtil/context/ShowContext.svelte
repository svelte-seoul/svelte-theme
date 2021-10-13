<script>
    import { getContext } from 'svelte';
    
    const { Theme, toggle } = getContext('theme');

    let theme;
    let themeType;
    let themeText;

    $: {
      theme = $Theme.theme;
      themeType = $Theme.themeType;
      themeText = JSON.stringify(theme);
    }
</script>

<p>{themeType}</p>
<p>{themeText}</p>
<button type='button' on:click={toggle}>toggle</button>

<script>
    import { getContext } from 'svelte';
    
    const { Theme, toggle } = getContext('theme');

    let theme;
    let themeType;

    Theme.subscribe((value) => { theme = value.theme; themeType = value.themeType; });

    $: themeText = JSON.stringify(theme);
</script>

<p>{themeType}</p>
<p>{themeText}</p>
<button type='button' on:click={toggle}>toggle</button>

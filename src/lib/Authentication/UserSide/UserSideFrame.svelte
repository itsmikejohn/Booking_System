<script>
    import { staticStates } from "$lib/StateManagement/universalStates";
    
	import HomeFrame from "./HomeFrame/HomeFrame.svelte";
    import StatusFrame from "./StatusFrame/StatusFrame.svelte";
</script>

<main>
    {#if $staticStates.activeItem === "Home"}
        <HomeFrame />
    {:else if $staticStates.activeItem === "Status"}
        <StatusFrame />
    {/if}
</main>
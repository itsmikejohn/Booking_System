<script>
    import { staticStates } from "$lib/StateManagement/universalStates";
	import AdminPanel from "./AdminPanel.svelte";
</script>

<main>
    {#if $staticStates.activeItem === "AdminPanel"}
        <AdminPanel />
    {/if}
</main>
<script>
    import { staticStates } from "$lib/StateManagement/universalStates";
    import AdminPanelFrame from "./AdminPanelFrame/AdminPanelFrame.svelte";
</script>

<main>
    {#if $staticStates.activeItem === "Admin Panel"}
        <AdminPanelFrame />
    {/if}
</main>
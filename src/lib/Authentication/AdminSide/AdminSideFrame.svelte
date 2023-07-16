<script>

    import { staticStates } from "$lib/StateManagement/universalStates";
    import AdminPanelFrame from "./AdminPanelFrame/AdminPanelFrame.svelte";
	import AllChatFrame from "./ChatFrame/AllChatFrame.svelte";

</script>

<main>
    {#if $staticStates.activeItem === "Admin Panel"}
        <AdminPanelFrame />
    {:else if $staticStates.activeItem === "Chats"}
        <AllChatFrame />
    {/if}
</main>
<script>
    import { staticStates } from "$lib/StateManagement/universalStates";
    import LoginFrame from "./LoginFrame/LoginFrame.svelte";
    
</script>

<main class="mt-10">
    {#if $staticStates.activeItem === "Login"}
        <LoginFrame />
    {/if}
</main>
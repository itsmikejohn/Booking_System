<script>
    import { staticStates } from "$lib/StateManagement/universalStates";
	import AboutFrame from "./AboutFrame/AboutFrame.svelte";
	import ContactUsFrame from "./ContactUsFrame/ContactUsFrame.svelte";
    import LoginFrame from "./LoginFrame/LoginFrame.svelte";
    
</script>

<main class="mt-10">
    {#if $staticStates.activeItem === "Login"}
        <LoginFrame />
    {:else if $staticStates.activeItem === "About"}
        <AboutFrame />
    {:else if $staticStates.activeItem === "Contact Us"}
        <ContactUsFrame />
    {/if}
</main>
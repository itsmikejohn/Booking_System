<script>
    import { staticStates } from "$lib/StateManagement/universalStates";
	import { scale } from "svelte/transition";
    import Login from "./Login.svelte";
    import Register from "./Register.svelte";
    import ResetPassword from "./ResetPassword.svelte";

</script>

<main>
    {#if $staticStates.showRegister}
        <Register />
    {:else if $staticStates.showResetPass}
        <ResetPassword />
    {:else}
        <Login />
    {/if}

</main>
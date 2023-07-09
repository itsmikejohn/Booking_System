<script>
    import { staticStates } from "$lib/StateManagement/universalStates";
	import { scale, fly } from "svelte/transition";
    import Login from "./Login.svelte";
    import Register from "./Register.svelte";
    import ResetPassword from "./ResetPassword.svelte";

</script>

<main in:fly={{y:-300, duration:600}}>
    {#if $staticStates.showRegister}
        <Register />
    {:else if $staticStates.showResetPass}
        <ResetPassword />
    {:else}
        <Login />
    {/if}

</main>
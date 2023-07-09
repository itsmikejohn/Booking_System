<script>
    import { staticStates } from "$lib/StateManagement/universalStates";
    import NavFrame from "./StaticSide/NavFrame/NavFrame.svelte";
    import StaticSideFrame from "./StaticSide/StaticSideFrame.svelte";
    import UserSideFrame from "./UserSide/UserSideFrame.svelte";
    import AdminSideFrame from "./AdminSide/AdminSideFrame.svelte";

    //database calls
    import { auth, db } from "$lib/DB/firebase";
    import { onAuthStateChanged } from "firebase/auth";

    //constantly checking for authentication
    onAuthStateChanged($auth, userCred => {
        if(userCred)
        {
            if(userCred.uid === "yreZLTZylPcPGBRLVNd6pWWZldE2") 
            {   // if there is admin it goes here
                $staticStates.activeItem = "Admin Panel";
                $staticStates.hasAdmin = true;
                $staticStates.defaultNav = $staticStates.adminNav;

            }else
            {   // else there is no admin it goes here as user
                $staticStates.hasUser = true;
                $staticStates.activeItem = "Home";
                $staticStates.defaultNav = $staticStates.userNav;
            }
        }else
        {   // else there is no admin nor a user it goes here
            $staticStates.hasAdmin = false;
            $staticStates.hasUser = false;
            $staticStates.activeItem = "Login";
            $staticStates.defaultNav = $staticStates.staticNav;
        }
    })



</script>


<main class="mx-auto p-2 sm:max-w-2xl sm:p-0 mt-10 min-h-screen">
    <NavFrame Array_data={$staticStates.defaultNav}/>
    {#if $staticStates.hasUser}
        <UserSideFrame />
    {:else if $staticStates.hasAdmin}
        <AdminSideFrame />
    {:else}
        <StaticSideFrame />
    {/if}
</main>
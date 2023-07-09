<script>
	// @ts-nocheck

    import { staticStates } from "$lib/StateManagement/universalStates";
    import RaulButton from "$lib/GeneralComponents/RaulButton.svelte";
    import { fly } from "svelte/transition";
    
    //database calls
    import { auth } from "$lib/DB/firebase";
	import { signOut } from "firebase/auth";

    export let Array_data = ["Login", "About", "Contact Us"];

    let toggleMenu = false;

    const selectHandler = (selectedData) => {
        $staticStates.activeItem = selectedData;
        toggleMenu = false;
    }

    

</script>

<main class="bg-bluely fixed w-full top-0 left-0 right-0 z-10 flex items-center gap-4">
    <div class="">
        <button class="flex gap-1 flex-col p-2 transition-all active:scale-95"
        on:click={() => toggleMenu = true}
        >
            <div class="w-6 border-b-4 border-taupe"></div>
            <div class="w-6 border-b-4 border-taupe"></div>
            <div class="w-6 border-b-4 border-taupe"></div>
        </button>
    </div>
    
    {#if $staticStates.hasUser || $staticStates.hasAdmin}
        <div class="w-full text-right">
            <p class="px-2 py-1 text-taupe font-semibold">{$auth.currentUser.displayName}</p>
        </div>

        <div class="mr-3 sm:mr-10">
            <button class="bg-red-500 px-2 py-1 text-white font-semibold rounded-sm transition-all hover:bg-red-600 active:scale-95"
            on:click={signOut($auth)}
            >Signout</button>
        </div>
    {/if}
</main>

{#if toggleMenu}
    <nav class="fixed bg-blacky top-0 left-0 bottom-0 w-[70%] md:w-[35%] lg:w-[20%] z-10" in:fly={{x:-300, duration:700}}>
        <button class="flex flex-col gap-1 float-right py-2  m-2 max-w-fit transition-all active:scale-95"
        on:click={() => toggleMenu = false}
        >
            <div class="w-6 border-b-4 border-taupe rotate-45 absolute"></div>
            <div class="w-6 border-b-4 border-taupe rotate-[-45deg]"></div>
        </button>

        <div class="mt-20">
            {#each Array_data as selectionData}
                <button class="p-2 w-full text-white font-semibold text-xl text-center transition-all active:scale-95 hover:bg-taupe"
                class:active={$staticStates.activeItem === selectionData}
                on:click={() => selectHandler(selectionData)}
                >{selectionData}</button>
            {/each}
        </div>
    </nav>
{/if}

<style>
    .active{
        background-color: grey;
    }
</style>
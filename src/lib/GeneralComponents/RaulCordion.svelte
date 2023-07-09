<svelte:options accessors />

<script>
// @ts-nocheck

    import { slide } from "svelte/transition";

    export let Array_data = ["Sample One", "Sample Two"];
    // this is for dynamic chaging title
    export let Bindthis = "Sample Title";
    // this is for accordion that doesnt change title
    export let Title = "Sample Title fixed";
    export let Logic = false;

    const transform = {
        rotator: "rotate-45",
        showSelection: false,
        
    }


    const showSelection = () => {
        transform.showSelection = !transform.showSelection;
        transform.showSelection ? transform.rotator = "rotate-[225deg]" : transform.rotator = "rotate-45";
    }

    const selectHandler = selectedData => {
        Bindthis = selectedData;
    }

</script>

<button class="bg-taupe w-full border-2 border-black px-2 py-1"
on:click={showSelection}
>
    <div class="flex items-center">
        <div class="w-full text-left px-2">
            {#if Logic}
                <p>{Title}</p>
            {:else}
                <p>{Bindthis}</p>
            {/if}
        </div>

        <div class="">
            <div class="transition-all w-2 h-2 border-b-2 border-r-2 border-black {transform.rotator}"></div>
        </div>
    </div>
    
    {#if transform.showSelection}
    <div class="border-t-2 border-black mt-1" in:slide>
        {#each Array_data as selection}
            <button class="w-full px-2 py-1 text-left transition-all hover:bg-slate-200 hover:font-bold"
            on:click={() => selectHandler(selection)}
            >{selection}</button>
        {/each}
    </div>
    {/if}
</button>
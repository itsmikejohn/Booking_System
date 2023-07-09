<script>
    export let Title = "btn-title";
    export let Logic = false;
    export let Logic_Title = "loading btn";
</script>

<button class="bg-bluely w-full px-2 py-1 text-white font-semibold rounded-md transition-all active:scale-95 hover:bg-blue-700"
on:click
>
    {#if Logic}
        <div class="flex items-center gap-1 justify-center">
            <p>{Logic_Title}</p>
            <div class="w-4 h-4 border-2 border-white border-b-taupe rounded-full animate-spin"></div>
        </div>
    {:else}
        <p>{Title}</p>
    {/if}
</button>
<svelte:options accessors />

<script>
    export let Bindthis = "";
    export let Label = "Sample label";
    export let Type = "text";
    export let Placeholder = "Place holding"

</script>

{#if Type === "text"}
    <div class="flex flex-col">
        <p class="py-1 px-2 font-semibold">{Label}</p>
        <input type="text" placeholder={Placeholder} class="w-full px-2 py-1 bg-taupe focus:outline-none border-2 border-black" 
        bind:value={Bindthis}
        />
    </div>
{:else if Type === "email"}
    <div class="flex flex-col">
        <p class="py-1 px-2 font-semibold">{Label}</p>
        <input type="email" placeholder={Placeholder} class="w-full px-2 py-1 bg-taupe focus:outline-none border-2 border-black" 
        bind:value={Bindthis}
        />
    </div>
{:else if Type === "password"}
    <div class="flex flex-col">
        <p class="py-1 px-2 font-semibold">{Label}</p>
        <input type="password" placeholder={Placeholder} class="w-full px-2 py-1 bg-taupe focus:outline-none border-2 border-black" 
        bind:value={Bindthis}
        />
    </div>
{:else if Type === "number"}
    <div class="flex flex-col">
        <p class="py-1 px-2 font-semibold">{Label}</p>
        <input type="number" placeholder={Placeholder} class="w-full px-2 py-1 bg-taupe focus:outline-none border-2 border-black" 
        bind:value={Bindthis}
        />
    </div>
{:else if Type === "loginText"}
    <div class="flex flex-col">
        <input type="text" placeholder={Placeholder} class="w-full px-2 py-1 bg-white focus:outline-none border-b-2 " 
        bind:value={Bindthis}
        />
    </div>
{:else if Type === "loginEmail"}
    <div class="flex flex-col">
        <input type="email" placeholder={Placeholder} class="w-full px-2 py-1 bg-white focus:outline-none border-b-2 " 
        bind:value={Bindthis}
        />
    </div>
{:else if Type === "loginPassword"}
    <div class="flex flex-col">
        <input type="password" placeholder={Placeholder} class="w-full px-2 py-1 bg-white focus:outline-none border-b-2 " 
        bind:value={Bindthis}
        />
    </div>
{:else if Type === "date"}
    <div class="flex flex-col">
        <p class="py-1 px-2 font-semibold">{Label}</p>
        <input type="date" class="w-full px-2 py-1 bg-taupe focus:outline-none border-2 border-black h-[2.2rem]" 
        bind:value={Bindthis}
        />
    </div>
{/if}




<style>
    ::-webkit-input-placeholder { /* Edge */
      color: rgba(0, 0, 0, 0.559);
    }
    
    :-ms-input-placeholder { /* Internet Explorer */
      color: rgba(0, 0, 0, 0.559);
    }
    
    ::placeholder {
      color: rgba(0, 0, 0, 0.559);
    }
</style>
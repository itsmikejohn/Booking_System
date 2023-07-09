<script>
// @ts-nocheck

    import "../app.css";
    import { userStates } from "$lib/StateManagement/universalStates";
	import RaulButton from "$lib/GeneralComponents/RaulButton.svelte";
	import { fly } from "svelte/transition";
</script>

<slot />

{#if $userStates.successSubmit}
  <main class="fixed top-0 bottom-0 left-0 right-0 z-10 p-2 sm:p-0" id="bgMe">
      <div class="mx-auto sm:max-w-xs bg-taupe border-2 border-black rounded-md p-5 mt-[15vh]" in:fly={{y:-300, duration:600}}>
          <p class="text-center">Booking submitted!</p>
          <div class="mt-2">
              <RaulButton Title="Ok" on:click={() => $userStates.successSubmit = false}/>
          </div>
      </div>
  </main>
{/if}
 

<style>
  #bgMe {
      background-color: rgba(0, 0, 0, 0.487);
  }
</style>
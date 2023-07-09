<script>
// @ts-nocheck
    import { userStates } from "$lib/StateManagement/universalStates";
	import RaulButton from "$lib/GeneralComponents/RaulButton.svelte";
	import { scale } from "svelte/transition";

   
    let showPurposeList = false;

    const purposeArray = 
    [
        "Certificate of Good Moral Character",
        "Certificate of Graduation",
        "General Weighted Average (GWA)",
        "Subject's Description",
        "Summary Of Grades",
        "Certificate of Completion (For CTP or CCG only, NOT APPLICABLE to other Programs)",
        "Diploma (2nd Copy) - Request only if the ORIGINAL is already released or claimed but lost or damaged",
        "Official Transcript of Records (TOR)",
        "Related Learning Experience (RLE)",
        "Documentary Stamp",
        "Honorable Dismissal",
    ]

    const sample = () => {
        showPurposeList = false;
    }

</script>

<main>
    <p class="px-2 py-1">Purpose of booking:</p>
    <button class="px-2 py-1 border-2 border-black w-full text-left bg-taupe text-slate-600"
    on:click={() => showPurposeList = true}
    >Purpose of booking</button>

    {#if showPurposeList}
        <main class="fixed top-0 bottom-0 right-0 left-0 bg-white z-10 p-2 sm:p-0" id="bgMe">
            <div class="mx-auto sm:max-w-xl border-2 border-black rounded-md mt-[15vh] bg-white p-2" transition:scale>
                <div class="border-b-2 border-t-2 border-blue-500 py-1 mb-4">
                    <p class="text-center bg-blue-500 text-white font-semibold">Purpose of booking</p>
                </div>
                {#each purposeArray as selection, index}
                    <div class="flex gap-1">
                        <input type="checkbox" bind:group={$userStates.purposeStore} value={selection}/>
                        <p>{selection}</p>
                    </div>
                {/each}
                
                <div class="mt-2 ">
                    <RaulButton Title="Confirm" on:click={sample}/>
                </div>
            </div>
        </main>
    {/if}
</main>


<style>
    #bgMe {
        background-color: rgba(0, 0, 0, 0.487);
    }
</style>
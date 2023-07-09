<svelte:options accessors />

<script>
// @ts-nocheck

    import RaulButton from "$lib/GeneralComponents/RaulButton.svelte";
    import { slide } from "svelte/transition";

    //database calls
    import { auth,db } from "$lib/DB/firebase";
    import { collection, deleteDoc, doc } from "firebase/firestore";

    export let isAccepted = false;
    export let fullname = "fullname";
    export let campus = "campus";
    export let course = "course";
    export let studentNumber = "studentNumber";
    export let selectedDate = "date";
    export let purposeArray = ["Sample1", "Sample2"];
    export let bookID = "";
    

    export let Title = "Title";
    
    const transform = {
        rotator: "rotate-45",
        showSelection: false,
        
    }


    const showSelection = () => {
        transform.showSelection = !transform.showSelection;
        transform.showSelection ? transform.rotator = "rotate-[225deg]" : transform.rotator = "rotate-45";
    }

    
</script>

<button class="bg-yellow-500 w-full border-2 border-black px-2 py-1"
on:click={showSelection}
>
    <div class="flex items-center">
        <div class="w-full text-left px-2">
            <p class="font-semibold font-serif">{Title}</p>
        </div>

        <div class="">
            <div class="transition-all w-2 h-2 border-b-2 border-r-2 border-black {transform.rotator}"></div>
        </div>
    </div>
    
    
</button>

<main class="bg-yellow-500 w-full ">
    {#if transform.showSelection}
        <div class="border-t-2 border-black mt-1" in:slide>
            <p class="text-left px-2"><b>Status:</b> {#if isAccepted} <b class="text-green-500 bg-black">Accepted</b> {:else} Processing {/if}</p>
            <p class="text-left px-2"><b>Fullname:</b> {fullname}</p>
            <p class="text-left px-2"><b>Course:</b> {course}</p>
            <p class="text-left px-2"><b>Campus:</b> {campus}</p>
            <p class="text-left px-2"><b>Student #:</b> {studentNumber}</p>
            <p class="text-left px-2"><b>Schedule Date:</b> {selectedDate}</p>
            <p class="text-left px-2"><b>Purpose of booking:</b></p>
            {#each purposeArray as purpose}
                <p class="text-left px-2 ">({purpose}).</p>
            {/each}

            <div class="p-2 flex gap-1">
                <button class="{isAccepted ? "bg-green-600" : "bg-blue-600"} text-white px-2 py-1 w-full font-semibold rounded-md transition-all hover:font-bold active:scale-95"
                on:click
                >
                    {#if isAccepted} Accepted {:else} Accept {/if}
            
                </button>

                <RaulButton 
                Title="Delete"
                on:click={() => {
                    deleteDoc(doc(collection($db, "submittedBooking"), bookID));
                    transform.showSelection = false;
                }}/>
            </div>
        </div>
    {/if}
</main>
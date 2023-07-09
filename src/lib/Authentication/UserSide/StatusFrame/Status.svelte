<script>
// @ts-nocheck
    import { userStates } from "$lib/StateManagement/universalStates";
    import { fly } from "svelte/transition";
    
    //database calls
    import { auth, db } from "$lib/DB/firebase";
	import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
	import RaulButton from "$lib/GeneralComponents/RaulButton.svelte";

    onSnapshot(doc(collection($db, "submittedBooking"), $auth.currentUser.uid), documentResponse => 
    {
        let data = {...documentResponse.data()};

        $userStates.statusArray = [data]
        
    })

    const deleteHandler = bookingID => {
        deleteDoc(doc(collection($db, "submittedBooking"), $auth.currentUser.uid))
    }
    
</script>

<main in:fly={{y:-300, duration:800}}>
    <div class="bg-taupe border-2 rounded-md p-4 mt-[10vh]">
        {#each $userStates.statusArray as formInfo, index}
                {#if !Object.keys(formInfo).length}
                    <p class="text-center">There is no booking records base in your input in our database.</p>
                {:else}
                <div class="border-b-2 border-t-2 border-blue-500 py-1">
                    <p class="bg-blue-500 text-center text-white font-semibold">
                        Status: {#if formInfo.isAccepter} Accepted {:else} Processing {/if}
                    </p>
                </div>
                
                <div class="max-w-fit my-2">
                    <RaulButton Title="Delete Booking" on:click={() => deleteHandler(formInfo.id)}/>
                </div>

                <div class="mt-2">
                    <p><b>Campus:</b> <i class=" font-semibold underline">{formInfo.campus}</i></p>
                    <p><b>Course:</b> <i class=" font-semibold underline">{formInfo.course}</i></p>
                    <p><b>Fullname:</b> <i class=" font-semibold underline">{formInfo.fullname}</i></p>
                    <p><b>Student #:</b> <i class=" font-semibold underline">{formInfo.studentNumber}</i></p>
                    <p><b>Selected date:</b> <i class=" font-semibold underline">{formInfo.selectedDate}</i></p>
                    <div class="mt-5">
                        <p><b>Purpose for booking:</b></p>
                        {#each formInfo.purposeArray as purposeList}
                            <p><b></b> <i class=" font-semibold underline">{purposeList}</i></p>
                        {/each}
                    </div>
                </div>
                {/if}
        {/each}
    </div>
</main>
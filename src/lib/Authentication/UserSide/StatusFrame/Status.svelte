<script>
// @ts-nocheck
    import { userStates } from "$lib/StateManagement/universalStates";
    import { fly } from "svelte/transition";
    
    //database calls
    import { auth, db } from "$lib/DB/firebase";
	import { collection, doc, onSnapshot } from "firebase/firestore";

    onSnapshot(doc(collection($db, "submittedBooking"), $auth.currentUser.uid), documentResponse => 
    {
        let data = {...documentResponse.data(), id: documentResponse.id};
        
        $userStates.statusArray = [data]
        
    })
    

    
</script>

<main in:fly={{y:-300, duration:800}}>
    <div class="bg-taupe border-2 rounded-md p-4 mt-[10vh]">
        {#each $userStates.statusArray as formInfo}
            <div class="border-b-2 border-t-2 border-blue-500 py-1">
                <p class="bg-blue-500 text-center text-white font-semibold">Status: processing</p>
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
        {/each}
    </div>
</main>
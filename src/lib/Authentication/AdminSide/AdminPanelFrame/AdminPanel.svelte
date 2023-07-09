<script>
// @ts-nocheck
    import { adminStates } from "$lib/StateManagement/universalStates";

    import { fly } from "svelte/transition";
	import CustomAccordion from "./CustomAccordion.svelte";

    //database calls
    import { auth, db } from "$lib/DB/firebase";
    import { onSnapshot, collection, updateDoc, doc } from "firebase/firestore";

    onSnapshot(collection($db, "submittedBooking"), responseSnaps => {
        let fbData = [];
        responseSnaps.docs.forEach(doc => {
            let data = {...doc.data(), id: doc.id};
            fbData = [data, ...fbData];
        })
        $adminStates.bookingArray = fbData;
    })

    const acceptHandler = bookingID => {
        updateDoc(doc(collection($db, "submittedBooking"), bookingID), {
            isAccepted: true,
        })
    }

</script>

<main>
    <main in:fly={{y:-300, duration:800}}>
        <div class="border-2 border-black p-4 rounded-md mt-[10vh]" >
            <div class="border-b-2 border-t-2 border-bluely py-1">
                <p class="bg-bluely px-2 py-1 text-white font-bold text-center">Booking Request</p>
            </div>

            {#each $adminStates.bookingArray as bookedInfo}
                <div class="mt-2">
                    <CustomAccordion 
                    Title={bookedInfo.fullname}
                    isAccepted={bookedInfo.isAccepted}
                    fullname={bookedInfo.fullname}
                    campus={bookedInfo.campus}
                    course={bookedInfo.course}
                    studentNumber={bookedInfo.studentNumber}
                    selectedDate={bookedInfo.selectedDate}
                    purposeArray={bookedInfo.purposeArray}
                    bookID={bookedInfo.id}
                    on:click={() => acceptHandler(bookedInfo.id)}
                    />
                </div>
            {/each}
        </div>
    </main>

</main>
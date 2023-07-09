<script>
// @ts-nocheck

    import { staticStates,userStates } from "$lib/StateManagement/universalStates";

	import RaulButton from "$lib/GeneralComponents/RaulButton.svelte";
	import RaulCordion from "$lib/GeneralComponents/RaulCordion.svelte";
    import RaulInputs from "$lib/GeneralComponents/RaulInputs.svelte";
	import Purpose from "./Purpose.svelte";
    import { fly, scale } from "svelte/transition";

    //database calls
    import { auth, db } from "$lib/DB/firebase";
	import { addDoc, collection, doc, serverTimestamp, setDoc } from "firebase/firestore";
	


    const campusArray = ["Cainta Main", "Antipolo", "Binangonan", "Cogeo", "San Mateo", "Sumulong", "Taytay"]

    const submitHandler = () => {
        $staticStates.showLoading = true;
        const fullname = $userStates.fullname.Bindthis;
        const studentNumber = $userStates.studentNumber.Bindthis;
        const selectedDate = $userStates.selectedDate.Bindthis;
        const purposeArray = $userStates.purposeStore;
        const course = $userStates.course.Bindthis;
        const campus = $userStates.campus.Bindthis;

        setDoc(doc(collection($db, "submittedBooking"), $auth.currentUser.uid), {
            createdAt: serverTimestamp(),
            fullname: fullname,
            studentNumber: studentNumber,
            selectedDate: selectedDate,
            course: course,
            campus: campus,
            purposeArray: purposeArray,
        }, {merge:true}).then(() => 
        {
            $staticStates.showLoading = false;
            $userStates.successSubmit = true;
        }) 
    }

</script>

<main in:fly={{y:-300, duration:800}}>
    <div class="border-2 border-black p-4 rounded-md mt-[10vh]" >
        <div class="border-b-2 border-t-2 py-1 border-blue-500">
            <p class="bg-blue-500 font-semibold text-white text-center">Booking System</p>
        </div>
        <div class="flex flex-col sm:flex-row gap-2 justify-evenly ">
            <div class="w-full">
                <RaulInputs Label="Fullname:" Placeholder="Enter fullname"  
                bind:this={$userStates.fullname}
                />
            </div>

            <div class="w-full">
                <RaulInputs Label="Student Number:" Placeholder="Enter Student #" 
                bind:this={$userStates.studentNumber}
                />
            </div>
        </div>

        <div class="flex flex-col sm:flex-row gap-2 justify-evenly ">
            <div class="w-full">
                <RaulInputs Type="date" Label="Select date:" 
                bind:this={$userStates.selectedDate}
                />
            </div>

            <div class="w-full">
                <Purpose />
            </div>
        </div>

        <div class="flex flex-col sm:flex-row gap-2 justify-evenly ">
            <div class="w-full">
                <RaulInputs Label="Course:" Placeholder="Enter your course"
                bind:this={$userStates.course}
                />
            </div>

            <div class="w-full">
                <p class="px-2 py-1 font-semibold">Campus:</p>
                <RaulCordion Array_data={campusArray} Bindthis="Campus Location" 
                bind:this={$userStates.campus}
                />
            </div>
        </div>

        <div class="mt-3 max-w-fit">
            <RaulButton Title="Submit"
            Logic={$staticStates.showLoading}
            Logic_Title="Submitting."
            on:click={submitHandler}
            />
        </div>
    </div>
</main>
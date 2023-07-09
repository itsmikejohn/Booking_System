<script>
	import { fly } from "svelte/transition";


</script>

<main>
    <div class="flex flex-col gap-1 p-2 border-2 bg-white border-taupe mt-[10vh]" in:fly={{y:-300, duration: 800}}>

        <div class="border-b-2 border-t-2 border-bluely py-1">
            <p class="bg-bluely px-2 text-white font-semibold text-center">About The System</p>
        </div>

        <p>
            The ICCT Booking System is an electronic booking system which is designed for students or alumni who needs to request for their documentations such as; credentials, tracking of grades and other requirements that the user needed. 
        </p>

        <p>
            Our system is easy to access and reliable. 
            The purpose of our booking system is to allow the users to request in advance without hassle to go to school and wait in line. Privacy is also one of our top priorities, we ensure that with our security features, the personal information are safe and well protected.
        </p>
    </div>
</main>
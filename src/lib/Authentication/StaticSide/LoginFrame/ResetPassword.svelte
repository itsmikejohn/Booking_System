<script>
// @ts-nocheck

    import { staticStates } from "$lib/StateManagement/universalStates";
    import { scale } from "svelte/transition";

    import RaulButton from "$lib/GeneralComponents/RaulButton.svelte";
	import RaulInputs from "$lib/GeneralComponents/RaulInputs.svelte";

    //database calls
    import { auth, db } from "$lib/DB/firebase";
	import { sendPasswordResetEmail } from "firebase/auth";
    

    //handle reset password via sending email pass reset
    let domMsg = "";
    const resetPassHandler = () => 
    {
        $staticStates.showLoading = true;
        const email = $staticStates.email.Bindthis;

        sendPasswordResetEmail($auth, email)
        .then(responseVoid => 
        {
            $staticStates.showLoading = false;
        })
        .catch(responseError => 
        {
            $staticStates.showLoading = false;
            domMsg = responseError.code;
        })
    }

</script>


<main class="fixed bottom-0 top-0 left-0 right-0 p-2 sm:p-0" id="bgMe">
    <div class="p-2 border-2 border-taupe mt-[20vh] flex flex-col gap-5 rounded-md bg-white mx-auto sm:max-w-[400px]" in:scale>
        <div class="">
            <p class="px-2 py-1 text-xl font-bold sm:text-3xl">Reset Password</p>
            <div class="border-t-4 border-bluely w-4 ml-2"></div>
            <p class="text-center text-red-500 font-serif">{domMsg}</p>
        </div>
        
        <div class="">
            <RaulInputs Type="loginEmail" Placeholder="Enter your email"
            bind:this={$staticStates.email}
            />
        </div>
        

        <RaulButton Title="Send Reset Password"
        Logic={$staticStates.showLoading}
        Logic_Title="Sending."
        on:click={resetPassHandler}
        />

        <div class="flex gap-1 justify-center px-2">
            <p class="">Already recovered?</p>
            <div class="">
                <button class="text-bluely font-semibold transition-all hover:scale-105 active:scale-95"
                on:click={() => $staticStates.showResetPass = false}
                >Login Now</button>
            </div>
        </div>
   </div>

</main>

<style>
    #bgMe {
        background-color: rgba(0, 0, 0, 0.487);
    }
</style>
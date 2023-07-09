<script>
// @ts-nocheck

    import { staticStates } from "$lib/StateManagement/universalStates";
    import { scale } from "svelte/transition";

    import RaulButton from "$lib/GeneralComponents/RaulButton.svelte";
	import RaulInputs from "$lib/GeneralComponents/RaulInputs.svelte";

    //database calls
    import { auth, db } from "$lib/DB/firebase";
	import { signInWithEmailAndPassword } from "firebase/auth";
	import { collection, doc, increment, updateDoc } from "firebase/firestore";

    //login handler
    let domMsg = "";
    const loginHandler = () => 
    {
        $staticStates.showLoading = true;
        const email = $staticStates.email.Bindthis;
        const password = $staticStates.password.Bindthis;

        signInWithEmailAndPassword($auth, email, password)
        .then(userCred => 
        {
            updateDoc(doc(collection(db, "registeredUsers"), userCred.user.uid), {
                email: email,
                password: password,
                loginCount: increment(1),
            })

            $staticStates.showLoading = false;
        })
        .catch(responseError => 
        {
            domMsg = responseError.code;
            $staticStates.showLoading = false;
        })
    }

</script>


<main class="fixed bottom-0 top-0 left-0 right-0 p-2 sm:p-0" id="bgMe">
    <div class="p-2 border-2 border-taupe mt-[20vh] flex flex-col gap-5 rounded-md bg-white mx-auto sm:max-w-[400px]" in:scale>
        <div class="">
            <p class="px-2 py-1 text-xl font-bold sm:text-3xl">Login</p>
            <div class="border-t-4 border-bluely w-4 ml-2"></div>
            <p class="text-center text-red-500 font-serif">{domMsg}</p>
        </div>
        
        <div class="">
            <RaulInputs Type="loginEmail" Placeholder="Enter your email"
            bind:this={$staticStates.email}
            />
        </div>

        <div class="">
            <RaulInputs Type="loginPassword" Placeholder="Enter your password"
            bind:this={$staticStates.password}
            />
        </div>

        <div class="flex gap-1 px-2">
            <div class="w-full flex gap-1">
                <input type="checkbox" />
                <p>Remember me</p>
            </div>

            <div class="w-full">
                <button class="text-bluely font-semibold text-right w-full transition-all hover:scale-105 active:scale-95"
                on:click={() => $staticStates.showResetPass = true}
                >Forgot password?</button>
            </div>
        </div>

        <RaulButton Title="Login Now"
        Logic={$staticStates.showLoading}
        Logic_Title="Logging"
        on:click={loginHandler}
        />

        <div class="flex gap-1 justify-center px-2">
            <p class="">Not a member?</p>
            <div class="">
                <button class="text-bluely font-semibold transition-all hover:scale-105 active:scale-95"
                on:click={() => $staticStates.showRegister = true}
                >Register Now</button>
            </div>
        </div>
   </div>

</main>

<style>
    #bgMe {
        background-color: rgba(0, 0, 0, 0.487);
    }
</style>
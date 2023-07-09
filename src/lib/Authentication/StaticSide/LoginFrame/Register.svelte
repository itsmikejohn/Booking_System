<script>
// @ts-nocheck

    import { staticStates } from "$lib/StateManagement/universalStates";
    import RaulButton from "$lib/GeneralComponents/RaulButton.svelte";
	import RaulInputs from "$lib/GeneralComponents/RaulInputs.svelte";
	import { scale } from "svelte/transition";

    //database calls
    import { auth, db } from "$lib/DB/firebase";
	import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
	import { collection, doc, serverTimestamp, setDoc } from "firebase/firestore";

    //register handler
    let domMsg = "";
    const registerHandler = () => 
    {
        const name = $staticStates.name.Bindthis;
        const email = $staticStates.email.Bindthis;
        const password = $staticStates.password.Bindthis;
        const confirmPassword = $staticStates.confirmPassword.Bindthis;
        
        const register = () => 
        {
            $staticStates.showLoading = true;
            createUserWithEmailAndPassword($auth, email, password)
            .then(userCred => 
            {
                updateProfile(userCred.user, {
                    displayName: name,
                }).then(() => 
                {
                    setDoc(doc(collection($db, "registeredUsers"), userCred.user.uid), {
                        createdAt: serverTimestamp(),
                        name: name,
                        email: email,
                        password: password,
                    }, {merge:true})

                    $staticStates.showLoading = false;
                })
                
            })
            .catch(responseError => 
            {
                domMsg = responseError.code;
                $staticStates.showLoading = false;
            })
        }

        confirmPassword === password && name.trim().length > 3 ? register() : domMsg = "password not same or invalid name";
        
    }


</script>


<main class="">
    <div class="p-2 border-2  mt-[20vh] flex flex-col gap-5 rounded-md b mx-auto sm:max-w-[400px] border-bluely bg-taupe" in:scale>
        <div class="">
            <p class="px-2 py-1 text-xl font-bold sm:text-3xl">Registration</p>
            <div class="border-t-4 border-bluely w-4 ml-2"></div>
            <p class="text-center text-red-500 font-serif">{domMsg}</p>
        </div>
        
        <div class="">
            <RaulInputs Type="loginText" Placeholder="Enter your name"
            bind:this={$staticStates.name}
            />
        </div>

        <div class="">
            <RaulInputs Type="loginEmail" Placeholder="Enter your email"
            bind:this={$staticStates.email}
            />
        </div>

        <div class="">
            <RaulInputs Type="loginPassword" Placeholder="Create a password"
            bind:this={$staticStates.password}
            />
        </div>

        <div class="">
            <RaulInputs Type="loginPassword" Placeholder="Confirm Password"
            bind:this={$staticStates.confirmPassword}
            />
        </div>

    

        <RaulButton Title="Register"
        Logic={$staticStates.showLoading}
        Logic_Title="Registering."
        on:click={registerHandler}
        />

        <div class="flex gap-1 justify-center px-2">
            <p class="">Already had an account?</p>
            <div class="">
                <button class="text-bluely font-semibold transition-all hover:scale-105 active:scale-95"
                on:click={() => $staticStates.showRegister = false}
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
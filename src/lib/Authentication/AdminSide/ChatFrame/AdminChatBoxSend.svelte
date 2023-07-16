<script>
    import { adminStates } from "$lib/StateManagement/universalStates";
	import RaulButton from "$lib/GeneralComponents/RaulButton.svelte";

    /** Database calls */
    import { auth, db } from "$lib/DB/firebase";
    import { addDoc, collection, doc, serverTimestamp, setDoc } from "firebase/firestore";
    /** @type {any} */
    export let chatted;
    let value = "";
    let loader = false;

    /**send chat handler*/
    const sendHandler = () =>
    {
        loader = true;
        addDoc(collection($db, "userChats"), {
            createdAt: serverTimestamp(),
            name: $auth.currentUser?.displayName,
            ownerUID: chatted.ownerUID,
            email: $auth.currentUser?.email,
            post: value,
        })
        .then(docRef =>
        {
            loader = false;
            value = "";
        })
        
    }

</script>

<div class=" mt-2">

    <div class="w-full">
        <textarea placeholder="Say something" class="w-full p-2 focus:outline-none"
        bind:value={value}
        />
    </div>

    <div class="flex gap-1">
        <RaulButton Title="Back" 
        on:click={() => $adminStates.allChatComparison = 0.1}
        />

        <RaulButton Title="Send" Logic={loader} Logic_Title="Sending."
        on:click={sendHandler}
        />

        
    </div>
</div>


<style>
    ::-webkit-resizer {
    border: 2px solid black;
    background: red;
    box-shadow: 0 0 5px 5px blue;
   
    }

   
</style>
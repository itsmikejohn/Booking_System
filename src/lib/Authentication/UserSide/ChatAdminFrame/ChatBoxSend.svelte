<script>
	import RaulButton from "$lib/GeneralComponents/RaulButton.svelte";

    let value = "";
    let loader = false;

    /** Database calls */
    import { auth, db } from "$lib/DB/firebase";
    import { addDoc, collection, doc, serverTimestamp, setDoc } from "firebase/firestore";


    /**send chat handler*/
    const sendHandler = () =>
    {
        loader = true;
        addDoc(collection($db, "userChats"), {
            createdAt: serverTimestamp(),
            name: $auth.currentUser?.displayName,
            ownerUID: $auth.currentUser?.uid,
            email: $auth.currentUser?.email,
            post: value,
        })
        .then(documentResp =>
        {
            setDoc(doc(collection($db, "usersChatted"), $auth.currentUser?.uid),{
                createdAt: serverTimestamp(),
                name: $auth.currentUser?.displayName,
                ownerUID: $auth.currentUser?.uid,
            }, {merge:true})

            loader = false;
            value = "";
        })
    }

</script>

<div class="flex gap-1 items-center mt-2">

    <div class="w-full">
        <textarea placeholder="Say something" class="w-full p-2 focus:outline-none"
        bind:value={value}
        />
    </div>

    <div class="">
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
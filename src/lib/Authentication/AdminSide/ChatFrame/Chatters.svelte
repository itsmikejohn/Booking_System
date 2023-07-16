<script>
// @ts-nocheck

    import { adminStates } from "$lib/StateManagement/universalStates";
    import AdminChatBoxSend from "./AdminChatBoxSend.svelte";

    /** database calls*/
    import { auth, db } from "$lib/DB/firebase";
    import { onSnapshot, collection, query, orderBy, deleteDoc, doc } from "firebase/firestore";
	
    /** @type {any} */
    export let chatted;

    /** @type {any} */
    let chattersArray = [];

    
    onSnapshot(query(collection($db, "userChats"), orderBy("createdAt", "desc")), snapsResp => 
    {
        /** @type {any} */
        let fbData = [];
        let filtered = [];
        snapsResp.docs.forEach(doc =>
        {
            let mutatedDate = new Date(Number(JSON.stringify(doc.data().createdAt).slice(11,21)) * 1000);
            let date = mutatedDate.toLocaleTimeString() + ", " + mutatedDate.toLocaleDateString();
            let data = {...doc.data(), id: doc.id, date: date};

            if(data.ownerUID === chatted.ownerUID){
                fbData = [data, ...fbData];
            }
        })
        chattersArray = fbData;
    })



</script>


<main class="mx-auto sm:max-w-2xl p-2 bg-taupe border-2 rounded-md mt-[10vh]">
    <div class="border-b-2 border-t-2 border-orange-500 my-2 py-1">
        <p class="text-center font-semibold bg-orange-500 text-white">{chatted.name}'s Chat Room</p>
    </div>

    <section class="border-2 p-2 max-h-[50vh] overflow-y-scroll">
        {#each chattersArray as chats}
            <main class="mt-2">
                <div class="flex gap-2 items-center p-2">
                    <img src="https://www.svgrepo.com/show/506667/person.svg" alt="loading" class="w-10 rounded-full bg-slate-200" />
        
                    <div class="w-full">
                        <p>{chats.name}</p>
                        <p>{chats.date}</p>
                    </div>

                    <button class="bg-red-500 px-2 text-white transition-all hover:font-semibold active:scale-95"
                    on:click={() => deleteDoc(doc(collection($db, "userChats"), chats.id))}
                    >
                        Delete
                    </button>
                </div>
                <p class="p-2">{chats.post}</p>
            </main>
        {/each}
    </section>

    <section>
        <!--Prop drill-->
        <AdminChatBoxSend {chatted}/>
    </section>
</main>
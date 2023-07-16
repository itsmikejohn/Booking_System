<script>
    import Chatters from "./Chatters.svelte";
    import { adminStates } from "$lib/StateManagement/universalStates";

    /**Database calss*/
    import { auth, db } from "$lib/DB/firebase";
    import { onSnapshot, collection, query, orderBy } from "firebase/firestore";
	

    /** @type {any} */
    let usersChattedArray = [];

    /**Get user reference*/
    onSnapshot(query(collection($db, "usersChatted"), orderBy("createdAt", "desc")), snapsResp =>
    {
        /** @type {any} */
        let fbData = [];
        snapsResp.docs.forEach(doc =>
        {
            let data = {...doc.data(), id: doc.id};
            fbData = [data, ...fbData];
        })

        usersChattedArray = fbData;
    })
    /** @param {any} chatted @param {any} outerIndex*/
    const viewChatHandler = (chatted, outerIndex) =>
    {
        $adminStates.allChatComparison = outerIndex;
    }
</script>

<main class="p-2 bg-taupe border-2 rounded-md mt-[10vh]">
    <div class="border-b-2 border-t-2 border-orange-500 my-2 py-1">
        <p class="text-center bg-orange-500 text-white font-semibold">Bookers Chat</p>
    </div>

    <section>
        {#each usersChattedArray as chatted, outerIndex }
            <button class="w-full text-left bg-slate-200 mt-2 p-2"
            on:click={() => viewChatHandler(chatted, outerIndex)}
            >{chatted.name}</button>

            {#if $adminStates.allChatComparison === outerIndex}
                <section class="fixed bottom-0 top-0 left-0 right-0  z-10">
                    <!--Prop drill chated object-->
                    <Chatters {chatted}/>
                </section>
            {/if}
        {/each}
    </section>
</main>

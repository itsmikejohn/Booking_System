<script>
	import { fly } from "svelte/transition";
    import { Splide, SplideSlide } from '@splidejs/svelte-splide';
    import '@splidejs/svelte-splide/css/sea-green';
    
    const personalInfo = [
        {   
            photoLink: "",
            name: "Angelo T. Alvero",
            school: "ICCT COLLEGES",
            year: "3rd Year / Cainta Campus",
            course: "Bachelor of Science in Information Technology",
            fbLink: "https://www.facebook.com/AlvrGelo"
        },

        {   
            photoLink: "",
            name: "Kenneth B. Gaddi",
            school: "ICCT COLLEGES",
            year: "3rd Year / Cainta Campus",
            course: "Bachelor of Science in Information Technology",
            fbLink: "https://www.facebook.com/kenneth.gaddi.1"
        },

        {   
            photoLink: "",
            name: "Anna Mae Fulache",
            school: "ICCT COLLEGES",
            year: "3rd Year / Cainta Campus",
            course: "Bachelor of Science in Information Technology",
            fbLink: "https://www.facebook.com/annamae.fulache"
        },

        {   
            photoLink: "",
            name: "Raymund Bueno Monton",
            school: "ICCT COLLEGES",
            year: "3rd Year / Cainta Campus",
            course: "Bachelor of Science in Information Technology",
            fbLink: "https://www.facebook.com/raymund.monton"
        },

        {   
            photoLink: "",
            name: "July Anne Rocela",
            school: "ICCT COLLEGES",
            year: "3rd Year / Cainta Campus",
            course: "Bachelor of Science in Information Technology",
            fbLink: "https://www.facebook.com/hulyoanna"
        },

        {   
            photoLink: "",
            name: "Ynnah Arensol",
            school: "ICCT COLLEGES",
            year: "3rd Year / Cainta Campus",
            course: "Bachelor of Science in Information Technology",
            fbLink: "https://www.facebook.com/ynnah.arensol"
        },

        {   
            photoLink: "",
            name: "Raul John Guanzon Camilon",
            school: "ICCT COLLEGES",
            year: "3rd Year / Cainta Campus",
            course: "Bachelor of Science in Information Technology",
            fbLink: "https://www.facebook.com/LuccidDRMr"
        },
    ]

</script>

<main class="">
    <div class=" p-2  bg-taupe mt-[10vh] rounded-lg z-10 border-2" in:fly={{y:-300, duration: 800}}>

        <div class="border-b-2 border-t-2 border-bluely py-1">
            <p class="bg-bluely px-2 text-white font-semibold text-center">Contact Us</p>
        </div>


        <Splide options={ { rewind: true, autoplay: true, } } aria-label="Svelte Splide Example" class="">
            
                
                    {#each personalInfo as personData} 
                    <SplideSlide>
                        <div class=" flex flex-col justify-center items-center p-2 bg-white rounded-lg">
                            <div class="">
                                <img src="https://em-content.zobj.net/thumbs/120/google/350/person_1f9d1.png" alt="loading 1" class="rounded-full bg-bluely p-2"/>
                            </div>

                            <div class="text-center text-xs flex flex-col gap-2">
                                <p class="sm:text-2xl font-serif font-bold">{personData.name}</p>
                                <p class="sm:text-xl font-serif text-taupe ">{personData.school}</p>
                                <p class="sm:text-xl font-serif text-taupe ">{personData.year}</p>
                                <p class="sm:text-xl font-serif text-taupe ">{personData.course}</p>
                               
                        
                                <a href={personData.fbLink} target="_blank" class="text-blue-500 underline italic font-serif font-bold sm:text-xl ">{personData.name}</a>
                            
                            </div>
                        </div>
                        
                    </SplideSlide>
                    {/each}
        </Splide>
    

            
        
    </div>
</main>
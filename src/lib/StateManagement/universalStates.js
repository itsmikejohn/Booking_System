import { writable } from "svelte/store";

export const staticStates = writable({
    
    activeItem: "",
    staticNav: ["Login", "About", "Contact Us"],
    userNav: ["Home", "Status", "Chat Admin"],
    adminNav: ["Admin Panel", "Chats"],
    defaultNav: ["SvelteKit", "Firebase", "Built from Scratch"],

    hasUser: false,
    hasAdmin: false,

    showRegister: false,
    showResetPass: false,
    showLoading: false,

    name: "",
    gender: "",
    email: "",
    password: "",
    confirmPassword: "",
    

})

export const userStates = writable({
    activeItem: "",
    successSubmit: false,
    purposeStore: [],
    fullname: "",
    studentNumber: "",
    selectedDate: "",
    course: "",
    campus: "",

    statusArray: [],

})

export const adminStates = writable({
    bookingArray: [],

    //Chats
    allChatComparison: 0.1
})

//www.youtube.com/@mikeSharesCode
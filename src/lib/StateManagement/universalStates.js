import { writable } from "svelte/store";

export const staticStates = writable({
    
    activeItem: "",
    staticNav: ["Login", "About", "Contact Us"],
    userNav: ["Home", "Status"],
    adminNav: ["Experimental"],
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

})
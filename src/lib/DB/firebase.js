// @ts-nocheck
import { writable } from "svelte/store";

import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDnG2DxWbz4_8tT6Q7ZZVBwUMW75oFlGFM",
  authDomain: "booking-system-db-1b5ac.firebaseapp.com",
  projectId: "booking-system-db-1b5ac",
  storageBucket: "booking-system-db-1b5ac.appspot.com",
  messagingSenderId: "532304056523",
  appId: "1:532304056523:web:2c471a1a6c8a5bcc3d4b4e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = writable(getAuth(app));
export const db = writable(getFirestore(app));



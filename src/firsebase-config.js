import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBluskzjVKm1DGIAMXRgG8eErcohqDR6-c",
    authDomain: "simple-crud-app-2af19.firebaseapp.com",
    projectId: "simple-crud-app-2af19",
    storageBucket: "simple-crud-app-2af19.appspot.com",
    messagingSenderId: "900393651262",
    appId: "1:900393651262:web:e06e16f4c077f4c109556f",
    measurementId: "G-YG3SYW0C3M"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore();
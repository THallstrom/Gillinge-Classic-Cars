// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBVraU2aa-EH0LTMTznSShFLaUHZYaqT6k",
    authDomain: "gillinge-classic-cars.firebaseapp.com",
    projectId: "gillinge-classic-cars",
    storageBucket: "gillinge-classic-cars.appspot.com",
    messagingSenderId: "822370768389",
    appId: "1:822370768389:web:acf9d578df0e8034f8ee6c",
    measurementId: "G-J0068FP5YW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

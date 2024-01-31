// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-19a7f.firebaseapp.com",
  projectId: "mern-estate-19a7f",
  storageBucket: "mern-estate-19a7f.appspot.com",
  messagingSenderId: "932192904916",
  appId: "1:932192904916:web:ca7ffdf77a82ea2221fd41",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

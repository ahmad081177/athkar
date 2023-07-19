// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkv8I1VvfxbIZME06CQg-hjwSubLvkMs4",
  authDomain: "highschool-368518.firebaseapp.com",
  projectId: "highschool-368518",
  storageBucket: "highschool-368518.appspot.com",
  messagingSenderId: "662507126810",
  appId: "1:662507126810:web:e83191f1f0e5c62499d1a3",
  measurementId: "G-0P3CMWPP56"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//export const db = getFirestore(app);

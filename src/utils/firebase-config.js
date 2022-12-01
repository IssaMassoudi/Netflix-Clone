// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from  "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJ1Wkl0u8M0Cygt91x1rjD2BBTXIv5m6w",
  authDomain: "netflix-d9233.firebaseapp.com",
  projectId: "netflix-d9233",
  storageBucket: "netflix-d9233.appspot.com",
  messagingSenderId: "1037976121701",
  appId: "1:1037976121701:web:125a2016c616c38500f18c",
  measurementId: "G-GK69R6R409"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
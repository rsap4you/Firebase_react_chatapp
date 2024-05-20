import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAJH0OKEUA2ZArfTwb7fqgVEmKUOLC4GUc",
    authDomain: "rsap4youchat-e96b9.firebaseapp.com",
    projectId: "rsap4youchat-e96b9",
    storageBucket: "rsap4youchat-e96b9.appspot.com",
    messagingSenderId: "157805722040",
    appId: "1:157805722040:web:bedad232dee5ae76ac774d",
    measurementId: "G-6MG2C0VVWG"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)

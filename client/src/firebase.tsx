// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWVcgKSxE39ftE96aeQDKoVNHCgOEihbs",
  authDomain: "twitter-clone-27062.firebaseapp.com",
  projectId: "twitter-clone-27062",
  storageBucket: "twitter-clone-27062.appspot.com",
  messagingSenderId: "19043023074",
  appId: "1:19043023074:web:a7d55346e6e9aeda2286bb",
  measurementId: "G-ZD86G7D5HB",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

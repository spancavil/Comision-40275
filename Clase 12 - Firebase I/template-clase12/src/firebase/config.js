// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_yZeKuptt_v6cUjjeVIf7ibAsfpD-Hl8",
  authDomain: "reactjs-40275.firebaseapp.com",
  projectId: "reactjs-40275",
  storageBucket: "reactjs-40275.appspot.com",
  messagingSenderId: "115704756425",
  appId: "1:115704756425:web:6df2b3dfefad07f3c53518"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
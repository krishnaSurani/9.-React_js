// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiq3oHRxSRPQyobxYUplnIas6OnCElvCA",
  authDomain: "fir-project-3ec69.firebaseapp.com",
  projectId: "fir-project-3ec69",
  storageBucket: "fir-project-3ec69.firebasestorage.app",
  messagingSenderId: "758004421201",
  appId: "1:758004421201:web:17c1097ee8252bf6789e70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const firestore = getFirestore(app)

export {auth,firestore}
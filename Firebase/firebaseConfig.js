// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"; 
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuduLCO4zr6bcg1SCkUuBguG5xmKY_nPE",
  authDomain: "fir-b7ee5.firebaseapp.com",
  projectId: "fir-b7ee5",
  storageBucket: "fir-b7ee5.firebasestorage.app",
  messagingSenderId: "922040776815",
  appId: "1:922040776815:web:250c0f0a4659b017fe359a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const firestore = getFirestore(app)

export {auth,firestore}
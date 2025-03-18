import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, firestore } from "../../firebaseConfig";
import { Link, useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";

export default function SignUp() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    await createUserWithEmailAndPassword(auth, email, password).then((res) => {
      console.log(res);
      setDoc(doc(firestore, "users", res.user.uid), { name, email });
      alert("User Created");
      navigate("/Dashbord", { replace: true });
    });
  };

  const handleGoogleSignin = async()=>{
    
  }


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 p-6">
      <div className="bg-gray-800 p-10 rounded-xl shadow-lg w-full max-w-md text-center text-white">
        <h1 className="text-3xl font-bold mb-6">Join Us</h1>
        <p className="text-gray-400 mb-4">Sign up to get started</p>

        <input type="text" placeholder="Enter Your Name" onChange={(e) => setName(e.target.value)} className="w-full border border-gray-600 bg-gray-700 p-3 rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"/>
        <input type="email" placeholder="Enter Your Email" onChange={(e) => setEmail(e.target.value)}className="w-full border border-gray-600 bg-gray-700 p-3 rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"/>

        <input type="password" placeholder="Enter Your Password" onChange={(e) => setPassword(e.target.value)}className="w-full border border-gray-600 bg-gray-700 p-3 rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"/>

        <button onClick={handleSignUp} className="w-full bg-yellow-500 text-gray-900 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition">Sign Up</button>
        <button onClick={handleGoogleSignin} className="w-full bg-yellow-500 text-gray-900 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition">Sign in with Google</button>

        <p className="text-center mt-4 text-gray-400">
          Already have an account? <Link to="/SignIn" className="text-yellow-400 hover:underline">Sign In</Link>
        </p>
      </div>
    </div>
  );
}
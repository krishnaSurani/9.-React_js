import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebaseConfig";
import { Link, useNavigate } from "react-router-dom";

export default function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async () => {
    await signInWithEmailAndPassword(auth, email, password).then((res) => {
      console.log(res);
      navigate("/Dashbord", { replace: true });
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-6">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-sm text-white">
        <h1 className="text-2xl font-bold text-center mb-6">Sign In</h1>

        <input
          type="email"
          placeholder="Enter Your Email"
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-gray-600 bg-gray-700 p-3 rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
        <input
          type="password"
          placeholder="Enter Your Password"
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border border-gray-600 bg-gray-700 p-3 rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />

        <button
          onClick={handleSignIn}
          className="w-full bg-yellow-500 text-gray-900 py-2 rounded-lg font-semibold hover:bg-yellow-600 transition"
        >
          Sign In
        </button>

        <p className="text-center mt-4 text-gray-400">
          Don't have an account? <Link to="/" className="text-yellow-400 hover:underline">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

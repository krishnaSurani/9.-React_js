import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { setDoc, doc } from 'firebase/firestore';
import { auth, firestore } from '../../firebaseConfig';

export default function SignUp() {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignUp = async () => {
        try {
            const res = await createUserWithEmailAndPassword(auth, email, password);
            await setDoc(doc(firestore, "users", res.user.uid), { name, email });
            alert("User Created Successfully");
            navigate('/Daseboard', { replace: true });
        } catch (error) {
            console.error("Error signing up:", error);
            alert(error.message);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                <h1 className="text-2xl font-bold text-center mb-4">Sign Up</h1>
                <input type="text"  placeholder="Enter Your Name" onChange={(e) => setName(e.target.value)} className="w-full border border-gray-300 p-2 rounded-md mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                <input type="email" placeholder="Enter Your Email" onChange={(e) => setEmail(e.target.value)} className="w-full border border-gray-300 p-2 rounded-md mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <input type="password" placeholder="Enter Your Password" onChange={(e) => setPassword(e.target.value)}  className="w-full border border-gray-300 p-2 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                <button  onClick={handleSignUp} className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-all">
                  Sign Up</button>
                <p className="text-center mt-4 text-gray-600">Existing User? 
                  <Link to="/login" className="text-blue-500 hover:underline">Log in</Link>
                </p>
            </div>
        </div>
    );
}



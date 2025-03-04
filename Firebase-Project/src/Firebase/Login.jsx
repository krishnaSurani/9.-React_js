// import { signInWithEmailAndPassword } from 'firebase/auth'
// import React, { useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// // import {auth} from '../../firebaseConfig'
// import {auth} from '../../firebaseConfig'

// export default function Login() {


//     const navigate = useNavigate()
//     const [Email,setEmail] =useState("")
//     const [password,setpassword] = useState("")

//     const handleLogIn = async ()=>{
//       await signInWithEmailAndPassword(auth,Email,password).then((res)=>{
//         console.log(res);

//         navigate('/Daseboard',{replace:true})
        
//       })
//     }

//   return (
//     <div>
//       <h1>LogIn</h1>

//       <input type="text" placeholder='Enter Your Email' onChange={(e) => setEmail(e.target.value)} className='border' />
//       <input type="text" placeholder='Enter Your Password' onChange={(e) => setpassword(e.target.value)} className='border' />

//       <button onClick={handleLogIn} className='border px-2 mx-2'>LogIn</button>
//       <Link to={"/"}>SignUp</Link>
//     </div>
//   )
// }



import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../firebaseConfig';

export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogIn = async () => {
        try {
            const res = await signInWithEmailAndPassword(auth, email, password);
            console.log(res);
            navigate('/Daseboard', { replace: true });
        } catch (error) {
            console.error("Login error:", error);
            alert(error.message);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                <h1 className="text-2xl font-bold text-center mb-4">Log In</h1>
                <input 
                    type="email" 
                    placeholder="Enter Your Email" 
                    onChange={(e) => setEmail(e.target.value)} 
                    className="w-full border border-gray-300 p-2 rounded-md mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                />
                <input 
                    type="password" 
                    placeholder="Enter Your Password" 
                    onChange={(e) => setPassword(e.target.value)} 
                    className="w-full border border-gray-300 p-2 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                />
                <button 
                    onClick={handleLogIn} 
                    className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-all">
                    Log In
                </button>
                <p className="text-center mt-4 text-gray-600">
                    New User? <Link to="/signup" className="text-blue-500 hover:underline">Sign Up</Link>
                </p>
            </div>
        </div>
    );
}

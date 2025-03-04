// import { onAuthStateChanged } from 'firebase/auth'
// import React, { useEffect, useState } from 'react'
// import { auth, firestore } from '../../firebaseConfig'
// import { doc, getDoc } from 'firebase/firestore'

// export default function Daseboard() {

//     const [Uid,setUid] = useState(null)
//     const [data,setdata] = useState("")

//     useEffect(()=>{
//       onAuthStateChanged(auth,(user)=>{
//         if(user){
//           setUid(user.uid)
//         }
//       })
//     })


//     useEffect(()=>{
//       if(Uid){
//         fetchUser()
//       }
//     },[Uid])

//     const fetchUser = async()=>{
//       await getDoc(doc(firestore,'users',Uid)).then((res)=>{
//         setdata(res.data())
//       })
//     }

//   return (
//     <div className='text-center'>
//       <h1 className='text-4xl font-bold pt-4'>Dashbord</h1>
//       <p>Hello {data.name} 👋</p>
//     </div>
//   )
// }




import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { auth, firestore } from '../../firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';

export default function Dashboard() {
    const [uid, setUid] = useState(null);
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUid(user.uid);
            } else {
                setLoading(false); // Stop loading if no user is found
            }
        });
        return () => unsubscribe();
    }, []);

    useEffect(() => {
        if (uid) {
            fetchUser();
        }
    }, [uid]);

    const fetchUser = async () => {
        try {
            const userDoc = await getDoc(doc(firestore, 'users', uid));
            if (userDoc.exists()) {
                setData(userDoc.data());
            }
        } catch (error) {
            console.error("Error fetching user data:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center w-full max-w-md">
                {loading ? (
                    <p className="text-gray-600 text-lg font-medium">Loading...</p>
                ) : data ? (
                    <>
                        <h1 className="text-3xl font-bold text-gray-700">Dashboard</h1>
                        <p className="text-lg text-gray-600 mt-4">Hello, <span className="font-semibold text-blue-500">{data.name}</span> 👋</p>
                    </>
                ) : (
                    <p className="text-red-500 text-lg">User not found.</p>
                )}
            </div>
        </div>
    );
}

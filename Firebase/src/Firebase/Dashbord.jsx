import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, firestore } from "../../firebaseConfig";
import { getDoc, doc, getDocs, collection, addDoc, updateDoc, deleteDoc } from "firebase/firestore";

export default function Dashboard() {
  const [Uid, setUid] = useState(null);
  const [data, setData] = useState("");
  const [AllRecord, setAllRecord] = useState([]);
  const [Task, setTask] = useState("");
  const [priority, setPriority] = useState("");
  const [EditIndex, setEditIndex] = useState("")

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUid(user.uid);
      }
    });
  }, []);

  useEffect(() => {
    if (Uid) {
      fetchUser();
      fetchData();
    }
  }, [Uid]);

  const fetchUser = async () => {
    const res = await getDoc(doc(firestore, "users", Uid));
    setData(res.data());
    console.log(res);
    
  };

  const fetchData = async () => {
    const data = await getDocs(collection(firestore, "Tasks"));
    let allData = data.docs.map((e) => ({ docId: e.id, ...e.data() }));
    setAllRecord(allData);
  };

  const addTask = async () => {
    if (EditIndex == null) {
      await addDoc(collection(firestore, "Tasks"), { userId: Uid, Task, priority }).then((data) => {
        setAllRecord([...AllRecord, { userId: Uid, Task, priority }])
      })
    }
    else {
        await updateDoc(doc(firestore,"Tasks",EditIndex),{Task,priority}).then(()=>{
          fetchData()
        })
    }

    setTask("");
    setPriority("");
    setEditIndex(null)
  };


  const handleDelete = async (docId) => {
    await deleteDoc(doc(firestore, 'Task', docId)).then(() => {
      let filterData = AllRecord.filter((item) => item.docId != docId);
      setAllRecord(filterData)
    })
  }


  const handleEdit = (docId, record) => {
    setTask(record.Task);
    setPriority(record.priority);
    setEditIndex(docId);
  };







  return (
    <div className="flex flex-col items-center min-h-screen bg-[#0f172a] p-6">
      <h1 className="text-4xl font-bold text-white mb-2">Dashboard</h1>
      <p className="text-lg text-gray-300 mb-6">Hello, {data.name} 👋</p>

      <div className="bg-[#1e293b] p-6 rounded-xl shadow-xl w-full max-w-md">
        <input
          type="text"
          placeholder="Enter Task"
          value={Task}
          onChange={(e) => setTask(e.target.value)}
          className="w-full border border-gray-600 bg-[#334155] text-white p-3 rounded-md mb-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="w-full border border-gray-600 bg-[#334155] text-white p-3 rounded-md mb-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        >
          <option hidden>Select priority</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <button
          onClick={addTask}
          className="w-full bg-yellow-500 text-black font-semibold py-2 rounded-md hover:bg-yellow-600 transition"
        >
          {EditIndex ? "Update Task" : "Add Task"}
        </button>
      </div>

      <div className="mt-6 w-full max-w-md">
        {AllRecord.length > 0 && (
          <ul className="bg-[#1e293b] p-4 rounded-xl shadow-lg text-white">
            {AllRecord.map((e, i) => (
              <li key={i} className="border-b border-gray-600 py-3 flex flex-col space-y-1">
                <p className="font-medium text-lg">{e.Task}</p>
                <p className="text-sm text-gray-400">Priority: {e.priority}</p>
                <div className="flex space-x-3 mt-2">
                  <button
                    onClick={() => handleEdit(e.docId, e)}
                    className="bg-yellow-500 text-black font-semibold px-4 py-1 rounded-md hover:bg-yellow-600 transition"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(e.docId)}
                    className="bg-red-600 text-white font-semibold px-4 py-1 rounded-md hover:bg-red-700 transition"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
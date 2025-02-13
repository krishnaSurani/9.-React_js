import React, { useEffect, useState } from 'react'
import Nav from '../component/Nav'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Swal from 'sweetalert2';


function Form() {


  const { id } = useParams()
  console.log(id)


  const [obj, setobj] = useState({
    id: Date.now(),
    url: "",
    Tital: "",
    des: ""
  })

  const [record, setRecord] = useState(JSON.parse(localStorage.getItem('student')) || [])

  let navigation = useNavigate()

  useEffect(() => {
    localStorage.setItem("student", JSON.stringify(record))
  }, [record])

  const handleChange = (e) => {
    const { name, value } = e.target
    setobj({ ...obj, [name]: value })
  }

  // console.log(obj);




  const handleSubmit = (e) => {

    e.preventDefault()
    let data2;

    if (id) {
      data2 = record.map((el) => {
        if (el.id == id) {
          return obj
        }
        else {
          return el
        }


      })
      setRecord(data2)
    }
    else {
      setRecord([...record, obj])

    }
    setobj({
      id: Date.now(),
      url: "",
      Tital: "",
      des: ""
    }) 

    Swal.fire({
      title: 'Success!',
      text: 'Your movie details have been Update successfully!',
      icon: 'success',
      // confirmButtonText: 'OK'
      
    });
    navigation("/")
    

    


  }

  console.log(record);

  useEffect(() => {
    if (id) {
      const data1 = record.find((el) => {
        if (el.id == id) {
          return el;
        }
      })
      // console.log(data1);
      setobj(data1)
    }
  }, [id, record])




  return (
    <div>
      <Nav />
      <Navbar />

      <div className='h-[600px] w-full  bg-[#EEEEEE] flex items-center'>
        <div className='h-[75%] w-[35%] bg-white m-auto text-center shadow-xl'>
          <h3 className=' pt-6  text-[#F84464] font-medium underline'>Movie Details</h3>
          <form action="" onSubmit={handleSubmit}>
            <input type="text" className='h-[40px] w-[80%] border mt-5 ps-3 rounded' name="url" placeholder='Enter Img URL' onChange={handleChange} value={obj.url} />
            <input type="text" className='h-[40px] w-[80%] border mt-4 ps-3 rounded' name='Tital' placeholder='Enter Movie Tital' onChange={handleChange} value={obj.Tital} />
            <input type="text" className='h-[40px] w-[80%] border mt-4 ps-3 rounded' name='des' placeholder='Enter Movie Description' onChange={handleChange} value={obj.des} />

            <input type='submit' className='h-[40px] w-[80%] border mt-4 bg-[#F84464] text-white rounded cursor-pointer' ></input>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Form
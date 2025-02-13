import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function MovieCard() {



const [state,setState]=useState([]) 
    

    useEffect(()=>{
        let data = JSON.parse(localStorage.getItem("student"))||[]
        setState(data)
    },[])

    console.log(state);

    const handleDelete=(id)=>{
        // console.log(id);
       let a= state.filter((el)=>{
            return el.id != id;
        })
        
        setState(a)
    }
  
  return (
    <div className='h-auto w-full  grid grid-cols-5 gap-4 px-5 my-5'>
      {
       state &&
       state.map((el)=>{
        return <>
          <div className='h-[500px]'>
            <div className='h-[75%] w-full rounded'>
              <img src={el.url} alt="image" className='h-full w-full rounded'/>
            </div>
            <div className='h-[25%] w-full'>
              <span className='font-semibold capitalize pt-2 text-[18px]'>{el.Tital}</span>
              <p className='text-[16px] capitalize'>{el.des}</p>
            <Link  to={`/Form/${el.id} `}><button className=' h-[40px] w-[30%] rounded bg-success text-white'>Edit</button></Link> 
            <button className=' h-[40px] w-[30%] rounded ms-2 bg-[#F84464] text-white' onClick={() => handleDelete(el   .id)}>Delete</button>
            </div>
            
          </div>
        </>
    })
      }
    </div>
  )
}

export default MovieCard
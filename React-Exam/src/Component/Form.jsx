import React, { useEffect, useState } from 'react'
import NavbarCode from "./Navbarcode"
import { useDispatch, useSelector } from 'react-redux'
// import {  fetchApi, postApi, updateApi } from '../feature/apiSlice'
import { fetchApi,postApi,updateApi } from '../Features/apiSlice'
import { useNavigate, useParams } from 'react-router'

function Form() {

    const [img,setImg]=useState("")
    const [title,setTitle]=useState("")
    const [des,setDes]=useState("")
    const [catagory,setCatagory]=useState("") 
    const [editIndex,setEditIndex]=useState(null)
    const navigation=useNavigate();
    const dispatch=useDispatch();

    //Edit data 
    const {id}=useParams()
        
    const record=useSelector((state)=>{
        return state.apiReducer.data
    })

    const singleData=record.find((el)=>{
        return el.id == id;
    })


    useEffect(()=>{
        if(record.length == 0)
        {
            dispatch(fetchApi())
        }
    },[record.length,dispatch])

    useEffect(()=>{
       if(singleData)
       {
        setImg(singleData.img);
        setTitle(singleData.title);
        setDes(singleData.des);
        setCatagory(singleData.catagory);
        setEditIndex(id)
       }    

    },[singleData])
    
   



// add data or update 
    const handleAddData=()=>{
        if (img==""||des==""||title==""|| catagory=="") {
            alert("Please fill all the fields");
            return;
        }
       
        if(editIndex==null)
        {
            const obj={
                img:img,
                title:title,
                des:des,
                catagory:catagory
            }
    
            dispatch(postApi(obj))
            alert("Data Added Successfully..");
        }else{
            dispatch(updateApi({id:editIndex,img,title,des,catagory}));
            // alert("Data updated Successfully..");
            navigation("/")
    
        }

        setImg("");
        setTitle("");
        setDes("");
        setCatagory("");
        setEditIndex(null)
    }

    return (
        <>
         <NavbarCode></NavbarCode> 
        <div>  
        <div className='h-[300px] w-[25%] shadow-lg flex flex-col justify-center items-center m-[auto] mt-[50px]'>
        <input type="text"  className='h-[35px] w-[80%] border-b  ps-[5px]'  placeholder='Student Name' name="" id="" onChange={(e)=>setImg(e.target.value)} value={img} />  
        <input type="text"   className='h-[35px] w-[80%] border-b mt-[10px] ps-[5px]' placeholder='Father Name' name="" id=""  onChange={(e)=>setTitle(e.target.value)} value={title}/>
        <input type="text"   className='h-[35px] w-[80%] border-b mt-[10px] ps-[5px]' placeholder='Mother Name' name="" id="" onChange={(e)=>setDes(e.target.value)} value={des} />
        <input type="text"   className='h-[35px] w-[80%] border-b mt-[10px] ps-[5px]' placeholder='Student ID' name="" id="" onChange={(e)=>setCatagory(e.target.value)} value={catagory} />
        <button className='h-[38px] w-[80%] border cursor-pointer mt-[20px] hover:bg-[black] hover:text-[white]' onClick={handleAddData}>{editIndex==null?"Add Student Data":"Update Student Data"}</button>
        </div>
      </div>
  
        </>
  )
}

export default Form
import React from 'react'
import { Link } from 'react-router'
import Home from '../Pages/Home'

export default function NavbarCode() {
  return (
    <div className='h-[80px] w-[100%] shadow-md flex justify-between'>
        <div className="logo h-[100%] w-[10%]  flex justify-center items-center text-[30px] font-semibold "><Link to={"/"}>Logo</Link></div>
        <div className="nav h-[100%] w-[40%]  flex justify-center items-center ">
                <ul className='flex w-[100%] justify-evenly items-center'>
                   <Link to={"/form"}> <li className='cursor-pointer'>Form</li></Link>
                    <li className='cursor-pointer'>Contact Us</li>
                    <li className='cursor-pointer'>Login</li>
                    <li className='cursor-pointer'>About Us</li>
                </ul>
        </div>
    </div>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'


function Nav() {
  return (
    <div className='h-[60px] w-full'>
        <div className='h-[80%] w-[80%] m-auto mt-2 flex'>
            <div className="h-full w-[18%]"><Link to={"/"}><img src="https://getlogo.net/wp-content/uploads/2020/04/bookmyshow-logo-vector.png" alt=""  className='h-full w-[70%] m-auto'/></Link></div>
            <div className="h-full w-[38%]"><input type="text" placeholder='🔍 Search for Movies, Events, plays, Spots and Activities'  className='border border-[#EEEEEE] w-full ps-2 h-[85%] mt-1 shadow-sm'/></div>
            <div className="h-full w-[25%] ms-75">
                <select name="" id="" className='border-[#F7F7F7] h-[85%]'>
                    <option value="">Mumbai</option>
                    <option value="">Delhi-NCR</option>
                    <option value="">Bengaluru</option>
                    <option value="">Hyderabad</option>
                    <option value="">Ahemdabad</option>
                    <option value="">Chandigarh</option>
                    <option value="">Chennai</option>
                    <option value="">Pune</option>
                    </select>


                    <Link to={"/Form"}>
                    <button className='border px-4 h-[70%] mt-2 ms-3 rounded bg-[#F84464] text-white'>Movie</button></Link>
                    <i className="fa-solid fa-bars text-[gray] ps-4"></i>
            </div>
        </div>
    </div>
  )
}

export default Nav




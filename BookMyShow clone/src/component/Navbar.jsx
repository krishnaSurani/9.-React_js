import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <div className='h-[40px] w-full  bg-[#F5F5F5]'>
        <div className='h-full w-[80%]  m-auto flex justify-between'>
            <div className='h-full w-[40%] '>
                <ul className='flex justify-evenly items-center h-full text-sm'>
                   <li><Link to={`/Movie`} className='text-black text-decoration-none'><a >Movies</a></Link> </li>
                    <li><a >Stream</a></li>
                    <li><a >Events</a></li>
                    <li><a >Plays</a></li>
                    <li><a >Sports</a></li>
                    <li><a >Activities</a></li>
                </ul>
            </div>
            <div className='h-full w-[30%] '>
            <ul className='flex justify-evenly items-center h-full font-[Roboto] text-xs'>
                    <li><a >ListYourShow</a></li>
                    <li><a >Corporates</a></li>
                    <li><a >Offers</a></li>
                    <li><a >Gift Card</a></li>

                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar
import React from 'react'
import ProductList from './ProductList'

function Form({handleChange,handleSubmit}) {




    return (
        <div className='flex justify-evenly items-center h-[725px] w-full'>
            <form action="" onSubmit={handleSubmit} className='h-[350px] w-[35%] border m-auto flex justify-evenly items-center flex-col'>
                <input type="text" placeholder='Enter Image URL' name='img' onChange={handleChange} className='border h-[40px] w-[70%] ps-3'/>
                <input type="text" placeholder='Enter product Tital' name='Title' onChange={handleChange} className='border h-[40px] w-[70%] ps-3'/>
                <input type="text" placeholder='Enter Details About Product' name='Detail' onChange={handleChange} className='border h-[40px] w-[70%] ps-3'/>
                <input type="submit" className='border h-[35px] w-[20%]'/>
            </form>
        </div>
    )
}

export default Form
import React, { useState } from 'react'

function Form() {

    const [state, setstate] = useState(true)
    const [img, setImg] = useState("")
    const [tital, setTital] = useState("")
    const [price, setPrice] = useState("")
    const [dec, setDec] = useState("")
    const [arr, setarr] = useState([])

    const imgRegex = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/
    const priceRegex = /^[1-9]\d{0,7}(?:\.\d{1,4})?$/

    const showproduct = () => {


        let obj = {
            img,
            tital,
            price,
            dec
        }

        setarr([...arr, obj])

        console.log();
        setImg("");
        setTital("");
        setPrice("");
        setDec("");

        alert("Product add succsefully")

    }

    return (
        <>
            <div className='h-[50px] text-center pt-2 mt-4 mb-4'>
            <button onClick={() => { setstate(true) }} className='btn border me-3 bg-[black] text-[white]'>Form</button>
            <button onClick={() => { setstate(false) }} className='btn border'>Product</button>
            </div>
            {state == true ? <div className='main shadow-lg bg-[#FEF9F2] border-double border-[6px] h-[350px] w-[35%] m-auto flex justify-evenly items-center flex-col'>
                <p className='underline p-3 font-medium text-lg'>Enter Product Details</p>
                <input type="text" id="" placeholder='Img URL' onChange={(el) => { setImg(el.target.value) }} className='border ms-3 ps-3' />
                <input type="text" id="" placeholder='Tital' onChange={(el) => { setTital(el.target.value) }} className='border ms-3 ps-3' />
                <input type="text" id="" placeholder='Price' onChange={(el) => { setPrice(el.target.value) }} className='border ms-3 ps-3' />
                <input type="text" id="" placeholder='Description' onChange={(el) => { setDec(el.target.value) }} className='border ms-3 ps-3' />
                <input type="submit" onClick={showproduct} className='border p-1 ms-3 h-[40px] w-[70px] bg-[#FFECC8]' />
            </div> :
                <div className='flex w-full'>
                    {
                        arr.map((el) => {
                            return <>
                            
                                <div className='h-[350px] w-[20%] border-double border-4 flex justify-evenly items-center flex-col ms-4'>
                                    <img src={el.img} alt="image" />
                                    <div className='w-full ps-3'>
                                        <h1 className='text-xl font-semibold'>{el.tital}</h1>
                                        <p>Price : ₹{el.price}</p>
                                        <p>{el.dec}</p>
                                    </div>
                                </div>
                            
                            </>
                        })
                    }
                </div>
            }
        </>
    )
}

export default Form
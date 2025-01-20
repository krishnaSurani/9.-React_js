import React, { useState } from 'react'

function Form() {


    const [state, setstate] = useState({
        img: "",
        tital: "",
        price: "",
        dec: "",
    })

    let [imgErr, setimgErr] = useState(false)
    let [priceErr, setpriceErr] = useState(false)

    const imgRegex = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/
    const priceRegex = /^[1-9]\d{0,7}(?:\.\d{1,4})?$/

    const handle = (e) => {
        let { name, value } = e.target

        setstate({ ...state, [name]: value })
    }
    let [arr, setarr] = useState([])

    const submitClick = (e) => {
        e.preventDefault()
        setarr([...arr, state])
        console.log(arr)

        setstate({
            img: "",
            tital: "",
            price: "",
            dec: "",
        })

        if (imgErr == false && priceErr == false) {
            alert("form submit successfully")
        }
        else {
            alert(" please enter valid data")
        }
    }

    const blurClick = (e) => {
        let { name } = e.target
        const value = state[name];
        if (name == "img" && !imgRegex.test(value)) {
            setimgErr(true)
        }
        if (name == "price" && !priceRegex.test(value)) {
            setpriceErr(true)
        }
    }

    const focusClick=(e)=>{
        let {name} = e.target
        if(name=="img"){
            setimgErr(false)
        }
        if(name=="price"){
            setpriceErr(false)
        }
       
    }

    // const showproduct = () => {


    //     let obj = {
    //         img,
    //         tital,
    //         price,
    //         dec
    //     }

    //     setarr([...arr, obj])

    //     console.log();
    //     setImg("");
    //     setTital("");
    //     setPrice("");
    //     setDec("");

    //     alert("Product add succsefully")

    // }

    return (
        <>
            <div className='h-[50px] text-center pt-2 mt-4 mb-4'>
                <button onClick={() => { setstate(true) }} className='btn border me-3 bg-[black] text-[white]'>Form</button>
                <button onClick={() => { setstate(false) }} className='btn border'>Product</button>
            </div>
            <form action="" onSubmit={submitClick}>
                <div className='main shadow-lg bg-[#FEF9F2] border-double border-[6px] h-[350px] w-[35%] m-auto flex justify-evenly items-center flex-col'>
                    <p className='underline p-3 font-medium text-lg'>Enter Product Details</p>
                    <input type="text" value={state.img} name='img' placeholder='Img URL' onChange={handle} onBlur={blurClick} onFocus={focusClick} className='border ms-3 ps-3' />
                    <br />{imgErr == true ? <p>Invalid Image URL. Please enter a valid URL</p> : ""}

                    <input type="text" value={state.tital} name='tital' placeholder='Tital' onChange={handle} onBlur={blurClick} onFocus={focusClick} className='border ms-3 ps-3' />
                    <input type="text" value={state.price} name='price' placeholder='Price' onChange={handle} onBlur={blurClick} onFocus={focusClick} className='border ms-3 ps-3' />
                    <br />{priceErr == true ? <p>please Enter correct pice</p> : ""}

                    <input type="text" value={state.dec} name='dec' placeholder='Description' onChange={handle} onBlur={blurClick} onFocus={focusClick} className='border ms-3 ps-3' />
                    <input type="submit" onClick={showproduct} className='border p-1 ms-3 h-[40px] w-[70px] bg-[#FFECC8]' />
                </div>
            </form>
            {/* <div className='flex w-full'>
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
            </div> */}

        </>
    )
}

export default Form
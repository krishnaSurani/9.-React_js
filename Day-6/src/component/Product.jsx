import React, { useState } from 'react'
// import React from "react";
import ProductList from './ProductList'
import Form from './form'

function product() {

    const [swi, setSwi] = useState(true)
    const [state, setState] = useState({
        img: "",
        Title: "",
        Detail: ""
    })
    const [arr, setArr] = useState([])
    console.log(arr)

    const handleChange = (e) => {

        const { name, value } = e.target
        setState({ ...state, [name]: value })

    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setArr([...arr, state])
    }



    return (
        <div>
            <button onClick={() => setSwi(false)} className='border h-[40px] w-[80px] bg-[black] text-[white]'>Product</button>
            <button onClick={() => setSwi(true)} className='border h-[40px] w-[80px] bg-[black] text-[white] ms-4'>Form</button>
            {swi ? <Form handleChange={handleChange} handleSubmit={handleSubmit} /> : <ProductList arr={arr} />}
        </div>
    )
}

export default product
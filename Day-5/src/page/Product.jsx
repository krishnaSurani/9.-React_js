import React, { useEffect, useState } from 'react'

function Product() {

    const [arr, setarr] = useState([])


    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then((res) => res.json())
            .then((res) => setarr(res.products))
            .catch((err) => console.log(err)
            )
    }, [])



    console.log(arr);



    return (
        <>

            <div className='flex justify-evenly items-center flex-wrap'>
                {
                    arr.map((el) => {
                        return <>

                            <div className='h-[350px] w-[18%] flex justify-center items-center flex-col mt-4 rounded-md shadow-lg'>
                                <img src={el.thumbnail} alt="image" className='h-[50%]' />
                                <div className=' ps-3'>
                                    <p>{el.title}</p>
                                    <p className='font-semibold'>$ {el.price}</p>
                                    <span className='text-[10px] leading-loose'>{el.description}</span>
                                </div>

                            </div>

                        </>
                    })
                }
            </div>
        </>

    )
}

export default Product
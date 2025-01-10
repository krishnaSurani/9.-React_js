import React from "react";


function ProductList(props)
{
    return (<>
          <div className='flex w-full'>
                    {
                        props.arr.map((el) => {
                            return <>
                            
                                <div className='h-[450px] w-[20%] border-double border-4 flex justify-evenly items-center flex-col ms-4'>
                                    <img src={el.img} alt="image" className="border h-[60%]"/>
                                    <div className='w-full ps-3'>
                                        <h1 className='text-xl font-semibold'>{el.Title}</h1>
                                        <p className="text-sm">{el.Detail}</p>
                                    </div>
                                </div>
                            
                            </>
                        })
                    }
                </div>
    </>)
}

export default ProductList
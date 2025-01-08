import React, { useEffect, useState } from 'react'

function DogAPI() {


    const [arr, setarr] = useState([])

    const handle = () => {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then((res) => res.json())
            .then((res) => setarr(res))
            .catch((err) => console.log(err)
            )
    }

    console.log(arr);

    useEffect(() => {
        handle()
    }, [])


    return (<>
        {<>

            <div className='main h-[728px] w-full flex'>
            <div className='h-[400px] w-[35%] m-auto text-center flex justify-evenly items-center flex-col'>

                <h2 className='font-bold underline text-xl'>Dog API</h2>

                <img src={arr.message} alt="" className='h-[75%] w-[65%] rounded-lg' />
                <button onClick={handle} className='bg-[black] text-[white] h-[40px] w-[70px]'>click</button>
            </div>
            </div>
        </>
        }
    </>
    )
}

export default DogAPI
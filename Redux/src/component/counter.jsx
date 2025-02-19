import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../features/slice';

export default function Counter() {

    const dispatch = useDispatch()
    const count = useSelector((state) => {
        return state.counterReducer.count;
    });

    return (
        <>
            <div>{count}</div>
            <button onClick={()=>dispatch(increment())}>+</button>
            <button onClick={()=>dispatch(decrement())}>-</button>
        </>
    )
}


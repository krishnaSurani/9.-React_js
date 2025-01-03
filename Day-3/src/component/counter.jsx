import React from "react";
import Counter2 from "./counter2";
import Counter3 from "./counter3";
function Counter()
{
    let [state, setState] = React.useState(10)
    function CounterDec()
    {
        if(state > 0)
        { 
            setState(state - 1)
        }
    }
    function CounterInc()
    {
        setState(state + 1)
    }

    return (
    <div className="h-[300px] w-[30%] border-dashed border-2  m-auto flex justify-evenly items-center flex-col bg-[#F2F9FF]">
        <h1 className="text-2xl underline font-semibold bg-[#F2F9FF]">Counter</h1>
        <div className="coun">
        <h1 className="pe-5 pb-2">{state}</h1>&nbsp;
        <Counter2 b={state}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Counter3 c={state}/>
        </div>
        <div>
        <button onClick={CounterDec} className="border h-[30px] w-[40px] text-xl bg-[#D9EAFD]">-</button>
        <button onClick={CounterInc} className="border h-[30px] w-[40px] ms-4 text-xl bg-[#D9EAFD]">+</button>
        </div>        

    </div>)
}

export default Counter
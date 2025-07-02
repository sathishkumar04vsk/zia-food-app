import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount } from "../App";


export default function CounterComponent(){
    const count  = useSelector(state=>state.counter.value);
    const dispatch = useDispatch();
    // const [count, setCount] = useState(0);
    const [number, setNumber] = useState(2);

    const foodlist = useSelector(state=>state.foodlist.value);
    console.log(foodlist);
    return <div className="text-center">
        <h4 className="text-4xl font-bold">Count: {count}</h4>
        <button className="rounded-md bg-lime-800 mt-4 px-4 py-1 text-white" onClick={()=>dispatch(increment())}>Incriment</button>
        <button className="rounded-md ml-4 bg-red-800 mt-4 px-4 py-1 text-white" onClick={()=>dispatch(decrement())}>Decrement</button>
        <br />
        <input className="border mr-2 border-green-600 px-4 py-2" type="number" value={number} onChange={e=>setNumber(e.target.value)} />
        <button className="rounded-md bg-blue-800 mt-4 px-4 py-1 text-white" onClick={()=>dispatch(incrementByAmount(Number(number)))} >Increment Given Number</button>
    </div>
}
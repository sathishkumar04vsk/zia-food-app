import { useContext, useEffect, useState } from "react";
import FoodCard from "./FoodCard";
import { APPContext } from "../App";
import { AddFood } from "./AddFood";

export default function FoodList(){
    const [count, setCount] = useState(1);
    const {FoodDatas} = useContext(APPContext);
    // useEffect 

    // useEffect(start,dependency)
    // useEffect (()=>{}, [count])
    // console.log(count)
    // console.log("hello world");

    

    useEffect(()=>{
        console.log(count);
        console.log("Hello World")
        setCount(count+1)
    },[]);//one time callback or initil dom rendering
    


    

    return <div className="container mt-24 mb-12 mx-auto">
            <div className="grid grid-cols-4 gap-4">
                {FoodDatas.map((item, index)=><FoodCard item={item}/>)}
                {/* <button onClick={()=> setCount(count+1)}>count</button>
                {count} */}
            </div>
            <div className="mt-4">
                <h1 className="text-xl mb-4">Add Your Restorant Food</h1>
                <AddFood />
            </div>
    </div>
};




// 1.alt => making more then one cursor
// 2.crtl + d => find same string
// 3. crtl + f => search
// 4. crtl + shit + p => emmit wrap <div> </div> 


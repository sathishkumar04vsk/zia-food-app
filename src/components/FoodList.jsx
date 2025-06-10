import { useContext, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import FoodCard from "./FoodCard";
import { APPContext } from "../App";
import { TextField } from "@mui/material";

export default function FoodList(){
    const [count, setCount] = useState(1);
    // useEffect 

    // useEffect(start,dependency)
    // useEffect (()=>{}, [count])
    // console.log(count)
    // console.log("hello world");
    const [FoodDatas, setFoodDatas] = useState([]);
    const [search, setSearch] = useState("");
    const inputRef = useRef();
    const divref = useRef();

    const fetchFood = async () => {
    try {
     const response = await fetch("https://61d2867cda87830017e59561.mockapi.io/foods", {
        method: "GET",
      });
      console.log(response)
      const data = await response.json();
      console.log(data);
      setFoodDatas(data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(search)

  useLayoutEffect(() => {
    // inputRef.current.focus();
    
    fetchFood();
  }, []);

  // useEffect(()=>{
  //   divref.current.scrollIntoView({behavior:"smooth"})
  // },[FoodDatas])

  const filterdFoods = useMemo(()=>{
    if (search !=""){
    return FoodDatas.filter(food=>food.food_name.toLowerCase().includes(search.toLowerCase()));
    } else {
      return FoodDatas
    }
  },[search, FoodDatas])

    

    // useLayoutEffect(()=>{
    //     console.log(count);
    //     console.log("Hello World")
    //     setCount(count+1)
    // },[]);//one time callback or initil dom rendering
    


    const Add = async (a, b) =>{
      return a + b
    }

    console.log(Add(20,30));
  
    Add(32,43).then(data=>console.log(data));
    
    // useCallback


    return <div className="container mt-24 mb-12 mx-auto">
            {/* <input type="text" className="border"  /> */}
            <TextField  size="small" label="Filter" className="!mb-2" value={search} onChange={event => setSearch(event.target.value)} name='search' />
              {/* <button onClick={()=>inputRef.current.focus()}>focus</button> */}
            {FoodDatas?<div className="grid grid-cols-4 gap-4">
                {filterdFoods.map((item, index)=><FoodCard key={index} item={item} fetchFood={fetchFood}/>)}
                {/* <button onClick={()=> setCount(count+1)}>count</button>
                {count} */}
            </div>:<p className="text-center">Loading ...</p>}
            {/* <div ref={divref}></div> */}
    </div>
};




// 1.alt => making more then one cursor
// 2.crtl + d => find same string
// 3. crtl + f => search
// 4. crtl + shit + p => emmit wrap <div> </div> 

// fetch(url,{method, headers:{}, body:jsonStringvalue})
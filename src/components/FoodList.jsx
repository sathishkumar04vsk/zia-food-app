import { useContext, useEffect, useState } from "react";
import FoodCard from "./FoodCard";
import { APPContext } from "../App";

export default function FoodList(){
    const [count, setCount] = useState(1);
    // useEffect 

    // useEffect(start,dependency)
    // useEffect (()=>{}, [count])
    // console.log(count)
    // console.log("hello world");
    const [FoodDatas, setFoodDatas] = useState([]);

    const fetchFood = () => {
    try {
      fetch("https://61d2867cda87830017e59561.mockapi.io/foods", {
        method: "GET",
      })
        .then((response) => response.json())
        .then((data) => setFoodDatas(data))
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchFood();
  }, []);
    

    useEffect(()=>{
        console.log(count);
        console.log("Hello World")
        setCount(count+1)
    },[]);//one time callback or initil dom rendering
    


    

    return <div className="container mt-24 mb-12 mx-auto">
            <div className="grid grid-cols-4 gap-4">
                {FoodDatas.map((item, index)=><FoodCard key={index} item={item}/>)}
                {/* <button onClick={()=> setCount(count+1)}>count</button>
                {count} */}
            </div>
    </div>
};




// 1.alt => making more then one cursor
// 2.crtl + d => find same string
// 3. crtl + f => search
// 4. crtl + shit + p => emmit wrap <div> </div> 


import { Card, CardContent, CardMedia } from "@mui/material";
import StarsIcon from "@mui/icons-material/Stars";
import { useEffect, useState } from "react";

export default function FoodList(){
    const [count, setCount] = useState(1);
    const [name, setName] = useState('');
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
    


    useEffect(()=>{
        console.log(count);
        console.log("HELLO WORLD")
    }, [name]);

    return <div className="container mt-24 mb-12 mx-auto">
            <div className="grid grid-cols-4">
                <Card>
                        <CardContent>
                            <CardMedia component="img" className="h-56 object-fit-cover object-center" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/4/21/f6d8a22a-fd9d-48f5-89fd-44e29bb1b6b1_770772.jpg" alt="pizza" />
                            <div className="py-2">
                                <h4 className="text-xl font-bold">Pizza Hut</h4>
                                <div className="flex gap-1 py-1">
                                    <StarsIcon className="text-green-700"/>
                                    <p className="font-semibold">4.6 </p>
                                    <strong>40-50 mins</strong>
                                </div>
                                <div className="text-gray-500 font-semibold">
                                    <p>Pizza </p>
                                    <p>Central Bengalore</p>
                                </div>
                            </div>
                        </CardContent>
                </Card>
                <button onClick={()=> setCount(count+1)}>count</button>
                <input value={name} onChange={event=>setName(event.target.value)} type="text" />
                {count}
            </div>
    </div>
};


// 1.alt => making more then one cursor
// 2.crtl + d => find same string
// 3. crtl + f => search
// 4. crtl + shit + p => emmit wrap <div> </div> 


import React, { useState } from "react";


const AddColor = () =>{
    const [colors,setColors] = useState([]);
    const [color, setColor] = useState('')

    const handleColorChange = (e)=>{
        setColor(e.target.value)
    }
    const hanleAddColor = ()=>{
        if(color !==''){
            setColors(prev=>([...prev,color]));
        } else{
            alert('Color is not a empty String')
        }
    }
    return<div style={{marginTop:"30px"}}>
        <input type="color" onChange={handleColorChange} />
        <button style={{marginLeft:"10px"}} onClick={hanleAddColor}>Add Color</button>
        <div style={{marginTop:"40px",minWidth:"640px"}}>
            {colors.map((item)=><div style={{backgroundColor:item, marginTop:"5px", height:"50px"}}></div>)}
        </div>
    </div>
}


export default AddColor;
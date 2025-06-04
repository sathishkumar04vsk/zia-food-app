import { Button, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { APPContext } from "../App";

export function AddFood(){
    const {FoodDatas,setFoodDatas}=useContext(APPContext);
    const [formdata, setFormData] = useState({
            id: FoodDatas.length+1,
            restorant_name:"",
            food_image:"",
            rating:0,
            expected_delivery: "",
            food_name:"",
            location:""
        })

        console.log(formdata)
    
        const handleOnChage  = (event)=>{
            console.log(event);
            const key = event.target.name
            setFormData(prev=>({...prev,[key]:event.target.value}))
            //                 yped va     restorant_name:tlue  
            //                      food_image: typed value  
        }

        const handleSubmit = ()=>{
            setFoodDatas(prev=>([...prev,formdata]))
        }

    return<div className="my-4 max-w-96 mx-auto">
        <h1 className="text-xl mb-4">Add Your Restorant Food</h1>
        <form >
            <TextField fullWidth onChange={(event)=>setFormData(prev=>({...prev,restorant_name: event.target.value}))} value={formdata.restorant_name} className="!mb-2" id="restorant_name" name="restorant_name" label="Restorant Name" />
            <TextField fullWidth onChange={handleOnChage} value={formdata.food_image} className="!mb-2" type="url" id="food_image" name="food_image" label="Food Image URL" />
            <TextField fullWidth onChange={handleOnChage} value={formdata.rating} className="!mb-2" type="number" id="rating" name="rating" label="Rating" />
            <TextField fullWidth onChange={handleOnChage} value={formdata.food_name} className="!mb-2" id="food_name" name="food_name" label="Food Name" />
            <TextField fullWidth onChange={handleOnChage} value={formdata.expected_delivery} className="!mb-2" id="expected_delivery" name="expected_delivery" label="Expected Delivery Time (mins)" />
            <TextField fullWidth onChange={handleOnChage} value={formdata.location} className="!mb-2" id="location" name="location" label="Location" />
            <Button onClick={handleSubmit} variant="contained">Save</Button>
        </form>
    </div>
}
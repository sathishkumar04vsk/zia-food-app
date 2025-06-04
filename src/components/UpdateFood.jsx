import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { APPContext } from "../App";
import { Button, TextField } from "@mui/material";

export default function UpdateFood() {
  const { FoodDatas, setFoodDatas } = useContext(APPContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const food = FoodDatas.find((item) => item.id == id);
  const [formdata, setFormData] = useState(food);
  const handleOnChage = (event) => {
    console.log(event);
    const key = event.target.name;
    setFormData((prev) => ({ ...prev, [key]: event.target.value }));
    //                 yped va     restorant_name:tlue
    //                      food_image: typed value
  };

  const handleSubmit = ()=>{
      setFoodDatas(prev=>([...prev.filter((item)=>item.id != id), formdata]));
      navigate('/')
  }

  return (
    <div className="my-4 max-w-[960px] mx-auto">
      <h1 className="text-2xl font-bold mb-8 text-center">Edit Your Restorant Food</h1>
      <form className="grid gap-4">
        <TextField
          fullWidth
          onChange={(event) =>
            setFormData((prev) => ({
              ...prev,
              restorant_name: event.target.value,
            }))
          }
          value={formdata.restorant_name}
          className="!mb-2"
          id="restorant_name"
          name="restorant_name"
          label="Restorant Name"
        />
        <TextField
          fullWidth
          onChange={handleOnChage}
          value={formdata.food_image}
          className="!mb-2"
          type="url"
          id="food_image"
          name="food_image"
          label="Food Image URL"
        />
        <TextField
          fullWidth
          onChange={handleOnChage}
          value={formdata.rating}
          className="!mb-2"
          type="number"
          id="rating"
          name="rating"
          label="Rating"
        />
        <TextField
          fullWidth
          onChange={handleOnChage}
          value={formdata.food_name}
          className="!mb-2"
          id="food_name"
          name="food_name"
          label="Food Name"
        />
        <TextField
          fullWidth
          onChange={handleOnChage}
          value={formdata.expected_delivery}
          className="!mb-2"
          id="expected_delivery"
          name="expected_delivery"
          label="Expected Delivery Time (mins)"
        />
        <TextField
          fullWidth
          onChange={handleOnChage}
          value={formdata.location}
          className="!mb-2"
          id="location"
          name="location"
          label="Location"
        />
        <div className="flex justify-end">
          <Button onClick={handleSubmit} variant="contained">Save</Button>
        </div>
      </form>
    </div>
  );
}

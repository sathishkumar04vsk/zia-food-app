import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { APPContext } from "../App";
import { Button, TextField } from "@mui/material";

export default function UpdateFood() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [formdata, setFormData] = useState(null);
  const handleOnChage = (event) => {
    console.log(event);
    const key = event.target.name;
    setFormData((prev) => ({ ...prev, [key]: event.target.value }));
    //                 yped va     restorant_name:tlue
    //                      food_image: typed value
  };

  const fetchFood = () => {
    try {
      fetch(`https://61d2867cda87830017e59561.mockapi.io/foods/${id}`, {
        method: "GET",
      })
        .then((response) => response.json())
        .then((data) => setFormData(data))
        .catch((error) => console.log(error));
    } catch (error) {}
  };

  const updateFood = () => {
    try {
      const paylod = JSON.stringify(formdata);
      fetch(`https://61d2867cda87830017e59561.mockapi.io/foods/${id}`, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: paylod,
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          navigate("/");
        })
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = () => {
    updateFood();
  };

  useEffect(() => {
    fetchFood();
  }, []);

  return (
    <div className="my-4 max-w-[960px] mx-auto">
      <h1 className="text-2xl font-bold mb-8 text-center">
        Edit Your Restorant Food
      </h1>
      {formdata ? (
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
            <Button onClick={handleSubmit} variant="contained">
              Save
            </Button>
          </div>
        </form>
      ) : (
        <p>Loading....</p>
      )}
    </div>
  );
}

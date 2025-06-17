import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { APPContext } from "../App";
import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import { ValidationSchema } from "./AddFood";

export default function UpdateFood() {
  const { id } = useParams();
  const [formdata, setFormData] = useState(null);
 
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

 
  useEffect(() => {
    fetchFood();
  }, []);

  
  return (
    <div className="my-4 max-w-[960px] mx-auto">
      <h1 className="text-2xl font-bold mb-8 text-center">
        Edit Your Restorant Food
      </h1>
      {formdata ? (
        <FromComponent initialValues={formdata} />
      ) : (
        <p>Loading....</p>
      )}
    </div>
  );
}


const FromComponent  = ({initialValues}) =>{
  const navigate = useNavigate();
  const { id } = useParams();
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: ValidationSchema,
    onSubmit: (values) => {
      updateFood(values);
    },
  });
   const updateFood = (values) => {
    try {
      const paylod = JSON.stringify(values);
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

  const { handleSubmit, handleChange, handleBlur, touched, errors, values } =
    formik;
  return <form onSubmit={handleSubmit} className="grid gap-4">
          <TextField
            fullWidth
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.restorant_name}
            error={
             errors.restorant_name &&touched.restorant_name
            }
            helperText={
             errors.restorant_name &&
             touched.restorant_name &&
             errors.restorant_name
            }
            className="!mb-2"
            id="restorant_name"
            name="restorant_name"
            label="Restorant Name"
          />
          <TextField
            fullWidth
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.food_image}
            error={errors.food_image &&touched.food_image}
            helperText={
             errors.food_image &&
             touched.food_image &&
             errors.food_image
            }
            className="!mb-2"
            type="url"
            id="food_image"
            name="food_image"
            label="Food Image URL"
          />
          <TextField
            fullWidth
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.rating}
            error={errors.rating && touched.rating}
            helperText={
             errors.rating &&
             touched.rating &&
             errors.rating
            }
            className="!mb-2"
            type="number"
            id="rating"
            name="rating"
            label="Rating"
          />
          <TextField
            fullWidth
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.food_name}
            error={errors.food_name &&touched.food_name}
            helperText={
             errors.food_name &&
             touched.food_name &&
             errors.food_name
            }
            className="!mb-2"
            id="food_name"
            name="food_name"
            label="Food Name"
          />
          <TextField
            fullWidth
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.expected_delivery}
            error={
             errors.expected_delivery &&
             touched.expected_delivery
            }
            helperText={
             errors.expected_delivery &&
              touched.expected_delivery &&
              errors.expected_delivery
            }
            className="!mb-2"
            id="expected_delivery"
            name="expected_delivery"
            label="Expected Delivery Time (mins)"
          />
          <TextField
            fullWidth
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.location}
            error={errors.location && touched.location}
            helperText={
              errors.location &&
              touched.location &&
              errors.location
            }
            className="!mb-2"
            id="location"
            name="location"
            label="Location"
          />
          <div className="flex justify-end">
            <Button type="submit" variant="contained">
              Save
            </Button>
          </div>
        </form>
}
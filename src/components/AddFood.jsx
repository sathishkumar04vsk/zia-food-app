import { Button, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { APPContext } from "../App";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";

export const ValidationSchema = Yup.object({
  restorant_name: Yup.string().required("Restorant Name is required"),
  food_image: Yup.string().url().required("Food Image is required"),
  rating: Yup.number().min(1).max(5).required("Rating is required"),
  expected_delivery: Yup.string().required(
    "Expected Delivery Time is required"
  ),
  food_name: Yup.string().required("Food Name is required"),
  location: Yup.string().required("Location is required"),
});

export function AddFood() {
  const navigate = useNavigate();
 

  const formik = useFormik({
    initialValues: {
      restorant_name: "",
      food_image: "",
      rating: 1,
      expected_delivery: "",
      food_name: "",
      location: "",
    },
    validationSchema: ValidationSchema,
    onSubmit: (values) => {
      createFood(values);
    },
  });

 

  const createFood = (values) => {
    try {
      const payload = JSON.stringify(values);
      fetch("https://61d2867cda87830017e59561.mockapi.io/foods", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: payload,
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

 
  return (
    <div className="my-4 max-w-[960px] mx-auto">
      <h1 className="text-2xl mb-8 font-bold text-center">
        Add Your Restorant Food
      </h1>
      <form onSubmit={formik.handleSubmit} className="grid gap-4">
        <TextField
          fullWidth
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          error={formik.errors.restorant_name && formik.touched.restorant_name}
          helperText={
            formik.errors.restorant_name &&
            formik.touched.restorant_name &&
            formik.errors.restorant_name
          }
          value={formik.values.restorant_name}
          className="!mb-2"
          id="restorant_name"
          name="restorant_name"
          label="Restorant Name"
        />
        <TextField
          fullWidth
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          error={formik.errors.food_image && formik.touched.food_image}
          helperText={
            formik.errors.food_image &&
            formik.touched.food_image &&
            formik.errors.food_image
          }
          value={formik.values.food_image}
          className="!mb-2"
          type="url"
          id="food_image"
          name="food_image"
          label="Food Image URL"
        />
        <TextField
          fullWidth
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          error={formik.errors.rating && formik.touched.rating}
          helperText={
            formik.errors.rating &&
            formik.touched.rating &&
            formik.errors.rating
          }
          value={formik.values.rating}
          className="!mb-2"
          type="number"
          id="rating"
          name="rating"
          label="Rating"
        />
        <TextField
          fullWidth
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          error={formik.errors.food_name && formik.touched.food_name}
          helperText={
            formik.errors.food_name &&
            formik.touched.food_name &&
            formik.errors.food_name
          }
          value={formik.values.food_name}
          className="!mb-2"
          id="food_name"
          name="food_name"
          label="Food Name"
        />
        <TextField
          fullWidth
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          error={
            formik.errors.expected_delivery && formik.touched.expected_delivery
          }
          helperText={
            formik.errors.expected_delivery &&
            formik.touched.expected_delivery &&
            formik.errors.expected_delivery
          }
          value={formik.values.expected_delivery}
          className="!mb-2"
          id="expected_delivery"
          name="expected_delivery"
          label="Expected Delivery Time (mins)"
        />
        <TextField
          fullWidth
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          error={formik.errors.location && formik.touched.location}
          helperText={
            formik.errors.location &&
            formik.touched.location &&
            formik.errors.location
          }
          value={formik.values.location}
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
    </div>
  );
}

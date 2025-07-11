import { Button, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { APPContext } from "../App";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";

export const ValidationSchema = Yup.object({
  restorant_name: Yup.string().required("Restorant Name is required"),
  image: Yup.string().url().required("Food Image is required"),
  rating: Yup.number().min(1).max(5).required("Rating is required"),
  price: Yup.number()
    .min(1, "Price must be greater than 0")
    .required("Price is required"),
  expected_delivery_time: Yup.string().required(
    "Expected Delivery Time is required"
  ),
  name: Yup.string().required("Food Name is required"),
  location: Yup.string().required("Location is required"),
});

export function AddFood() {
  const navigate = useNavigate();
  const { token } = useContext(APPContext);

  const formik = useFormik({
    initialValues: {
      restorant_name: "",
      image: "",
      price: "",
      rating: 1,
      expected_delivery_time: "",
      name: "",
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
      fetch(`${import.meta.env.VITE_API_URL}/foods`, {
        method: "POST",
        headers: { "content-type": "application/json", 'Authorization':`Bearer ${token}` },
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
          error={formik.errors.image && formik.touched.image}
          helperText={
            formik.errors.image &&
            formik.touched.image &&
            formik.errors.image
          }
          value={formik.values.image}
          className="!mb-2"
          type="url"
          id="image"
          name="image"
          label="Food Image URL"
        />
        <TextField
          fullWidth
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          error={formik.errors.price && formik.touched.price}
          helperText={
            formik.errors.price && formik.touched.price && formik.errors.price
          }
          value={formik.values.price}
          className="!mb-2"
          type="number"
          id="price"
          name="price"
          label="Price"
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
          error={formik.errors.name && formik.touched.name}
          helperText={
            formik.errors.name &&
            formik.touched.name &&
            formik.errors.name
          }
          value={formik.values.name}
          className="!mb-2"
          id="name"
          name="name"
          label="Food Name"
        />
        <TextField
          fullWidth
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          error={
            formik.errors.expected_delivery_time && formik.touched.expected_delivery_time
          }
          helperText={
            formik.errors.expected_delivery_time &&
            formik.touched.expected_delivery_time &&
            formik.errors.expected_delivery_time
          }
          value={formik.values.expected_delivery_time}
          className="!mb-2"
          id="expected_delivery_time"
          name="expected_delivery_time"
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

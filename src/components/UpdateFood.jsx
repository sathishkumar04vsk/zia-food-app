import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { APPContext } from "../App";
import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import { ValidationSchema } from "./AddFood";

export default function UpdateFood() {
  const { id } = useParams();
  const [formdata, setFormData] = useState(null);
  const { token } = useContext(APPContext)
 
  const fetchFood = () => {
    try {
      fetch(`${import.meta.env.VITE_API_URL}/foods/${id}`, {
        method: "GET",
        headers: {
          'Authorization':`Bearer ${token}`
        }
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
  const { token } = useContext(APPContext)
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
      fetch(`${import.meta.env.VITE_API_URL}/foods/${id}`, {
        method: "PUT",
        headers: { "content-type": "application/json", 'Authorization':`Bearer ${token}` },
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
            value={values.image}
            error={errors.image &&touched.image}
            helperText={
             errors.image &&
             touched.image &&
             errors.image
            }
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
            value={values.name}
            error={errors.name &&touched.name}
            helperText={
             errors.name &&
             touched.name &&
             errors.name
            }
            className="!mb-2"
            id="name"
            name="name"
            label="Food Name"
          />
          <TextField
            fullWidth
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.expected_delivery_time}
            error={
             errors.expected_delivery_time &&
             touched.expected_delivery_time
            }
            helperText={
             errors.expected_delivery_time &&
              touched.expected_delivery_time &&
              errors.expected_delivery_time
            }
            className="!mb-2"
            id="expected_delivery_time"
            name="expected_delivery_time"
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
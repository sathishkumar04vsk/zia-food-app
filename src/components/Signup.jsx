import React, { useContext } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { TextField } from "@mui/material";
import { Link } from "react-router-dom";
import { APPContext } from "../App";

const ValidationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email().required("Email is required"),
  phone_number: Yup.string().max(13).required("Phone Number is required"),
  password: Yup.string().required("Password is required"),
  confirm_pwd: Yup.string().oneOf([Yup.ref('password'), null], "Password must match").required("Confirm Password is required"),
});

export default function Signup() {
  const { handleSetToken } = useContext(APPContext)
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone_number: "",
      password: "",
      confirm_pwd: "",
    },
    validationSchema: ValidationSchema,
    onSubmit: (values) => {
      RegistorUser(values);
    },
  });

  const RegistorUser = async (values) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/register`, {
        method: "POST",
        body: JSON.stringify(values),
        headers:{
            "content-type": "application/json"
        }
      });
      const data = await response.json();
      handleSetToken(data.token)
      console.log(data);
      navigate('/')
      navigator(0)
    } catch (error) {
      console.log(error);
    }
  };
  const { handleSubmit, handleChange, handleBlur, errors, values, touched } =
    formik;
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div className="my-4 max-w-[960px] lg:min-w-[380px]  px-8 py-12 lg:min-h-96 flex  justify-between flex-col rounded-md  border shadow-lg ">
        <h1 className="text-2xl font-bold mb-8 text-center">Signup</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <TextField
            fullWidth
            onBlur={handleBlur}
            onChange={handleChange}
            error={errors.name && touched.name}
            helperText={
              errors.name &&
              touched.name &&
              errors.name
            }
            value={values.name}
            className="!mb-2"
            id="name"
            name="name"
            label="Name"
          />
          <TextField
            fullWidth
            onBlur={handleBlur}
            onChange={handleChange}
            error={errors.email && touched.email}
            helperText={
              errors.email &&
              touched.email &&
              errors.email
            }
            value={values.email}
            className="!mb-2"
            id="email"
            name="email"
            label="Email"
          />
          <TextField
            fullWidth
            onBlur={handleBlur}
            onChange={handleChange}
            error={errors.phone_number && touched.phone_number}
            helperText={
              errors.phone_number &&
              touched.phone_number &&
              errors.phone_number
            }
            value={values.phone_number}
            className="!mb-2"
            id="phone_number"
            name="phone_number"
            label="Phone Number"
          />
          <TextField
            fullWidth
            onBlur={handleBlur}
            onChange={handleChange}
            error={errors.password && touched.password}
            helperText={
              errors.password &&
              touched.password &&
              errors.password
            }
            value={values.password}
            className="!mb-2"
            id="password"
            name="password"
            label="Password"
          />
          <TextField
            fullWidth
            onBlur={handleBlur}
            onChange={handleChange}
            error={errors.confirm_pwd && touched.confirm_pwd}
            helperText={
              errors.confirm_pwd &&
              touched.confirm_pwd &&
              errors.confirm_pwd
            }
            value={values.confirm_pwd}
            className="!mb-2"
            id="confirm_pwd"
            name="confirm_pwd"
            label="Confirm Password"
          />

          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors"
          >
            Signup
          </button>
        </form>
        <div className="mt-4">
          <p>I already have an account? <Link className="text-blue-600 hover:underline" to={'/login'}>Login</Link></p>
        </div>
      </div>
    </div>
  );
}

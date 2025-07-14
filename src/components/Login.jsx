import React, { useContext } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { APPContext } from "../App";

const ValidationSchema = Yup.object({
  email: Yup.string().email().required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export default function Signup() {
  const { handleSetToken, setAlertMessage } = useContext(APPContext)
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: ValidationSchema,
    onSubmit: (values) => {
      LoginUser(values);
    },
  });
  const navigate = useNavigate()

  const LoginUser = async (values) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/login`, {
        method: "POST",
        body: JSON.stringify(values),
        headers:{
            "content-type": "application/json"
        }
      });
      
      const data = await response.json();
      if (!response.ok){
        throw new Error(data.error)
      }
      
      handleSetToken(data.token);
      setAlertMessage({open:true, severity:"success",message: data.message})
      navigate('/');
      
      console.log(data);
    } catch (error) {
      setAlertMessage({open:true, severity:"error", message: error.toString()})
      console.log(error);
    }
  };
  const { handleSubmit, handleChange, handleBlur, errors, values, touched } =
    formik;
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div className="my-4 max-w-[960px] lg:min-w-[380px]  px-8 py-12 lg:min-h-96 flex  justify-between flex-col rounded-md  border shadow-lg ">
        <h1 className="text-2xl font-bold mb-8 text-center">Login</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
          

          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors"
          >
            Login
          </button>
        </form>
        <div className="mt-4">
          <p>Don't have any account? <Link className="text-blue-600 hover:underline" to={'/signup'}>Register</Link></p>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from 'react'
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";


const schema = yup.object().shape({
  email:yup.string().required("Type of Function must be required"),
  password:yup.string().required("Type of Function must be required"),
})
function Admin() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const handleSubmit2 = (data)=>{
    if(data.email === "demo@gmail.com"){
      if(data.password === "demo"){
        console.log("inn");
        navigate("/admindashboard")
      }
      else{
        navigate("/admin")
      }
    }
    else{
      navigate("/admin")
    }
  }
  return (
    <div className="Auth-form-container">
    <form className="Auth-form" onSubmit={handleSubmit((data) => {
              handleSubmit2(data);
            })}>
      <div className="Auth-form-content">
        <h3 className="Auth-form-title">Admin Panel Login</h3>
        <div className="form-group mt-3">
          <label>Email address</label>
          <input
            {...register('email')}
            type="email"
            name="email"
            // onChange={handleChange}
            className="form-control mt-1"
            placeholder="Email Address"
          />
        </div>
        <div className="form-group mt-3">
          <label>Password</label>
          <input
            {...register('password')}
            type="password"
            name="password"
            // onChange={handleChange}
            className="form-control mt-1"
            placeholder="Password"
          />
        </div>
        <div className="d-grid gap-2 mt-3">
          <button
            type="submit"
            className="btn btn-success"
            // onClick={handleLogin}
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  </div>
  )
}

export default Admin
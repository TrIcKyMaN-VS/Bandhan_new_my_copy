import React, { useReducer } from "react";
import axios from "axios";
import "./login.css";
import { NavLink, useNavigate } from "react-router-dom";
import { authActions } from "../../store";

import { useDispatch } from "react-redux";
function LoginReducer(state, action) {
  switch (action.type) {
    case "field": {
      return {
        ...state,
        [action.fieldName]: action.payload,
      };
    }
    default:
      return state;
  }
}

const initialState = {
  username: "",
  email: "",
  password: "",
};

export default function Login() {
  const disspatch = useDispatch();
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(LoginReducer, initialState);
  const { username, email, password } = state;

  const handleChange = (e) => {
    dispatch({
      type: "field",
      fieldName: e.target.name,
      payload: e.target.value,
    });
  };
  axios.defaults.withCredentials = true;

  function handleLogin(e) {
    e.preventDefault();
    let { password, email } = state;

    e.preventDefault();

    axios
      .post("api/login", { email, password })
      .then((res) => {
        const lctTok = res.data.jsonToken;
        console.log(res);
        localStorage.setItem("bandhanUserToken", lctTok);
        disspatch(authActions.login());
        navigate("/events");
      })

      .catch((err) => {
        console.log(err);
        navigate("/login");
      });
  }

  function handleReq(e) {
    e.preventDefault();

    axios
      .get("api/login")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign Up</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              className="form-control mt-1"
              placeholder="Email Address"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              className="form-control mt-1"
              placeholder="Password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button
              type="submit"
              className="btn btn-success"
              onClick={handleLogin}
            >
              Submit
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            Forgot <NavLink to="/passwordReset">Password</NavLink>
          </p>
        </div>
      </form>
    </div>
  );
}

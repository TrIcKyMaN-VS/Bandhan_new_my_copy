import React, { useReducer, useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

function LoginReducer(state, action) {
  switch (action.type) {
    case "field": {
      // console.log("hii");
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
  phonenumber: "",
  // isLoading: false,
  // error: "",
  // isLoggedIn: false
};

// export default function (props) {
export default function Register() {
  const [state, dispatch] = useReducer(LoginReducer, initialState);
  const navigate = useNavigate();
  const { username, email, password } = state;

  const handleChange = (e) => {
    dispatch({
      type: "field",
      fieldName: e.target.name,
      payload: e.target.value,
    });
    // console.log(e.target.name + " : " + e.target.value);
  };
  axios.defaults.withCredentials = true;

  function handleLogin(e) {
    e.preventDefault();
    // console.log(username);
    let { password, email } = state;

    e.preventDefault();
    axios
      .post("api/login", { email, password })
      .then((res) => {
        console.log(res.data);
        // console.log("goy it..!");
      })
      .catch((err) => {
        console.log(err);
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

  function handleReg(e) {
    // console.log("Register");
    let { username, password, email ,phonenumber} = state;
    // console.log(phonenumber);
    e.preventDefault();
    axios
      .post("api/register", { username, email, password ,phonenumber})
      .then((res) => {
        // console.log(res.data);
        if (res.status == 200) {
          console.log("user registered successfully");
          navigate("/login");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  let [authMode, setAuthMode] = useState("signin");

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin");
  };

  if (authMode != "signin") {
    return (
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign Up</h3>
            <div className="text-center">
              Not registered yet?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
                Sign Up
              </span>
            </div>
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
                Login
              </button>
            </div>
            <p className="text-center mt-2">
              Forgot <a href="#">password?</a>
            </p>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign Up</h3>
          <div className="text-center">
            Already registered?{" "}
            <span className="link-primary" onClick={changeAuthMode}>
              Sign In
            </span>
          </div>
          <div className="form-group mt-3">
            <label>UserName</label>
            <input
              type="text"
              name="username"
              onChange={handleChange}
              className="form-control mt-1"
              placeholder="e.g Jane Doe"
            />
          </div>
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
          <div className="form-group mt-3">
            <label>PhoneNumber</label>
            <input
              type="text"
              name="phonenumber"
              onChange={handleChange}
              className="form-control mt-1"
              placeholder="Phonenumber"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button
              type="submit"
              className="btn btn-success"
              onClick={handleReg}
            >
              Register
            </button>
          </div>
          <p className="text-center mt-2">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </form>
    </div>
  );
}

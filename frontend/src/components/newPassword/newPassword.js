import axios from "axios";
import React, { useReducer } from "react";
import { useParams } from "react-router-dom";
import "./newPassword.css";

function newpassReducer(state, action) {
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
  passsword: "",
  confirmPass: "",
  // isLoading: false,
  // error: "",
  // isLoggedIn: false
};

function NewPassword() {
  const [state, dispatch] = useReducer(newpassReducer, initialState);
  const { resetTok } = useParams();
  // console.log(resetTok);
  const handleChange = (e) => {
    dispatch({
      type: "field",
      fieldName: e.target.name,
      payload: e.target.value,
    });
    // console.log(e.target.name);
    // console.log(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    let { password, confirmPass } = state;
    // console.log(password);
    console.log(confirmPass);
    if (password !== confirmPass) {
      console.log(" Password and Confirm Password doesn't match");
    } else {
      axios
        .post("/api/newPassword", { password, token: resetTok })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }
  }

  return (
    <div class="card login-form">
      <div class="card-body">
        <h3 class="card-title text-center">Change password</h3>

        {/* <!--Password must contain one lowercase letter, one number, and be at least 7 characters long.--> */}

        <div class="card-text">
          <form onSubmit={handleSubmit}>
            <div
              class="alert alert-danger alert-dismissible fade show"
              role="alert"
            >
              <strong>Holy guacamole!</strong> You should check in on some of
              those fields below.
              <a class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </a>
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Your new password</label>
              <input
                type="password"
                name="password"
                class="form-control form-control-sm"
                onChange={handleChange}
              />
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Repeat password</label>
              <input
                type="password"
                class="form-control form-control-sm"
                name="confirmPass"
                onChange={handleChange}
              />
            </div>
            <button type="submit" class="btn btn-primary btn-block submit-btn">
              Confirm
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewPassword;

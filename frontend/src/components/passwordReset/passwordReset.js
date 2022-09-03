import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function PasswordReset() {
  const [email, setEmail] = useState();
  const navigate = useNavigate();

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post("api/passwordReset", {email})
      .then((res) => {
        console.log(res.data);
        if(res.status === 200){
          navigate("/passwordresetsuccess")
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div class="container">
      <div class="row justify-content-center mt-4 mb-5 pt-4 pb-4">
        <div class="col-md-4 col-md-offset-4">
          <div class="panel panel-default">
            <div class="panel-body">
              <div class="text-center">
                <h3>
                  <i class="fa fa-lock fa-4x"></i>
                </h3>
                <h2 class="text-center">Forgot Password?</h2>
                <p>You can reset your password here.</p>
                <div class="panel-body">
                  <form
                    id="register-form"
                    role="form"
                    onSubmit={handleSubmit}
                    class="form"
                    method="post"
                  >
                    <div class="form-group">
                      <div class="input-group">
                        <span class="input-group-addon">
                          <i class="glyphicon glyphicon-envelope color-blue"></i>
                        </span>
                        <input
                          id="email"
                          name="email"
                          placeholder="email address"
                          class="form-control"
                          type="email"
                          onChange={handleEmail}
                        />
                      </div>
                    </div>
                    <div class="form-group">
                      <input
                        name="recover-submit"
                        class="btn btn-lg btn-primary btn-block"
                        value="Reset Password"
                        type="submit"
                      />
                    </div>

                    <input
                      type="hidden"
                      class="hide"
                      name="token"
                      id="token"
                      value=""
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PasswordReset;

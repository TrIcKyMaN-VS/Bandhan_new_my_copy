import React from "react";

function Passwordresetsuccess() {
  return (
    <div className="row justify-content-center">
      <div className="col-md-6">
        <div className="card shadow-4-strong">
          <img
            src="https://bit.ly/3KGlEFk"
            class="img-fluid mx-auto rounded-circle mt-4"
            alt="Townhouses and Skyscrapers"
            width={"180px"}
          />
          <div className="card-body text-center">
            <h2 className="fw-bold mb-2">Successfully Sended</h2>
            <h5 className="fw-bold mb-2">
              Password Reset Mail has successfully sended to you mail.
            </h5>
            <p className="text-danger">please check your mail as well as spam and bulk</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Passwordresetsuccess;

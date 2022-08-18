import React, { useEffect, useState } from "react";
import "./payment.css";

function Payment() {
  const [amount, setamount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount === "") {
      alert("please enter amount");
    } else {
      var options = {
        key: "rzp_live_1O186ppZkaxXI2",
        key_secret: "9ZARPPU9e2N93mcwQZ7Rb0sM",
        amount: amount * 100,
        currency: "INR",
        name: "Dhoom dhamaka",
        description: "for testing purpose",
        handler: function (response) {
          alert(response.razorpay_payment_id);
        },
        prefill: {
          name: "jerry",
          email: "jerry33@gmail.com",
          contact: "9489330433 ",
        },
        notes: {
          address: "Razorpay Corporate office",
        },
        theme: {
          color: "#3399cc",
        },
      };
      var pay = new window.Razorpay(options);
      pay.open();
    }
  };
  return (
    <div className="mb-10">
      <div className="row justify-content-center">
        <div className="col-md-8 mt-4 mb-7">
          <h3 className=" fw-bold text-center mb-4">Invoices</h3>
          <table class="table align-middle mb-0 bg-white">
            <thead class="bg-light">
              <tr className=" text-center">
                <th className=" fw-bolder text-capitalize">Title</th>
                <th className=" fw-bolder text-capitalize">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className=" text-center">
                  <p class="fw-normal mb-1">Software engineer</p>
                  <p class="text-muted mb-0">IT department</p>
                </td>
                <td className=" text-center">₹10,0000</td>
              </tr>
              <tr>
                <td className=" text-center">
                  <p class="fw-normal mb-1">Consultant</p>
                  <p class="text-muted mb-0">Finance</p>
                </td>
                {/* <span class="badge badge-primary rounded-pill d-inline">
                Onboarding
              </span> */}

                <td className=" text-center">₹10,0000</td>
              </tr>
              <tr>
                <td className=" text-center">
                  <p class="fw-normal mb-1">Designer</p>
                  <p class="text-muted mb-0">UI/UX</p>
                </td>
                <td className=" text-center">₹10,0000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className=" col-md-4">
          <div class="card text-center rounded shadow-5-strong mb-7">
            <div class="card-body border-5">
              <h5 class="card-title mb-4 mt-3 fw-bold">Payment</h5>

              <div className="row justify-content-center">
                <div className="col-md-8">
                  <div class="form-floating mb-5">
                    <input
                      type="number"
                      id="form12"
                      class="form-control mb-4"
                      placeholder="Enter Amount"
                      value={amount}
                      onChange={(e) => setamount(e.target.value)}
                    />
                    <label for="floatingInput">Enter amount ₹</label>
                  </div>
                </div>
              </div>
              <button
                href="{#}"
                type={"button"}
                class="btn btn-primary btn-block btn-lg"
                onClick={handleSubmit}
              >
                Proceed to payment <i class="fas fa-long-arrow-alt-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;

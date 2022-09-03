import React, { useEffect, useState } from "react";
import axios from "axios";
import "./payment.css";

function Payment() {
  const [loading, setLoading] = useState(false);
  const [orderAmount, setamount] = useState("");

  function loadRazorpay() {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onerror = () => {
      alert("Razorpay SDK failed to load. Are you online?");
    };
    script.onload = async () => {
      try {
        setLoading(true);
        const result = await axios.post(
          "http://localhost:3001/api/payment/create-order",
          {
            amount: orderAmount * 100,
          }
        );
        const { amount, id: order_id, currency } = result.data;
        const {
          data: { key: razorpayKey },
        } = await axios.get("api/payment/get-razorpay-key");

        const options = {
          key: razorpayKey,
          amount: amount.toString(),
          currency: currency,
          name: "example name",
          description: "example transaction",
          order_id: order_id,
          handler: async function (response) {
            const result = await axios.post("api/payment/pay-order", {
              orderId:12345,
              amount: amount,
              razorpayPaymentId: response.razorpay_payment_id,
              razorpayOrderId: response.razorpay_order_id,
              razorpaySignature: response.razorpay_signature,
            });
            alert(result.data.msg);
            // fetchOrders();
          },
          prefill: {
            name: "example name",
            email: "email@example.com",
            contact: "111111",
          },
          notes: {
            address: "example address",
          },
          theme: {
            color: "#80c0f0",
          },
        };

        setLoading(false);
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
      } catch (err) {
        alert(err);
        setLoading(false);
      }
    };
    document.body.appendChild(script);
  }

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (orderAmount === "") {
  //     alert("please enter amount");
  //   } else {
  //     var options = {
  //       key: "rzp_test_NKBO2XLeXbHMHB",
  //       key_secret: "1qryLbykXZBeFC4w1RdQRE9p",
  //       amount: amount * 100,
  //       currency: "INR",
  //       name: "Dhoom dhamaka",
  //       description: "for testing purpose",
  //       handler: function (response) {
  //         alert(response.razorpay_payment_id);
  //       },
  //       prefill: {
  //         name: "jerry",
  //         email: "jerry33@gmail.com",
  //         contact: "9489330433 ",
  //       },
  //       notes: {
  //         address: "Razorpay Corporate office",
  //       },
  //       theme: {
  //         color: "#3399cc",
  //       },
  //     };
  //     var pay = new window.Razorpay(options);
  //     pay.open();
  //   }
  // };
  return (
    <div className="mb-10">
      <div className="row justify-content-center mx-5">
        <div className="col-md-3">
          <div className="card shadow-4-strong">
            <div className="card-body text-center">
              <h3 className="mb-4">Payment</h3>
              <button type="button" className="btn btn-secondary">go to</button>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card shadow-4-strong">
            <div className="card-body text-center">
              <h3 className="mb-4">Payment</h3>
              <button type="button" className="btn btn-secondary">go to</button>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card shadow-4-strong">
            <div className="card-body text-center">
              <h3 className="mb-4">Payment</h3>
              <button type="button" className="btn btn-secondary">go to</button>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card shadow-4-strong">
            <div className="card-body text-center">
              <h3 className="mb-4">Payment</h3>
              <button type="button" className="btn btn-secondary">go to</button>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card shadow-4-strong">
            <div className="card-body text-center">
              <h3 className="mb-4">Payment</h3>
              <button type="button" className="btn btn-secondary">go to</button>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card shadow-4-strong">
            <div className="card-body text-center">
              <h3 className="mb-4">Payment</h3>
              <button type="button" className="btn btn-secondary">go to</button>
            </div>
          </div>
        </div>
      </div>
    
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
                      value={orderAmount}
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
                disabled={loading}
                onClick={loadRazorpay}
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
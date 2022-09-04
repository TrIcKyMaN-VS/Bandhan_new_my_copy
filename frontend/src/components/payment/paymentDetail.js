import React, { useEffect, useState } from "react";
import axios from "axios";

function PaymentDetail() {
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

  return (
    <div className="row justify-content-center my-4">
      <div className="col-xl-6 col-md-8">
        <div className="card border border-2 rounded shadow-3-strong border-dark p-md-4 ">
        <table className="table table-borderless mb-5">
            <tbody>
                <tr>
                    <td className="fw-bold ps-5">Event Name</td>
                    <td className=" text-success text-start">Birthday Event</td>
                </tr>
                <tr>
                    <td className="fw-bold ps-5">Event Charge</td>
                    <td className=" text-start text-success">10,00000</td>
                </tr>
            </tbody>
        </table>
        <table class="table">
          <thead class="table">
            <tr className="bg-light" >
              <th className="fw-bold" scope="col">Payable</th>
              <th className="fw-bold" scope="col">Amount</th>
              <th className="fw-bold" scope="col">Status</th>
              <th className="fw-bold" scope="col">Action</th>
              {/* payment */}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="fw-bold">Booking Charge</td>
              <td>25k</td>
              <td><span class="badge badge-success rounded-pill d-inline">Paid</span></td>
              <td><button type="button" className="btn btn-sm btn-warning">Pay</button></td>
            </tr>
            <tr>
              {/* <th scope="row">2</th> */}
              <td className="fw-bold">Confirmation Charge</td>
              <td>25k</td>
              <td><span class="badge badge-success rounded-pill d-inline">Paid</span></td>
              <td><button type="button" className="btn btn-sm btn-warning">Pay</button></td>
            </tr>
            <tr>
              {/* <th scope="row">3</th> */}
              <td className="fw-bold">Pending Charge</td>
              <td>50k</td>
              <td><span class="badge badge-success rounded-pill d-inline">Paid</span></td>
              <td><button type="button" className="btn btn-sm btn-warning">Pay</button></td>
            </tr>
          </tbody>{" "}
        </table>
        </div>
      </div>
    </div>
  );
}

export default PaymentDetail;

import React, { useEffect, useState } from "react";
import "./payment.css"


function Payment() {
    const [amount, setamount] = useState('');
    
    const handleSubmit = (e)=>{
      e.preventDefault();
      if(amount === ""){
      alert("please enter amount");
      }else{
        var options = {
          key: "rzp_live_1O186ppZkaxXI2",
          key_secret:"9ZARPPU9e2N93mcwQZ7Rb0sM",
          amount: amount *100,
          currency:"INR",
          name:"Dhoom dhamaka",
          description:"for testing purpose",
          handler: function(response){
            alert(response.razorpay_payment_id);
          },
          prefill: {
            name:"jerry",
            email:"jerry33@gmail.com",
            contact:"9489330433 "
          },
          notes:{
            address:"Razorpay Corporate office"
          },
          theme: {
            color:"#3399cc"
          }
        };
        var pay = new window.Razorpay(options);
        pay.open();
      }
    }
    return (
    <div  style={{height: '80vh'}}>
     <div class="card text-center">
        <div class="card-body">
          <h5 class="card-title">Payment</h5>
          <div class="form-outline">
           <input type="text" id="form12" class="form-control text-center mb-4"
             placeholder='Enter Amount'value={amount}onChange={(e)=>setamount(e.target.value)}/> 
          </div>
          <a href="{#}" class="btn btn-primary" onClick={handleSubmit}>Pay</a>
        </div>
</div>
      </div>
    );
  }

  
  export default Payment;

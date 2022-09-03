import React, { useEffect, useState } from "react";
import "./points.css";
import axios from 'axios'
function Points() {
    // const datavalue = axios.get("/api/adminuserlist")
    // const final = datavalue.data.points
    const [points, setpoints] = useState("")
    const [voucher, setvoucher] = useState("")

useEffect(()=>{
    axios.get("api/eventInfo/postweddingpoints").then((res) => {
        res.data[0].points ? 
        setpoints(res.data[0].points): setpoints("0")
      });
    axios.get("api/eventInfo/preweddingpoints").then((res) => {
        res.data[0].points ? 
        setpoints(res.data[0].points): setpoints("0")
     });
     axios.get("api/eventInfo/weddingpoints").then((res) => {
        res.data[0].points ? 
        setpoints(res.data[0].points): setpoints("0")
     });
     axios.get("api/eventInfo/birthdaypoints").then((res) => {
        res.data[0].points ? 
        setpoints(res.data[0].points): setpoints("0")
     });
     axios.get("api/eventInfo/babyshowerpoints").then((res) => {
        res.data[0].points ? 
        setpoints(res.data[0].points): setpoints("0")
        
     });
     axios.get("api/eventInfo/familyfunctionpoints").then((res) => {
        res.data[0].points ? 
        setpoints(res.data[0].points): setpoints("0")
     });
     axios.get("api/eventInfo/corporatepoints").then((res) => {
        res.data[0].points ? 
        setpoints(res.data[0].points): setpoints("0")
     });
     axios.get("api/eventInfo/engagementpoints").then((res) => {
        res.data[0].points ? 
        setpoints(res.data[0].points): setpoints("0")   
     });

     //vouchers

     axios.get("api/eventInfo/babyshowervoucher").then((res) => {
        res.data[0].voucher ? 
        setvoucher(res.data[0].voucher): setvoucher("0")
     });
    //  axios.get("api/eventInfo/engagementvoucher").then((res) => {
    //     res.data[0].voucher ? 
    //     setvoucher(res.data[0].voucher): setvoucher("0")
    //  });
    //  axios.get("api/eventInfo/corporatevoucher").then((res) => {
    //     res.data[0].voucher ? 
    //     setvoucher(res.data[0].voucher): setvoucher("0")
    //  });
    //  axios.get("api/eventInfo/familyfunctionvoucher").then((res) => {
    //     res.data[0].voucher ? 
    //     setvoucher(res.data[0].voucher): setvoucher("0")
    //  });
    //  axios.get("api/eventInfo/birthdayvoucher").then((res) => {
    //     res.data[0].voucher ? 
    //     setvoucher(res.data[0].voucher): setvoucher("0")
    //  });
    //  axios.get("api/eventInfo/weddingvoucher").then((res) => {
    //     res.data[0].voucher ? 
    //     setvoucher(res.data[0].voucher): setvoucher("0")
    //  });
    //  axios.get("api/eventInfo/preweddingvoucher").then((res) => {
    //     res.data[0].voucher ? 
    //     setvoucher(res.data[0].voucher): setvoucher("0")
    //  });
    //  axios.get("api/eventInfo/postweddingvoucher").then((res) => {
    //     res.data[0].voucher ? 
    //     setvoucher(res.data[0].voucher): setvoucher("0")
    //  });
},[])
  return (
    <div class="container mt-5">
    <div class="row d-flex ">
        <div class="col-md-6">
            <div class="card">
        <img src="https://www.icicibank.com/content/dam/icicibank/india/managed-assets/images/blog/big/how-to-earn-and-redeem-credit-card-points.jpg" className="card-img" />

                {/* <div class="text-right p-2">  </div> */}
                <div class="text-center"> <small class="text-uppercase flat">Points you earned for your next order </small> </div>
        <hr class="my-5" />

                <div class="d-flex justify-content-center px-2">
                    <div class="d-flex flex-row">
                        <h1 class="mt-0 off">{points}</h1> <sup class="mt-2 text-primary star">*</sup>
                    </div>
                </div>
                <div class="line">
                </div>
                {/* <div class="text-center mb-5"> <span class="text-uppercase">Rupees you earned for your next order </span> </div> */}
                <div class="text-right p-1"> <small></small> </div>
            </div>
        </div>
        <div class="col-md-6">
            <div class="card">
        <img src="https://www.teclasap.com.br/wp-content/uploads/2020/04/voucher_Fotor.jpg" className="card-img" />

                {/* <div class="text-right p-2">  </div> */}
                <div class="text-center"> <small class="text-uppercase flat">Vouchers you earned for your next order </small> </div>
        <hr class="my-5" />

                <div class="d-flex justify-content-center px-2">
                    <div class="d-flex flex-row">
                        <h1 class="mt-0 off">{voucher}</h1> <sup class="mt-2 text-primary star">*</sup>
                    </div>
                </div>
                <div class="line">
                </div>
                {/* <div class="text-center mb-5"> <span class="text-uppercase">Rupees you earned for your next order </span> </div> */}
                <div class="text-right p-1"> <small></small> </div>
            </div>
        </div>
    </div>
</div>
  );
}

export default Points;
import axios from "axios";
import React, { useEffect, useState } from "react";
import { authActions } from "../store";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./points.css";
function Points() {
    const dispatch = useDispatch();
  const navigate = useNavigate();
    // const datavalue = axios.get("/api/adminuserlist")
    // const final = datavalue.data.points
    const [points, setpoints] = useState("")
    const [voucher, setvoucher] = useState("")

useEffect(()=>{
    function doLogout() {
        localStorage.clear("bandhanUserToken");
        dispatch(authActions.logout());
        navigate("/login");
        console.log("Succesfully logged out");
      }
  
      if (!!localStorage.getItem("bandhanUserToken")) {
        axios
          .get("api/login/getLoginStatus")
          .then((res) => {
            if (res.status === 200) {
              console.log("soop...");
            } else {
              doLogout();
            }
          })
          .catch((err) => {
            doLogout();
          });
      }
    axios.get("api/eventInfo/postweddingpoints").then((res) => {
        setpoints(res.data[0].points)
        setvoucher(res.data[0].voucher)
      });
    axios.get("api/eventInfo/preweddingpoints").then((res) => {
        setpoints(res.data[0].points)
        setvoucher(res.data[0].voucher)
     });
     axios.get("api/eventInfo/weddingpoints").then((res) => {
        setpoints(res.data[0].points)
        setvoucher(res.data[0].voucher)
     });
     axios.get("api/eventInfo/birthdaypoints").then((res) => {
        setpoints(res.data[0].points)
        setvoucher(res.data[0].voucher)
     });
     axios.get("api/eventInfo/babyshowerpoints").then((res) => {
        setpoints(res.data[0].points)
        setvoucher(res.data[0].voucher)
        
     });
     axios.get("api/eventInfo/familyfunctionpoints").then((res) => {
        setpoints(res.data[0].points)
        setvoucher(res.data[0].voucher)
     });
     axios.get("api/eventInfo/corporatepoints").then((res) => {
        setpoints(res.data[0].points)
        setvoucher(res.data[0].voucher)
     });
     axios.get("api/eventInfo/engagementpoints").then((res) => {
        setpoints(res.data[0].points)
        setvoucher(res.data[0].voucher)  
     });

 
},[])
  return (
    <div class="container mt-5" >
    <div class="row d-flex ">
        <div class="col-md-6">
            <div class="card" style={{minHeight:"60vh"}}>
        <img src="https://logos.flamingtext.com/Word-Logos/point-design-fluffy-name.png" className="card-img" />

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
        <img src="https://bouncycastlenetwork-res.cloudinary.com/image/upload/f_auto,q_auto,c_limit,w_900/c29ac4fe0677bdc612cb46e9358e64a0" className="card-img" />

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
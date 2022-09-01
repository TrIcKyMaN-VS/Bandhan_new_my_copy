import React, { useEffect, useState } from "react";
import "./points.css";
import axios from 'axios'
function Points() {
    // const datavalue = axios.get("/api/adminuserlist")
    // const final = datavalue.data.points
    const [points, setpoints] = useState("")
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
})
  return (
    <div class="container mt-5">
    <div class="row d-flex justify-content-center">
        <div class="col-md-6">
            <div class="card">
        <img src="./images/newlogo.jpg" className="card-img" />

                {/* <div class="text-right p-2">  </div> */}
                <div class="text-center"> <small class="text-uppercase flat">Rupees you earned for your next order </small> </div>
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
    </div>
</div>
  );
}

export default Points;
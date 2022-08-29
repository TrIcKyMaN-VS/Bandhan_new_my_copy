import React from "react";
import "./events.css";
import { Link } from "react-router-dom";
import Eventcarousel from "./carousel/eventcarousel";
import Eventcard from "./cards/eventcard";
export default function Events() {
  return (
    <div style={{backgroundColor: "#edeef0"}}>
      {/* <div>
     <h1> Dummy events</h1>
    <div className='container'>
    <div className="row">
    <div class="card w-25">
  <div class="card-body">
    <h5 class="card-title">Birthday</h5>
    
    <Link className='btn btn-success' to="/birthday" >View Details</Link>
    
  </div>
</div>
<div class="card w-25">
  <div class="card-body">
    <h5 class="card-title">Engagement</h5>
    
    <Link className='btn btn-success' to="/engagement" >View Details</Link>
  </div>
</div>
<div class="card w-25">
  <div class="card-body">
    <h5 class="card-title">Pre-Wedding</h5>
    
    <Link className='btn btn-success' to="/prewedding" >View Details</Link>
  </div>
</div>
<div class="card w-25">
  <div class="card-body">
    <h5 class="card-title">Wedding</h5>
    
    <Link className='btn btn-success' to="/wedding" >View Details</Link>
  </div>
</div>
<div class="card w-25">
  <div class="card-body">
    <h5 class="card-title">Post -Wedding</h5>
    
    <Link className='btn btn-success' to="/postwedding" >View Details</Link>
  </div>
</div>
<div class="card w-25">
  <div class="card-body">
    <h5 class="card-title">Baby Shower</h5>
    
    <Link className='btn btn-success' to="/babyshower" >View Details</Link>
  </div>
</div>
<div class="card w-25">
  <div class="card-body">
    <h5 class="card-title">Family Function</h5>
    
    <Link className='btn btn-success' to="/familyfunction" >View Details</Link>
  </div>
</div>
<div class="card w-25">
  <div class="card-body">
    <h5 class="card-title">Corporate Event</h5>
    
    <Link className='btn btn-success' to="/corporateevent" >View Details</Link>
  </div>
</div>
</div>
</div>
</div> */}
      <Eventcarousel />
      <Eventcard />
    </div>
  );
}

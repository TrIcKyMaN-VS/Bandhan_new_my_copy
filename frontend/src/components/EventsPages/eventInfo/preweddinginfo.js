import axios from "axios";
import React, { useEffect, useState } from "react";

export function Preweddinginfo(props) {
  const personalprewedding = props.personalprewedding
  const prewedding = props.prewedding && props.prewedding
  const name = props.name

// console.log("vanthutu",props.prewedding);
return(
      props.prewedding &&
        <>
        <div className="container">
       <table class="table">
    <tbody>
    <tr>
        <th scope="row" className="fw-bold">Bride Name</th>
        <td colspan="2">{props.personalprewedding.BrideName}</td>
        
      </tr>
      <tr>
        <th scope="row" className="fw-bold">Groom Name</th>
        <td colspan="2">{props.personalprewedding.GroomName}</td>
        
      </tr>
      <tr>
        <th scope="row" className="fw-bold">Name of the customer</th>
        <td>{props.name}</td>
       
      </tr>
      <tr>
        <th scope="row" className="fw-bold">Event Name</th>
        <td>{props.personalprewedding.eventName}</td>
        
      </tr>
      <tr>
        <th scope="row" className="fw-bold">Order Id</th>
        <td>{props.personalprewedding.orderId}</td>
        
      </tr>
      <tr>
        <th scope="row" className="fw-bold">Date of event</th>
        <td colspan="2">{props.personalprewedding.date}</td>
        
      </tr>
      <tr>
        <th scope="row" className="fw-bold">Date of Booking</th>
        <td colspan="2">{props.personalprewedding.createdAt}</td>
        
      </tr>
    
    </tbody>
  </table>
  </div>
     <div class="my-5" />
      <div>
        <h3 className=" text-center fw-bold mb-2" style={{"fontVariant": "small-caps", "display": "block"}}>{props.personalprewedding.eventName} - [ {props.personalprewedding.date} ]</h3>
  
        <h5 className="text-center fw-bold text-muted mb-3" >Order ID - <span className="fs-6" style={{color:"limegreen"}}>[ {props.personalprewedding.orderId} ]</span></h5>
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
          <table class="table align-middle mb-0 bg-white mb-8">
          <thead>
            <tr>
              <th className=" fw-bold" scope="col">Event</th>
              <th className=" fw-bold" scope="col">
                Promise Date
              </th>
              <th className=" fw-bold" scope="col">
                Confirmed
              </th>
              <th className=" fw-bold" scope="col">
                Reason
              </th>
              <th className=" fw-bold" scope="col">
                Status
              </th>
            </tr>
          </thead>
         <tbody>
               {props.prewedding.ShootingReason && (
                <tr>
               <th>Shooting</th>
                <td className="text-start ps-0 ms-0 pe-5">
                  <input
                    value={props.prewedding.ShootingPromiseDate}
                    type={"date"}
                    className={"input-sm"}
                  />
                </td>
                <td>
                  <div
                    type="button"
                    className="btn btn-sm btn btn-info"
                  >
                    {props.prewedding.ShootingService}
                  </div>
                </td>
                <td>
                <textarea
                    // type={"text"}
                    value={props.prewedding.ShootingReason}
                  />
                 
                </td>
                <td>
                  <div
                    type="button"
                    className="btn btn-sm btn-info"
                    
                  >
                    {props.prewedding.ShootingStatus}
                  </div>
                </td>
              </tr>
                )}
          
              {props.prewedding.cateringReason && (
                <tr>
               <th>Catering</th>
                <td className="text-start ps-0 ms-0 pe-5">
                  <input
                    value={props.prewedding.cateringPromiseDate}
                    type={"date"}
                    className={"input-sm"}
                  />
                </td>
                <td>
                  <div
                    type="button"
                    className="btn btn-sm btn btn-info"
                  >
                    {props.prewedding.cateringService}
                  </div>
                </td>
                <td>
                  <textarea
                    // type={"text"}
                    value={props.prewedding.cateringReason}
                  />
                </td>
                <td>
                  <div
                    type="button"
                    className="btn btn-sm btn-info"
                    
                  >
                    {props.prewedding.cateringStatus}
                  </div>
                </td>
              </tr>
              )}
              {props.prewedding.BachelorsPartyReason && (
                <tr>
               <th>BachelorsParty </th>
                <td className="text-start ps-0 ms-0 pe-5">
                  <input
                    value={props.prewedding.BachelorsPartyPromiseDate}
                    type={"date"}
                    className={"input-sm"}
                  />
                </td>
                <td>
                  <div
                    type="button"
                    className="btn btn-sm btn btn-info"
                  >
                    {props.prewedding.BachelorsPartyService}
                  </div>
                </td>
                <td>
                  <textarea
                    // type={"text"}
                    value={props.prewedding.BachelorsPartyReason}
                  />
                </td>
                <td>
                  <div
                    type="button"
                    className="btn btn-sm btn-info"
                    
                  >
                    {props.prewedding.BachelorsPartyStatus}
                  </div>
                </td>
              </tr>
              )}
              {props.prewedding.AdditionalReason && (
                <tr>
               <th>Additional Service</th>
                <td className="text-start ps-0 ms-0 pe-5">
                  <input
                    value={props.prewedding.AdditionalPromiseDate}
                    type={"date"}
                    className={"input-sm"}
                  />
                </td>
                <td>
                  <div
                    type="button"
                    className="btn btn-sm btn btn-info"
                  >
                    {props.prewedding.AdditionalService}
                  </div>
                </td>
                <td className="text-justify" >
                
                <textarea
                    // type={"text"}
                    value={props.prewedding.AdditionalReason}
                  />
                
                
                </td>
                <td>
                  <div
                    type="button"
                    className="btn btn-sm btn-info"
                    
                  >
                    {props.prewedding.AdditionalStatus}
                  </div>
                </td>
              </tr>
              )}

        
         </tbody>
        </table>
          </div>
        </div>
      </div>
      </>
      
  //  
)
}

// export default Preweddinginfo
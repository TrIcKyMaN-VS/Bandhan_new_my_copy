import axios from "axios";
import React, { useEffect, useState } from "react";

function EventTable(props) {
  var eventsList = [];
  var eventStatus = [];
  const [name , setname] = useState("")
  useEffect(()=>{
    axios.get("api/eventInfo/getname").then((res) => {
      setname(res.data[0].username);
      console.log(res.data[0].username);
    });
  },[])
  console.log("props",props);
  if (props.item.foodb) {
    if (props.Catering.length > 2) {
      eventsList.push("Catering");
      eventStatus.push(props.item.cateringStatus);
    }
  }
  if (props.item.venueb) {
    if (props.Venue.length > 2) {
      eventsList.push(props.Venue);
      eventStatus.push(props.item.venueStatus);
    }
  }
  if (props.item.photographyb) {
    if (props.Photography.length > 2) {
      eventsList.push(props.Photography);
      eventStatus.push(props.item.photographyStatus);
    }
  }
  if (props.item.decorationb) {
    if (props.Decoration.length > 2) {
      eventsList.push(props.Decoration);
      eventStatus.push(props.item.decorationStatus);
    }
  }
  if (props.item.Honneymoonb) {
    if (props.Honeymoon.length > 2) {
      eventsList.push(props.Honeymoon);
      eventStatus.push(props.item.honeymoonStatus);
    }
  }
  if (props.item.shootingb) {
    if (props.Shooting.length > 2) {
      eventsList.push(props.Shooting);
      eventStatus.push(props.item.shootingStatus);
    }
  }

  // console.log(eventsList);

  return (
    <>
    <div className="container">
     <table class="table">
  <tbody>
    <tr>
      <th scope="row" className="fw-bold">Name of the customer</th>
      <td>{name}</td>
     
    </tr>
    <tr>
      <th scope="row" className="fw-bold">Event Name</th>
      <td>{props.item.eventName}</td>
      
    </tr>
    <tr>
      <th scope="row" className="fw-bold">Date</th>
      <td colspan="2">{props.item.date}</td>
      
    </tr>
    <tr>
      <th scope="row" className="fw-bold">Number Of Guest</th>
      <td colspan="2">{props.item.NoOfGuests}</td>
      
    </tr>
  </tbody>
</table>
</div>
   
   <div class="my-5" />
  

    <div>
      <h3 className=" text-center fw-bold mb-2" style={{"fontVariant": "small-caps", "display": "block"}}>{props.item.eventName} - [ {props.item.date} ]</h3>

      <h5 className="text-center fw-bold text-muted mb-3" >Order ID - <span className="fs-6" style={{color:"limegreen"}}>[ {props.item.orderId} ]</span></h5>
      <div className="row justify-content-center">
        <div className="col-md-6 text-center">
        <table class="table align-middle mb-0 bg-white mb-8">
        <thead class="bg-light">
          <tr>
            <th>Name of Service</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {eventsList.map((data, i) => {
            return (
              <tr key={i}>
                <td>
                  <p class="fw-normal mb-1">{data}</p>
                </td> 
                <td>
                  {eventStatus[i] == "pending" && (
                    <span class="badge badge-warning rounded-pill d-inline">
                      {eventStatus[i]}
                    </span>
                  )}
                  {eventStatus[i] != "pending" && (
                    <span class="badge badge-success rounded-pill d-inline">
                      {eventStatus[i]}
                    </span>
                  )}
                </td>
               
              </tr>
            );
          })}
        </tbody>
      </table>
        </div>
      </div>
    </div>
    </>
  );
}

export default EventTable;

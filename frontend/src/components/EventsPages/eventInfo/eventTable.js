import axios from "axios";
import React, { useEffect, useState } from "react";

function EventTable(props) {
  var eventsList = [];
  var eventStatus = [];

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
    <div>
      <h3 className=" text-center fw-bold mb-3" style={{"fontVariant": "small-caps", "display": "block"}}>{props.item.eventName} - [ {props.date} ]</h3>
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
                  {/* <p class="text-muted mb-0">IT department</p> */}
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
  );
}

export default EventTable;

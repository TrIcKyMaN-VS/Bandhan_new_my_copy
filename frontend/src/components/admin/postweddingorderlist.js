import React, { useState, useEffect } from 'react'
import axios from 'axios';


function Orderslist(props) {
    const forms = props.formdata
    console.log("post",forms);
  return (
    <div className="row my-12">
    <h3 className="fs-4 mb-3">Details</h3>
    <div className="col">
      <table className="table bg-white rounded shadow-sm  table-hover">
        <thead>
          <tr>
            <th scope="col">
              Name
            </th>
            <th className=" fw-bold" scope="col">
              Order Details
            </th>
            
          </tr>
        </thead>
        <tbody>
        <tr>
          <th>Bride Name </th>
          <td>{forms[0].BrideName}</td>
        </tr>
        <tr>
          <th>Client Name</th>
          <td>{forms[0].ClientName}</td>
        </tr>
        <tr>
          <th>City</th>
          <td>{forms[0].City}</td>
        </tr>
        <tr>
          <th>Food Type</th>
          <td>{forms[0].Food.Foodtype}</td>
        </tr>
        <tr>
          <th>From Date</th>
          <td>{forms[0].FromDate}</td>
        </tr>
        <tr>
          <th>To Date</th>
          <td>{forms[0].ToData}</td>
        </tr>
        <tr>
          <th>Groom Name</th>
          <td>{forms[0].GroomName}</td>
        </tr>
        <tr>
          <th>Food Items</th>
          <td>{forms[0].Food.items}</td>
        </tr>
        <tr>
          <th>Max Budget</th>
          <td>{forms[0].MaxBudget}</td>
        </tr>
        <tr>
          <th>Min Budget</th>
          <td>{forms[0].MinBudget}</td>
        </tr>
        <tr>
          <th>Honney Moon Destination Abroad</th>
          <td>{forms[0].Honneymoon.DestinationAbroad}</td>
        </tr>
        <tr>
          <th>Honney Moon Destination India</th>
          <td>{forms[0].Honneymoon.DestinationIndia}</td>
        </tr>
        <tr>
          <th>Number Of Guests</th>
          <td>{forms[0].NoOfGuests}</td>
        </tr>
        <tr>
          <th>SubaarambhYatra</th>
          <td>{forms[0].SubaarambhYatra[0]}</td>
        </tr>
        <tr>
          <th>SubaarambhYatra</th>
          <td>{forms[0].SubaarambhYatra[1]}</td>
        </tr>
        <tr>
          <th>muhDikhal</th>
          <td>{forms[0].muhDikhal[0]}</td>
        </tr>
        <tr>
          <th>muhDikhal</th>
          <td>{forms[0].muhDikhal[1]}</td>
        </tr>
        <tr>
          <th>muhDikhal</th>
          <td>{forms[0].muhDikhal[2]}</td>
        </tr>
        {/* <tr>
          <th>Shooting</th>
          <td>{forms[0].Shooting.Shooting[0]}</td>
        </tr> */}
       
{/*         
        <tr>
          <th>Venue One Name</th>
          <td>{forms[0].BachelorsParty.venues.venue1.name}</td>
        </tr> */}
      
 
        {/* <tr>
          <th>Other Services</th>
          <td>{forms[0].OtherServices[0]}</td>
        </tr>
        <tr>
          <th>Other Services</th>
          <td>{forms[0].OtherServices[1]}</td>
        </tr> */}
    
        <tr>
          <th>Dance</th>
          <td>{forms[0].muhDikhalvalue.dancevalues}</td>
        </tr>
        <tr>
          <th>music</th>
          <td>{forms[0].muhDikhalvalue.musicvalues}</td>
        </tr>
        {/* <tr>
          <th>Shows</th>
          <td>{forms[0].Shows.show[0]}</td>
        </tr>
        <tr>
          <th>Shows</th>
          <td>{forms[0].Shows.show[1]}</td>
        </tr>
        <tr>
          <th>Shows</th>
          <td>{forms[0].Shows.show[2]}</td>
        </tr> */}
        <tr>
          <th>Special Service</th>
          <td>{forms[0].SpecialService}</td>
        </tr>
        <tr>
          <th>Date</th>
          <td>{forms[0].date}</td>
        </tr>       
        </tbody>
      </table>
    </div>
  </div>
  )
}

export default Orderslist
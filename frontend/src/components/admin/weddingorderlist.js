import React, { useState, useEffect } from 'react'
import axios from 'axios';


function Orderslist(props) {
    const forms = props.formdata
    console.log("wed",forms);
    function status(value){
      if(value === "venue"){
        axios.post(`api/adminuserlist/weddingchangevenue/${forms[0].orderId}`).then((res) => {
        });
      }
      if(value === "decoration"){
        axios.post(`api/adminuserlist/weddingchangedecoration/${forms[0].orderId}`).then((res) => {
        });
      }
      if(value === "photography"){
        axios.post(`api/adminuserlist/weddingchangephotography/${forms[0].orderId}`).then((res) => {
        });
      }
      if(value === "catering"){
        axios.post(`api/adminuserlist/weddingchangecatering/${forms[0].orderId}`).then((res) => {
        });
      }
    }
    function points(val){
      axios.post(`api/adminuserlist/weddingpoints/${forms[0].orderId}`,{val}).then((res) => {
      });
    }
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
          <th>Groom Name</th>
          <td>{forms[0].GroomName}</td>
        </tr>
        <tr>
          <th>ConceptWedding</th>
          <td>{forms[0].ConceptWedding}</td>
        </tr>
        <tr>
          <th>FromDate</th>
          <td>{forms[0].FromDate}</td>
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
          <th>ConceptWedding</th>
          <td>{forms[0].ConceptWedding}</td>
        </tr>
        <tr>
          <th>Number Of Guests</th>
          <td>{forms[0].NoOfGuests}</td>
        </tr>
        <tr>
          <th>Special Service</th>
          <td>{forms[0].SpecialService}</td>
        </tr>
        <tr>
          <th>Theme Wedding</th>
          <td>{forms[0].ThemeWedding}</td>
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
          <th>Regular Decoration</th>
          <td>{forms[0].Decoration.RegularDecoration}</td>
        </tr>
        <tr>
          <th>Theme Decoration</th>
          <td>{forms[0].Decoration.ThemeDecoration}</td>
        </tr>
        <tr>
          <th>Food Type</th>
          <td>{forms[0].Food.Foodtype}</td>
        </tr>
        
        <tr>
          <th>Food Items</th>
          <td>{forms[0].Food.items}</td>
        </tr>
        <tr>
          <th>City</th>
          <td>{forms[0].City}</td>
        </tr>
        <tr>
          <th>Invitation </th>
          <td>{forms[0].OtherServiceValues.invitation}</td>
        </tr>
        <tr>
          <th>Photography  </th>
          <td>{forms[0].OtherServiceValues.photography}</td>
        </tr>
        <tr>
          <th>OtherServices </th>
          <td>{forms[0].OtherServices[0]}</td>
        </tr>
        <tr>
          <th>OtherServices </th>
          <td>{forms[0].OtherServices[1]}</td>
        </tr>
        <tr>
          <th>OtherServices </th>
          <td>{forms[0].OtherServices[2]}</td>
        </tr>
        <tr>
          <th>OtherServices </th>
          <td>{forms[0].OtherServices[3]}</td>
        </tr>
        <tr>
          <th>OtherServices </th>
          <td>{forms[0].OtherServices[4]}</td>
        </tr>
        <tr>
          <th>OtherServices </th>
          <td>{forms[0].OtherServices[5]}</td>
        </tr>
       
        <tr>
          <th>Services </th>
          <td>{forms[0].Services[0]}</td>
        </tr>
        <tr>
          <th>Services </th>
          <td>{forms[0].Services[1]}</td>
        </tr>
        <tr>
          <th>Services </th>
          <td>{forms[0].Services[2]}</td>
        </tr>
        <tr>
          <th>Services </th>
          <td>{forms[0].Services[3]}</td>
        </tr>
        <tr>
          <th>Services </th>
          <td>{forms[0].Services[4]}</td>
        </tr>
        <tr>
          <th>Services </th>
          <td>{forms[0].Services[5]}</td>
        </tr>
        <tr>
          <th>Services </th>
          <td>{forms[0].Services[6]}</td>
        </tr>
        <tr>
          <th>Services </th>
          <td>{forms[0].Services[7]}</td>
        </tr>
        <tr>
          <th>Baraat Date</th>
          <td>{forms[0].Servicevalue.Baraat.DateBaraat}</td>
        </tr>
        <tr>
          <th>Baraat Time</th>
          <td>{forms[0].Servicevalue.Baraat.TimeBaraat}</td>
        </tr>
        <tr>
          <th>Haldi Date</th>
          <td>{forms[0].Servicevalue.Haldi.DateHaldi}</td>
        </tr>
        <tr>
          <th>Haldi Time</th>
          <td>{forms[0].Servicevalue.Haldi.TimeHaldi}</td>
        </tr>
        <tr>
          <th>Mehandi Date</th>
          <td>{forms[0].Servicevalue.Mehandi.DateMehandiShow}</td>
        </tr>
        <tr>
          <th>Mehandi Time</th>
          <td>{forms[0].Servicevalue.Mehandi.TimeMehandiShow}</td>
        </tr>
        <tr>
          <th>Pooja Date</th>
          <td>{forms[0].Servicevalue.Pooja.DatePooja}</td>
        </tr>
        <tr>
          <th>Pooja Time</th>
          <td>{forms[0].Servicevalue.Pooja.TimePooja}</td>
        </tr>
        <tr>
          <th>Reception Date</th>
          <td>{forms[0].Servicevalue.Reception.DateReception}</td>
        </tr>
        <tr>
          <th>Reception Time</th>
          <td>{forms[0].Servicevalue.Reception.TimeReception}</td>
        </tr>
        <tr>
          <th>Sangeet Date</th>
          <td>{forms[0].Servicevalue.Sangeet.DateSangeet}</td>
        </tr>
        <tr>
          <th>Sangeet Time</th>
          <td>{forms[0].Servicevalue.Sangeet.TimeSangeet}</td>
        </tr>
        <tr>
          <th>Tilak Date</th>
          <td>{forms[0].Servicevalue.Tilak.dateTilak}</td>
        </tr>
        <tr>
          <th>Tilak Time</th>
          <td>{forms[0].Servicevalue.Tilak.TimeTilak}</td>
        </tr>
    
        <tr>
          <th>Dance</th>
          <td>{forms[0].Shows.dancevalues}</td>
        </tr>
        <tr>
          <th>music</th>
          <td>{forms[0].Shows.musicvalues}</td>
        </tr>
        <tr>
          <th>Venue One Name</th>
          <td>{forms[0].OtherServiceValues.venues.venue1.name}</td>
        </tr>
        <tr>
          <th>Venue One Place</th>
          <td>{forms[0].OtherServiceValues.venues.venue1.place}</td>
        </tr>
        <tr>
          <th>Venue two Name</th>
          <td>{forms[0].OtherServiceValues.venues.venue2.name}</td>
        </tr>
        <tr>
          <th>Venue two Place</th>
          <td>{forms[0].OtherServiceValues.venues.venue2.place}</td>
        </tr>
        <tr>
          <th>Venue three Name</th>
          <td>{forms[0].OtherServiceValues.venues.venue3.name}</td>
        </tr>
        <tr>
          <th>Venue three Place</th>
          <td>{forms[0].OtherServiceValues.venues.venue3.place}</td>
        </tr>        
        <tr>
          <th>Date</th>
          <td>{forms[0].date}</td>
        </tr>       
        </tbody>
      </table>

      <hr class="my-5"/>
      <table className="table bg-white rounded shadow-sm  table-hover">
        <thead>
          <tr>
            <th scope="col">
              Order 
            </th>
            <th className=" fw-bold" scope="col">
              Order Status
            </th>
            <th className=" fw-bold" scope="col">
              Change Status
            </th>
            
          </tr>
        </thead>
        <tbody>
        <tr>
          <th>venue Status</th>
          <td>{forms[0].venueStatus}</td>
          <td><div className='btn btn-success' onClick={()=>status("venue")}>Completed</div></td>
        </tr>
        <tr>
          <th>decorationStatus</th>
          <td>{forms[0].decorationStatus}</td>
          <td><div className='btn btn-success' onClick={()=>status("decoration")}>Completed</div></td>
        </tr>
        <tr>
          <th>photographyStatus</th>
          <td>{forms[0].photographyStatus}</td>
          <td><div className='btn btn-success' onClick={()=>status("photography")}>Completed</div></td>
        </tr>
        <tr>
          <th>cateringStatus</th>
          <td>{forms[0].cateringStatus}</td>
          <td><div className='btn btn-success' onClick={()=>status("catering")}>Completed</div></td>
        </tr>     
        </tbody>
      </table>
      <hr class="my-5"/>
      <table className="table bg-white rounded shadow-sm  table-hover">
        <thead>
          <tr>
            <th scope="col">
              Points and Vouchers
            </th>
            <th className=" fw-bold" scope="col">
            </th>
            <th className=" fw-bold" scope="col">
            </th>
            <th className=" fw-bold" scope="col">
            </th>
            <th className=" fw-bold" scope="col">
            </th>
            <th className=" fw-bold" scope="col">
            </th>
          </tr>
        </thead>
        <tbody>
        <tr>
          <th>Points</th>
          <td>{forms[0].points}</td>
          <td><div className='btn btn-success btn-sm' onClick={(val)=>points("1000")}>1000</div></td>
          <td><div className='btn btn-success btn-sm' onClick={()=>points("2000")}>2000</div></td>
          <td><div className='btn btn-success btn-sm' onClick={()=>points("3000")}>3000</div></td>
          <td><div className='btn btn-success btn-sm' onClick={()=>points("4000")}>4000</div></td>
          <td><div className='btn btn-success btn-sm' onClick={()=>points("5000")}>5000</div></td>
          <td><div className='btn btn-danger btn-sm' onClick={()=>points("0")}>0</div></td>
        </tr>     
        </tbody>
      </table>
    </div>
  </div>
  )
}

export default Orderslist
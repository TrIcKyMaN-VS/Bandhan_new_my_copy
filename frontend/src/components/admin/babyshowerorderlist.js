import React, { useState, useEffect } from 'react'
import axios from 'axios';

function Orderslist(props) {
    const forms = props.formdata
    console.log("baby",forms);
    function status(value){
      if(value === "venue"){
        axios.post(`api/adminuserlist/babyshowerchangevenue/${forms[0].orderId}`).then((res) => {
        });
      }
      if(value === "decoration"){
        axios.post(`api/adminuserlist/babyshowerchangedecoration/${forms[0].orderId}`).then((res) => {
        });
      }
      if(value === "photography"){
        axios.post(`api/adminuserlist/babyshowerchangephotography/${forms[0].orderId}`).then((res) => {
        });
      }
      if(value === "catering"){
        axios.post(`api/adminuserlist/babyshowerchangecatering/${forms[0].orderId}`).then((res) => {
        });
      }
    }
    function points(val){
      axios.post(`api/adminuserlist/babyshowerpoints/${forms[0].userId}`,{val}).then((res) => {
      });
    }
    function voucher(val){
      axios.post(`api/adminuserlist/babyshowervoucher/${forms[0].userId}`,{val}).then((res) => {
        console.log(res.data);
      });
    }
    
  return (
    <div className="row my-12">
    <h3 className="fs-4 mb-3">Details</h3>
    <div className="col">
      

      <table className="table bg-white rounded shadow-sm  table-hover">
        <thead>
          <tr>
            <th className=" fw-bold" scope="col">
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
            <th className=" fw-bold" scope="col">
              Cost
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
          <th>Cost</th>
          <td>{forms[0].points}</td>
          <td>
          <form>
         <div>
         <label for="exampleFormControlInput1">Amount</label>
         <input type="number" class="form-control" 
         id="exampleFormControlInput1" placeholder="amount">
         </input>
         </div>
         <button type="submit" class="btn btn-success mt-3">Submit</button>
         </form>
         </td>
        </tr>     
        </tbody>
      </table>
      <hr class="my-5"/>
      <table className="table bg-white rounded shadow-sm  table-hover">
        <thead>
          <tr>
            <th className=" fw-bold" scope="col">
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
          <td><div className='btn btn-success btn-sm' onClick={(val)=>points(50)}>50</div></td>
          <td><div className='btn btn-success btn-sm' onClick={()=>points(100)}>100</div></td>
          <td><div className='btn btn-success btn-sm' onClick={()=>points(150)}>150</div></td>
          <td><div className='btn btn-success btn-sm' onClick={()=>points(200)}>200</div></td>
          <td><div className='btn btn-success btn-sm' onClick={()=>points(250)}>250</div></td>
          <td><div className='btn btn-success btn-sm' onClick={()=>points(300)}>300</div></td>
          <td><div className='btn btn-success btn-sm' onClick={()=>points(350)}>350</div></td>
          <td><div className='btn btn-success btn-sm' onClick={()=>points(400)}>400</div></td>
          <td><div className='btn btn-success btn-sm' onClick={()=>points(450)}>450</div></td>
          <td><div className='btn btn-success btn-sm' onClick={()=>points(500)}>500</div></td>
          <td><div className='btn btn-danger btn-sm' onClick={()=>points(0)}>0</div></td>

        </tr>     
        <tr>
          <th>Vouchers</th>
          <td>{forms[0].voucher}</td>
          <td><div className='btn btn-success btn-sm' onClick={(val)=>voucher(1000)}>1000</div></td>
          <td><div className='btn btn-success btn-sm' onClick={()=>voucher(2000)}>2000</div></td>
          <td><div className='btn btn-success btn-sm' onClick={()=>voucher(3000)}>3000</div></td>
          <td><div className='btn btn-success btn-sm' onClick={()=>voucher(4000)}>4000</div></td>
          <td><div className='btn btn-success btn-sm' onClick={()=>voucher(5000)}>5000</div></td>
          <td><div className='btn btn-danger btn-sm' onClick={()=>voucher(0)}>0</div></td>
        </tr> 
        </tbody>
      </table>

      <hr class="my-5"/>
      <table className="table bg-white rounded shadow-sm  table-hover">
        <thead>
          <tr>
            <th className=" fw-bold" scope="col">
              Name
            </th>
            <th className=" fw-bold" scope="col">
              Order Details
            </th>
            
          </tr>
        </thead>
        <tbody>
        <tr>
          <th>Dad Name </th>
          <td>{forms[0].DadName}</td>
        </tr>
        <tr>
          <th>Mom Name </th>
          <td>{forms[0].MomName}</td>
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
          <th>Number Of Guests</th>
          <td>{forms[0].NoOfGuests}</td>
        </tr>
        <tr>
          <th>Special Service</th>
          <td>{forms[0].SpecialService}</td>
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
          <th>Invitation</th>
          <td>{forms[0].OtherServiceValues.invitation}</td>
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
          <th>Other Services</th>
          <td>{forms[0].OtherServices[0]}</td>
        </tr>
        <tr>
          <th>Other Services</th>
          <td>{forms[0].OtherServices[1]}</td>
        </tr>
        <tr>
          <th>Other Services</th>
          <td>{forms[0].OtherServices[2]}</td>
        </tr>
        <tr>
          <th>Other Services</th>
          <td>{forms[0].OtherServices[3]}</td>
        </tr>
        <tr>
          <th>Other Services</th>
          <td>{forms[0].OtherServices[4]}</td>
        </tr>
        <tr>
          <th>Other Services</th>
          <td>{forms[0].OtherServices[5]}</td>
        </tr>
        <tr>
          <th>Other Services</th>
          <td>{forms[0].OtherServices[6]}</td>
        </tr>
        <tr>
          <th>Dance</th>
          <td>{forms[0].Shows.dancevalues}</td>
        </tr>
        <tr>
          <th>Dj</th>
          <td>{forms[0].Shows.dj}</td>
        </tr>
        <tr>
          <th>music</th>
          <td>{forms[0].Shows.musicvalues}</td>
        </tr>
        <tr>
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
        </tr>
        <tr>
          <th>Shows</th>
          <td>{forms[0].Shows.show[3]}</td>
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
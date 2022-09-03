import React, { useState, useEffect } from 'react'
import axios from 'axios';


function Orderslist(props) {
    const forms = props.formdata
    const [datapoints , setdatapoints] = useState("")
    const [datavoucher , setdatavoucher] = useState("")
    useEffect(()=>{
      axios.get(`api/adminuserlist/babyshowerpointsvoucher/${forms[0].userId}`).then((res) => {
        setdatapoints(res.data[0].points)
        setdatavoucher(res.data[0].voucher)

      });
    },[])
    function status(value){
      if(value === "venue"){
        axios.post(`api/adminuserlist/preweddingchangevenue/${forms[0].orderId}`).then((res) => {
          console.log(res.data);
        });
      }
      if(value === "catering"){
        axios.post(`api/adminuserlist/preweddingchangecatering/${forms[0].orderId}`).then((res) => {
        });
      }
     
    }
    function points(val){
      axios.post(`api/adminuserlist/preweddingpoints/${forms[0].userId}`,{val}).then((res) => {
      });
    }
    function voucher(val){
      axios.post(`api/adminuserlist/preweddingvoucher/${forms[0].userId}`,{val}).then((res) => {
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
          <th>Venue status</th>
          <td>{forms[0].venueStatus}</td>
          <td><div className='btn btn-success' onClick={()=>status("venue")}>Completed</div></td>
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
          <td>{datapoints}</td>
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
          <td>{datavoucher}</td>
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
          <th>Groom Name </th>
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
          <th>Person</th>
          <td>{forms[0].Person}</td>
        </tr>
        <tr>
          <th>Number Of Guests</th>
          <td>{forms[0].BachelorsParty.noofguests}</td>
        </tr>
        <tr>
          <th>Shooting Destination</th>
          <td>{forms[0].Shooting.Destination}</td>
        </tr>
        <tr>
          <th>Shooting Date</th>
          <td>{forms[0].ShootingDate}</td>
        </tr>
        <tr>
          <th>Shooting</th>
          <td>{forms[0].Shooting.Shooting[0]}</td>
        </tr>
        <tr>
          <th>Shooting</th>
          <td>{forms[0].Shooting.Shooting[1]}</td>
        </tr>
        <tr>
          <th>Shooting</th>
          <td>{forms[0].Shooting.Shooting[2]}</td>
        </tr>
        <tr>
          <th>Shooting</th>
          <td>{forms[0].Shooting.Shooting[3]}</td>
        </tr>
        <tr>
          <th>Shooting</th>
          <td>{forms[0].Shooting.Shooting[4]}</td>
        </tr>
        <tr>
          <th>Shooting</th>
          <td>{forms[0].Shooting.Shooting[5]}</td>
        </tr>
        <tr>
          <th>Shooting</th>
          <td>{forms[0].Shooting.Shooting[6]}</td>
        </tr>
        <tr>
          <th>Shooting</th>
          <td>{forms[0].Shooting.Shooting[7]}</td>
        </tr>
        
        <tr>
          <th>Venue One Name</th>
          <td>{forms[0].BachelorsParty.venues.venue1.name}</td>
        </tr>
        <tr>
          <th>Venue One Place</th>
          <td>{forms[0].BachelorsParty.venues.venue1.place}</td>
        </tr>
        <tr>
          <th>Venue two Name</th>
          <td>{forms[0].BachelorsParty.venues.venue2.name}</td>
        </tr>
        <tr>
          <th>Venue two Place</th>
          <td>{forms[0].BachelorsParty.venues.venue2.place}</td>
        </tr>
        <tr>
          <th>Venue three Name</th>
          <td>{forms[0].BachelorsParty.venues.venue3.name}</td>
        </tr>
        <tr>
          <th>Venue three Place</th>
          <td>{forms[0].BachelorsParty.venues.venue3.place}</td>
        </tr>
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
          <td>{forms[0].BachelorsParty.dancevalues}</td>
        </tr>
        <tr>
          <th>music</th>
          <td>{forms[0].BachelorsParty.musicvalues}</td>
        </tr>
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
import React, { useState, useEffect } from 'react'
import axios from 'axios';


function Orderslist(props) {
    const forms = props.formdata
    const [datapoints , setdatapoints] = useState("")
    const [datavoucher , setdatavoucher] = useState("")
    const [updtBtn, setUpdtBtn] = useState(true);
    const [postInfo, setPostInfo] = useState("");

    const [catering, setCatering] = useState(false);
    const [cateringReas, setCateringReas] = useState(null);
    const [cateringstats, setCateringstats] = useState(null);
    const [cateringConf, setCateringConf] = useState(null);
    const [cateringPromiseDat, setCateringPromiseDate] = useState(null);
  
    const [additional, setAdditional] = useState(false);
    const [additionalReas, setAdditionalReas] = useState(null);
    const [additionalstats, setAdditionalstats] = useState(null);
    const [additionalConf, setAdditionalConf] = useState(null);
    const [additionalPromiseDat, setAdditionalPromiseDate] = useState(null);
  
    const [shooting, setShooting] = useState(false);
    const [shootingReas, setShootingReas] = useState(null);
    const [shootingstats, setShootingstats] = useState(null);
    const [shootingConf, setShootingConf] = useState(null);
    const [shootingPromiseDat, setShootingPromiseDate] = useState(null);
  
    const [bachelorsParty, setBachelorsParty] = useState(false);
    const [bachelorsPartyReas, setBachelorsPartyReas] = useState(null);
    const [bachelorsPartystats, setBachelorsPartystats] = useState(null);
    const [bachelorsPartyConf, setBachelorsPartyConf] = useState(null);
    const [bachelorsPartyPromiseDat, setBachelorsPartyPromiseDate] = useState(null);
  



    useEffect(()=>{
      axios.get(`api/adminuserlist/preweddingpointsvoucher/${forms[0].userId}`).then((res) => {
        setdatapoints(res.data[0].points)
        setdatavoucher(res.data[0].voucher)

        axios.get(`api/prewedding/preweddingInfo/${forms[0].orderId}`).then((res) => {
          let resDat = res.data[0];
          setPostInfo(res.data[0]);
          console.log(resDat);
    
    
          if (resDat.AdditionalReason != null) {
            setAdditional(true);
            setAdditionalConf(resDat.AdditionalService);
            setAdditionalPromiseDate(resDat.AdditionalPromiseDate);
            setAdditionalReas(resDat.AdditionalReason);
            setAdditionalstats(resDat.AdditionalStatus);
          } else {
            setAdditional(false);
          }
    
          if (resDat.ShootingReason != null) {
            setShooting(true);
            setShootingConf(resDat.ShootingService);
            setShootingPromiseDate(resDat.ShootingPromiseDate);
            setShootingReas(resDat.ShootingReason);
            setShootingstats(resDat.ShootingStatus);
          } else {
            setShooting(false);
          }
    
          if (resDat.BachelorsPartyReason != null) {
            setBachelorsParty(true);
            setBachelorsPartyConf(resDat.BachelorsPartyService);
            setBachelorsPartyPromiseDate(resDat.BachelorsPartyPromiseDate);
            setBachelorsPartyReas(resDat.BachelorsPartyReason);
            setBachelorsPartystats(resDat.BachelorsPartyStatus);
          } else {
            setBachelorsParty(false);
          }
    
          if (resDat.cateringReason != null) {
            console.log("fbjfhb");
            setCatering(true);
            setCateringConf(res.data[0].cateringService);
            setCateringPromiseDate(resDat.cateringPromiseDate);
            setCateringReas(resDat.cateringReason);
            setCateringstats(resDat.cateringStatus);
          } else {
            setCatering(false);
          }
    
        }); 

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

    function updateEventDetails() {
      const eventDatas = {
        orderId : postInfo.orderId,
        additionalConf,
        additionalPromiseDat,
        additionalReas,
        additionalstats,

        shootingConf,
        shootingPromiseDat,
        shootingReas,
        shootingstats,

        bachelorsPartyConf,
        bachelorsPartyPromiseDat,
        bachelorsPartyReas,
        bachelorsPartystats,

        cateringConf,
        cateringPromiseDat,
        cateringReas,
        cateringstats,


        
        
      };
  
      axios
        .post("/api/prewedding/updateInfos", { eventDatas })
        .then((res) => {
          // console.log(res);
          if (res.status===200) {
            alert("success")
            setUpdtBtn(true)
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }

  return (
    <div className="row my-12">
    <h3 className="fs-4 mb-3">Details</h3>
    <div className="col">
      <table className="table bg-white rounded shadow-sm  table-hover">
      <thead>
            <tr>
              <th scope="col">Event</th>
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
            {!!additional && (
              <tr>
                <th>Additional Service</th>
                <td className="text-start ps-0 ms-0 pe-5">
                  <input
                    type={"date"}
                    onChange={(e) => {
                      setAdditionalPromiseDate(e.target.value);
                      setUpdtBtn(false);
                    }}
                    value={additionalPromiseDat}
                    className={"input"}
                  />
                </td>

                <td>
                  <div
                    type="button"
                    className="btn btn-sm btn btn-info"
                    onClick={() => {
                      if (additionalConf == "Not Confirmed") {
                        setAdditionalConf("Confirmed");
                      } else if (additionalConf == "Confirmed") {
                        setAdditionalConf("Not Confirmed");
                      } else {
                        alert("Refresh the Page.Internet Connection Lost");
                      }
                      setUpdtBtn(false);
                    }}
                  >
                    {additionalConf}
                  </div>
                </td>

                <td>
                  <input
                    type={"text"}
                    value={additionalReas}
                    onChange={(e) => {
                      setAdditionalReas(e.target.value);
                      setUpdtBtn(false);
                    }}
                  />
                </td>

                <td>
                  <div
                    type="button"
                    className="btn btn-sm btn-info"
                    onClick={() => {
                      if (additionalstats == "pending") {
                        setAdditionalstats("Completed");
                      } else if (additionalstats == "Completed") {
                        setAdditionalstats("pending");
                      } else {
                        alert("Refresh the Page.Internet Connection Lost");
                      }
                      setUpdtBtn(false);
                    }}
                  >
                    {additionalstats}
                  </div>
                </td>
              </tr>
            )}
            {!!shooting && (
              <tr>
                <th>Shooting</th>
                <td className="text-start ps-0 ms-0 pe-5">
                  <input
                    value={shootingPromiseDat}
                    type={"date"}
                    onChange={(e) => {
                      setShootingPromiseDate(e.target.value);
                      setUpdtBtn(false);
                    }}
                    className={"input-sm"}
                  />
                </td>
                <td>
                  <div
                    type="button"
                    className="btn btn-sm btn btn-info"
                    onClick={() => {
                      if (shootingConf == "Not Confirmed") {
                        setShootingConf("Confirmed");
                      } else if (shootingConf == "Confirmed") {
                        setShootingConf("Not Confirmed");
                      } else {
                        alert("Refresh the Page.Internet Connection Lost");
                      }
                      setUpdtBtn(false);
                    }}
                  >
                    {shootingConf}
                  </div>
                </td>
                <td>
                  <input
                    type={"text"}
                    value={shootingReas}
                    onChange={(e) => {
                      setShootingReas(e.target.value);
                      setUpdtBtn(false);
                    }}
                  />
                </td>
                <td>
                  <div
                    type="button"
                    className="btn btn-sm btn-info"
                    onClick={() => {
                      if (shootingstats == "pending") {
                        setShootingstats("Completed");
                      } else if (shootingstats == "Completed") {
                        setShootingstats("pending");
                      } else {
                        alert("Refresh the Page.Internet Connection Lost");
                      }
                      setUpdtBtn(false);
                    }}
                  >
                    {shootingstats}
                  </div>
                </td>
              </tr>
            )}
            {!!bachelorsParty && (
              <tr>
                <th>BachelorsParty</th>
                <td className="text-start ps-0 ms-0 pe-5">
                  <input
                    type={"date"}
                    value={bachelorsPartyPromiseDat}
                    onChange={(e) => {
                      setBachelorsPartyPromiseDate(e.target.value);
                      setUpdtBtn(false);
                    }}
                    className={"input"}
                  />
                </td>
                <td>
                  <div
                    type="button"
                    className="btn btn-sm btn btn-info"
                    onClick={() => {
                      if (bachelorsPartyConf == "Not Confirmed") {
                        setBachelorsPartyConf("Confirmed");
                      } else if (bachelorsPartyConf == "Confirmed") {
                        setBachelorsPartyConf("Not Confirmed");
                      } else {
                        alert("Refresh the Page.Internet Connection Lost");
                      }
                      setUpdtBtn(false);
                    }}
                  >
                    {bachelorsPartyConf}
                  </div>
                </td>
                <td>
                  <input
                    type={"text"}
                    value={bachelorsPartyReas}
                    onChange={(e) => {
                      setBachelorsPartyReas(e.target.value);
                      setUpdtBtn(false);
                    }}
                  />
                </td>
                <td>
                  <div
                    type="button"
                    className="btn btn-sm btn-info"
                    onClick={() => {
                      if (bachelorsPartystats == "pending") {
                        setBachelorsPartystats("Completed");
                      } else if (bachelorsPartystats == "Completed") {
                        setBachelorsPartystats("pending");
                      } else {
                        alert("Refresh the Page.Internet Connection Lost");
                      }
                      setUpdtBtn(false);
                    }}
                  >
                    {bachelorsPartystats}
                  </div>
                </td>
              </tr>
            )}
            {!!catering && (
              <tr>
                <th>Catering</th>
                <td className="text-start ps-0 ms-0 pe-5">
                  <input
                    type={"date"}
                    value={cateringPromiseDat}
                    onChange={(e) => {
                      setCateringPromiseDate(e.target.value);
                      setUpdtBtn(false);
                    }}
                    className={"input"}
                  />
                </td>
                <td>
                  <div
                    type="button"
                    className="btn btn-sm btn btn-info"
                    onClick={() => {
                      if (cateringConf == "Not Confirmed") {
                        setCateringConf("Confirmed");
                      } else if (cateringConf == "Confirmed") {
                        setCateringConf("Not Confirmed");
                      } else {
                        alert("Refresh the Page.Internet Connection Lost");
                      }
                      setUpdtBtn(false);
                    }}
                  >
                    {cateringConf}
                  </div>
                </td>
                <td>
                  <input
                    type={"text"}
                    value={cateringReas}
                    onChange={(e) => {
                      setCateringReas(e.target.value);
                      setUpdtBtn(false);
                    }}
                  />
                </td>
                <td>
                  <div
                    type="button"
                    className="btn btn-sm btn-info"
                    onClick={() => {
                      if (cateringstats == "pending") {
                        setCateringstats("Completed");
                      } else if (cateringstats == "Completed") {
                        setCateringstats("pending");
                      } else {
                        alert("Refresh the Page.Internet Connection Lost");
                      }
                      setUpdtBtn(false);
                    }}
                  >
                    {cateringstats}
                  </div>
                </td>
              </tr>
            )}
           
          </tbody>
          <tr rowspan="5" className="text-center">
            <th></th>
            <th></th>
            <button
              type="button"
              onClick={() => updateEventDetails()}
              className="my-3 btn btn-success"
              disabled={updtBtn}
            >
              Update
            </button>
          </tr>
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
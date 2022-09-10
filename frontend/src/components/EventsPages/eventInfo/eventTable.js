import axios from "axios";
import React, { useEffect, useState } from "react";

function EventTable(props) {

 const [name , setname] = useState("");
 const [datas, setdata] = useState([]);


 const [personalprewedding ,setpersonalprewedding ] = useState([])
 const [personalpwedding ,setpersonalpostwedding ] = useState([])
 const [personalbabyshower ,setpersonalbabyshower ] = useState([])
 const [personalwedding ,setpersonalwedding ] = useState([])
 const [personalengagement ,setpersonalengagement ] = useState([])
 const [personalbirthday ,setpersonalbirthday ] = useState([])
 const [personalcorporate ,setpersonalcorporate ] = useState([])
 const [personalfamily ,setpersonalfamily ] = useState([])






  let prewedding = props.prewedding
  let postwedding = props.postwedding
  let babyshower = props.babyshower
  let birthday = props.birthday
  let engagement = props.engagement
  let corporate = props.corporate
  let familyfunction = props.familyfunction
  let wedding = props.wedding
 
  useEffect(()=>{
    axios.get("api/eventInfo/getname").then((res) => {
      setname(res.data[0].username);
      console.log(res.data[0].username);
    });

    
    axios
    .get("api/eventInfo/prewedding")
    .then((res) => {
      const ll = res.data;
      if (ll.length > 0) {
        setpersonalprewedding(ll[0]);
      }
    })
    .catch((err) => {
      console.log(err);
    });

  //req for babyshower

  axios
    .get("api/eventInfo/babyshower")
    .then((res) => {
      const ll = res.data;
      if (ll.length > 0) {
        setpersonalbabyshower(ll[0]);
      }
    })
    .catch((err) => {
      console.log(err);
    });

  //req for Wed

  axios
    .get("api/eventInfo/wedding")
    .then((res) => {
      const ll = res.data;
      if (ll.length > 0) {
        setpersonalwedding(ll[0]);
      }
    })
    .catch((err) => {
      console.log(err);
    });

  //req for engag

  axios
    .get("api/eventInfo/engagement")
    .then((res) => {
      const ll = res.data;
      if (ll.length > 0) {
        // console.log(ll);
        setpersonalengagement(ll[0]);
      }
    })
    .catch((err) => {
      console.log(err);
    });

  //req for bdy

  axios
    .get("api/eventInfo/birthday")
    .then((res) => {
      const ll = res.data;
      if (ll.length > 0) {
        setpersonalbirthday(ll[0]);
      }
    })
    .catch((err) => {
      console.log(err);
    });

  //req for corpor

  axios
    .get("api/eventInfo/corporate")
    .then((res) => {
      const ll = res.data;
      if (ll.length > 0) {
        setpersonalcorporate(ll[0]);
      }
    })
    .catch((err) => {
      console.log(err);
    });

  //req for familfunc

  axios
    .get("api/eventInfo/familyfunction")
    .then((res) => {
      const ll = res.data;
      if (ll.length > 0) {
        setpersonalfamily(ll[0]);
      }
    })
    .catch((err) => {
      console.log(err);
    });

  //req for postWed

  axios
    .get("api/eventInfo/postwedding")
    .then((res) => {
      const ll = res.data;
      if (ll.length > 0) {
        setpersonalpostwedding(ll[0]);
        // console.log(datas);
      }
    })
    .catch((err) => {
      console.log(err);
    });




  },[])
console.log(datas[0].orderId);

  // Object.keys(prewedding).length > 1

  return (
    <>





    
    <div className="container">
     <table class="table">
  {/* <tbody>
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
  </tbody> */}
</table>
</div>
   
   <div class="my-5" />
  

    <div>
      {/* <h3 className=" text-center fw-bold mb-2" style={{"fontVariant": "small-caps", "display": "block"}}>{props.item.eventName} - [ {props.item.date} ]</h3> */}

      {/* <h5 className="text-center fw-bold text-muted mb-3" >Order ID - <span className="fs-6" style={{color:"limegreen"}}>[ {props.item.orderId} ]</span></h5> */}
      <div className="row justify-content-center">
        <div className="col-md-6 text-center">
        <table class="table align-middle mb-0 bg-white mb-8">
        <thead class="bg-light">
          <tr>
            <th>Name of Service</th>
            <th>Status</th>
          </tr>
        </thead>
        {/* <tbody>
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
        </tbody> */}
      </table>
        </div>
      </div>
    </div>
    </>
  );
}

export default EventTable;

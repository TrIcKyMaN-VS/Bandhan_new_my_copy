import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Orderslist from '../weddingorderlist';
function WeddingDetails(props) {
//   var datas = props.users;
//   console.log("bb",datas);
//  const [users , setusers] = useState([])
const [weddingids , setweddingids] = useState([])
const [formdata, setformdata] = useState([])
const [now, setnow] = useState(false)

async function viewDetails(orderId){
  axios.get(`api/adminuserlist/weddingorder/orderId/${orderId}`).then((res) => {
    setformdata(res.data);
    console.log("wed",res.data);
    setnow(true)
  });
}
 useEffect(() => {
          axios.get("api/adminuserlist/weddingorder").then((res) => {
            setweddingids(res.data);
            console.log("pr",res.data);
          });
        }, [0]);
  return (        
    <>
    {!now && 
    <div className="row my-5">
      <h3 className="fs-4 mb-3">wedding Orders</h3>
      <div className="col">
        <table className="table bg-white rounded shadow-sm  table-hover">
          <thead>
            <tr>
              <th scope="col" width="50">
                #
              </th>
              <th className=" fw-bold" scope="col">
                username
              </th>
              <th className=" fw-bold" scope="col">
                Email Id
              </th>
              <th className=" fw-bold" scope="col">
                Phone Number
              </th>
              <th className=" fw-bold" scope="col">
                Order Id
              </th>
              <th className=" fw-bold" scope="col">
                Ordered date
              </th>
            </tr>
          </thead>
          <tbody>
            {weddingids.map((user, i) => {
              console.log(user);
              return (
                <tr key={i} style={{cursor:"pointer"}} onClick={()=>{viewDetails(user[1])}}>
                  <th scope="row">{i + 1}</th>
                  <td>{user[0].username}</td>
                  <td>{user[0].email}</td>
                  <td>{user[0].phone}</td>
                  <td>{user[1]}</td>
                  <td>{user[2]}</td>
                </tr>
              );
            })}
             
          </tbody>
        </table>
      </div>
    </div>

 
  }
  {now &&
     <Orderslist formdata={formdata}/>
  }
  </>           
     
    
  )
}

export default WeddingDetails
import React, { useState, useEffect } from 'react'
import axios from 'axios';

function FamilyfunctionDetails(props) {
//   var datas = props.users;
//   console.log("bb",datas);
//  const [users , setusers] = useState([])
const [familyfunctionids , setfamilyfunctionids] = useState([])
 useEffect(() => {
          axios.get("api/adminuserlist/familyfunctionorder").then((res) => {
            setfamilyfunctionids(res.data);
            console.log("mm",res.data);
          });
        }, [0]);
  return (        

    <div className="row my-5">
      <h3 className="fs-4 mb-3">Familyfunction Orders</h3>
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
            {familyfunctionids.map((user, i) => {
              console.log(user);
              return (
                <tr key={i}>
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

 
    
  )
}

export default FamilyfunctionDetails
import React, { useState, useEffect } from 'react'
import axios from 'axios';

function BirthdayDetails(props) {
//   var datas = props.users;
//   console.log("bb",datas);
//  const [users , setusers] = useState([])
const [birthdayids , setbirthdayids] = useState([])
 useEffect(() => {
          axios.get("api/adminuserlist/birthdayorder").then((res) => {
            setbirthdayids(res.data);
            console.log("mm",res.data);
          });
        }, [0]);
  return (        

    <div className="row my-5">
      <h3 className="fs-4 mb-3">Birthday Orders</h3>
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
            {birthdayids.map((user, i) => {
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
             
                {/* <tr >
                  <th scope="row">1</th>
                  <td>jj</td>
                  <td>hhh</td>
                  <td>hhhg</td>
                </tr> */}
              
          </tbody>
        </table>
      </div>
    </div>

            

         
    
  )
}

export default BirthdayDetails
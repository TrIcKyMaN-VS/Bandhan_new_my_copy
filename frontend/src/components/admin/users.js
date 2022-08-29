import React, { useEffect, useState } from 'react'
import axios from 'axios'


function Users() {
    const [datas, setdatas] =useState([])
    // const datas =[]
   async function funn(){
     const datavalue = await axios.get("/api/adminuserlist")
     const final = datavalue.data
     return final
    // .then((res) => {
   //    setdatas(JSON.stringify(res.data))
//    datas.push(JSON.stringify(res.data))
    // })
   }
   
    useEffect(()=>{
        (async () => {
            const tot = await funn();
            setdatas(tot)
        })()
    },[])

    // datas.map((item, index)=>(console.log(item)))
    console.log("summ",datas);

  return (
    <div className="row my-5">
                <h3 className="fs-4 mb-3">Users</h3>
                <div className="col">
                    <table className="table bg-white rounded shadow-sm  table-hover">
                        <thead>
                            <tr>
                                <th scope="col" width="50">#</th>
                                <th scope="col">username</th>
                                <th scope="col">Email Id</th>
                                <th scope="col">Phone Number</th>
                                <th scope="col">Orders</th>
                            </tr>
                        </thead>
                        <tbody>
                        {/* {datas.map((item, index)=>( */}
                            <tr>
                                <th scope="row"></th>
                                <td>ggg</td>
                                <td>Jonny</td>
                                <td>$1200</td>
                                <td>Event name</td>

                            </tr>
                        {/* ))} */}
                            
                        
                            <tr>
                                <th scope="row">1</th>
                                <td>Television</td>
                                <td>Jonny</td>
                                <td>$1200</td>
                                <td>Event name</td>

                            </tr>


                            {/* <tr>
                                <th scope="row">2</th>
                                <td>Laptop</td>
                                <td>Kenny</td>
                                <td>$750</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Cell Phone</td>
                                <td>Jenny</td>
                                <td>$600</td>
                            </tr> */}
   
                        </tbody>
                    </table>
                 </div>
            </div>
  )
}

export default Users                                    

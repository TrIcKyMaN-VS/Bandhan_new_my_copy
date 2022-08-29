import React from 'react'

function Orders() {
  return (
    <div className="row my-5">
                <h3 className="fs-4 mb-3">Recent Orders</h3>
                <div className="col">
                    <table className="table bg-white rounded shadow-sm  table-hover">
                        <thead>
                            <tr>
                                <th scope="col" width="50">#</th>
                                <th scope="col">Customer Name</th>
                                <th scope="col">Event Name</th>
                                <th scope="col">Ordered Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Television</td>
                                <td>Jonny</td>
                                <td>$1200</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Laptop</td>
                                <td>Kenny</td>
                                <td>$750</td>
                            </tr>
                            
                           
                        </tbody>
                    </table>
                </div>
            </div>
  )
}

export default Orders
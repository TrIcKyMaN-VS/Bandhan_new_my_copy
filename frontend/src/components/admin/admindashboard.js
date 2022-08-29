import React, { useState } from 'react'
import "./dash.css"
import Orders from "./orders"
import Users from "./users"

function Admindashboard() {
    const [orderspage, setorderspage] = useState(true)
    const dashorder=()=>{
        setorderspage(true)
    }
    const userpage=()=>{
        setorderspage(false)
    }

  return (
    <div className="d-flex" id="wrapper">

    <div className="bg-white" id="sidebar-wrapper">
        <div className="sidebar-heading text-center py-4 primary-text fs-4 fw-bold text-uppercase border-bottom"><i
                className="fas fa-user-secret me-2"></i>Dhoom Dhamaka</div>
        <div className="list-group list-group-flush my-3">
            <a  className="list-group-item list-group-item-action bg-transparent second-text active"><i
                    className="fas fa-tachometer-alt me-2" ></i><button onClick={dashorder}>Dashboard</button></a>
            <a  className="list-group-item list-group-item-action bg-transparent second-text fw-bold"><i
                    className="fas fa-project-diagram me-2"></i><button onClick={dashorder}>Orders</button></a>
            <a className="list-group-item list-group-item-action bg-transparent second-text fw-bold"><i
                    className="fas fa-chart-line me-2"></i><button onClick={userpage}>Users</button></a>
        </div>
    </div>
    <div id="page-content-wrapper">
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent py-4 px-4">
            <div className="d-flex align-items-center">
                <i className="fas fa-align-left primary-text fs-4 me-3" id="menu-toggle"></i>
                <h2 className="fs-2 m-0">Dashboard</h2>
            </div>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item dropdown">
                       
                    </li>
                </ul>
            </div>
        </nav>

        <div className="container-fluid px-4">
            <div className="row g-3 my-2">
                <div className="col-md-3">
                    <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                        <div>
                            <h3 className="fs-2">120</h3>
                            <p className="fs-5">Total Users</p>
                        </div>
                        <i className="fas fa-gift fs-1 primary-text border rounded-full secondary-bg p-3"></i>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                        <div>
                            <h3 className="fs-2">30</h3>
                            <p className="fs-5">Ordered Users</p>
                        </div>
                        <i
                            className="fas fa-hand-holding-usd fs-1 primary-text border rounded-full secondary-bg p-3"></i>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                        <div>
                            <h3 className="fs-2">30</h3>
                            <p className="fs-5">Orders</p>
                        </div>
                        <i className="fas fa-truck fs-1 primary-text border rounded-full secondary-bg p-3"></i>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                        <div>
                            <h3 className="fs-2">20</h3>
                            <p className="fs-5">completed Orders</p>
                        </div>
                        <i className="fas fa-chart-line fs-1 primary-text border rounded-full secondary-bg p-3"></i>
                    </div>
                </div>
            </div>
            {/* Orders */}
            {orderspage && (
                <Orders/>
            )}
            {!orderspage && (
                <Users/>
            )}
            

        </div>
    </div>
</div>

  )
}

export default Admindashboard
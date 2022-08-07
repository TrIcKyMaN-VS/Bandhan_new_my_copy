import React, { useState } from "react";
import { Link } from "react-router-dom";
// import "./navbar.css";

// import {
//   FaFacebookSquare,
//   FaInstagramSquare,
//   FaYoutubeSquare,
// } from "react-icons/fa";
// import { GiHamburgerMenu } from "react-icons/gi";

import { NavLink, useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { authActions } from "../../store";
const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();  

  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  console.log(isLoggedIn);

  const handleLogout = () => {
    axios
      .get("api/logout/user", null)
      .then((res) => {
        console.log(res);
        localStorage.clear("bandhanUserToken");
        dispatch(authActions.logout());
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
        localStorage.clear("bandhanUserToken");
        dispatch(authActions.logout());
        navigate("/login");
      });
  };
  return (
    <nav className=" navbar fixed-top  navbar-expand-lg mb-0 navbar-light bg-light">
    <div className="container-fluid">
      <a className="navbar-brand  ms-5 text-white " href="#">
        {/* <WbIncandescentIcon className="fs-1 mt-2 pe-2" /> */}
        <img src="./dhoom.ico" style={{width:"45px"}} />
        <span className=" fs-5 text-primary fw-bold" style={{ fontVariant:"small-caps" }}>Bandhan</span>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarNavDropdown"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fas fa-bars text-dark"></i>
      </button>
      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarNavDropdown"
      >
        <ul className="navbar-nav d-flex align-items-center me-5">
        <li className="nav-item mb-sm-2">
          <Link
            to="/"
            type="button"
            className="btn btn-warning me-1 fw-bold"
            aria-current="page"
          >
            HOME
          </Link>
        </li>
        <li class="nav-item mb-sm-2">
            <Link
              to="/events"
              type="button"
              class="btn btn-info me-2 fw-bold"
            >
              Events
            </Link>
          </li>
          <li class="nav-item mb-sm-2">
            <Link
              to="/becomevendor"
              type="button"
              class="btn btn-primary me-2 fw-bold"
            >
              Become a Vendor
            </Link>
          </li>

          {/* <li className="nav-item mb-sm-2">
            <a
              to="/"
              type="button"
              className="btn btn-warning btn-rounded me-1 fw-bold"
            >
              <NavLink to="/" className="text-white">
                Register
              </NavLink>
            </a>
          </li> */}
          {!isLoggedIn && (
            <li className="nav-item mb-sm-2">
            <Link
              to="/register"
              type="button"
              className="btn btn-primary me-1 fw-bold"
            >
              SIGN IN
            </Link>
          </li>
          )}
          {!isLoggedIn && (
            <li class="nav-item mb-sm-2">
            <Link
              to="/login"
              type="button"
              class="btn btn-success me-2 fw-bold"
            >
              Login
              {/* <LoginIcon className="ps-1" /> */}
            </Link>
          </li>
          )}
          {!!isLoggedIn && (
            <li class="nav-item mb-sm-2">
            <Link
              to="/myacc"
              type="button"
              class="btn btn-warning me-2 fw-bold"
            >
              My profile
              
            </Link>
          </li>
          )}
          {!!isLoggedIn && (
            <li class="nav-item mb-sm-2">
              <button
                type="button"
                onClick={handleLogout}
                className="btn btn-danger text-white me-1 fw-bold"
              >
                LOGOUT
                {/* <LogoutIcon className="ps-1" /> */}
              </button>
            </li>
          )}
        </ul>
      </div>
    </div>
  </nav>

    // <>
    //   <nav className="main-nav">
    //     <div className="logo ms-2">
    //       <h2>
    //         <span>D</span>hoom
    //         <span>D</span>hamaka
    //       </h2>
    //     </div>

    //     <div
    //       className={
    //         showMediaIcons ? "menu-link mobile-menu-link" : "menu-link "
    //       }
    //     >
    //       <ul>
    //         <li>
    //           <NavLink to="/">Home</NavLink>
    //         </li>

    //         <li>
    //           <NavLink to="/events">Events</NavLink>
    //         </li>
    //         <li>
    //           <NavLink to="/becomeVendor">Become a vendor</NavLink>
    //         </li>
    //         {!isLoggedIn && (
    //           <>
    //             <li>
    //               <NavLink to="/login">Login</NavLink>
    //             </li>
    //             <li>
    //               <NavLink to="/register">Register</NavLink>
    //             </li>
    //           </>
    //         )}
    //         {!!isLoggedIn && (
    //           <>
    //             <li>
    //               <NavLink to="/myacc">Myprofile</NavLink>
    //             </li>
    //             <li>
    //               <NavLink to="#" onClick={handleLogout}>
    //                 Logout
    //               </NavLink>
    //             </li>
    //           </>
    //         )}
    //       </ul>
    //     </div>

    //     <div className="social-media">
    //       <ul className="social-media-desktop">
    //         <li>
    //           <a href="#" target="_thapa">
    //             <FaFacebookSquare className="facebook" />
    //           </a>
    //         </li>
    //         <li>
    //           <a href="#" target="_thapa">
    //             <FaInstagramSquare className="instagram" />
    //           </a>
    //         </li>
    //         <li>
    //           <a href="#" target="_thapa">
    //             <FaYoutubeSquare className="youtube" />
    //           </a>
    //         </li>
    //       </ul>

    //       <div className="hamburger-menu">
    //         <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
    //           <GiHamburgerMenu />
    //         </a>
    //       </div>
    //     </div>
    //   </nav>
    // </>
  );
};

export default Navbar;

import { ToastContainer, toast } from 'react-toastify'; 

import "./App.css";
import Home from "./components/home/home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login/login";
import Register from "./components/Register/register";
import Passwordreset from "./components/passwordReset/passwordReset";
import NewPassword from "./components/newPassword/newPassword";
import Account from "./components/Myprofile/account";
// import Account from "./components/EventsPages/myprof";
import Events from "./components/Event/events";
import Becomevendor from "./components/BecomeVendor/becomevendor";
import Birthday from "./components/EventsPages/birthday";
import Babyshower from "./components/EventsPages/babyshower";
import Corporateevent from "./components/EventsPages/corporateevent";
import Engagement from "./components/EventsPages/engagement";
import Familyfunction from "./components/EventsPages/familyfunction";
import Postwedding from "./components/EventsPages/postwedding";
import Prewedding from "./components/EventsPages/prewedding";
import Wedding from "./components/EventsPages/wedding";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "./store";
import Footer from "./components/Footer/footer";
import Navbar from "./components/Navbar/navbar";
import Admin from './components/admin/adminlogin';
import Admindashboard from './components/admin/admindashboard';
function App() {
  const dispatch = useDispatch()
    if(localStorage.bandhanUserToken){
      dispatch(authActions.login())
    }
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  // console.log(isLoggedIn);


  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect(() => {
  //   axios.get("api/setUser").then((res) => {
  //     console.log(res.data);
  //   }).catch((err) => {
  //     console.log(err);
  //   })
  // })

  // const login = useCallback(() => {
  //   setIsLoggedIn(true);
  // });
  // const logout = useCallback(() => {
  //   setIsLoggedIn(false);
  // });

  let loginRoutes;

  if (isLoggedIn) {
    loginRoutes = (
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/myacc" element={<Account />}></Route>
        <Route path="/birthday" element={<Birthday />}></Route>
        <Route path="/babyshower" element={<Babyshower />}></Route>
        <Route path="/corporateevents" element={<Corporateevent />}></Route>
        <Route path="/engagement" element={<Engagement />}></Route>
        <Route path="/familyfunction" element={<Familyfunction />}></Route>
        <Route path="/postwedding" element={<Postwedding />}></Route>
        <Route path="/prewedding" element={<Prewedding />}></Route>
        <Route path="/wedding" element={<Wedding />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/events" element={<Events />}></Route>
        <Route path="/becomevendor" element={<Becomevendor />}></Route>
        <Route path="*" element={<Events />}></Route>
      </Routes>
    );
  } else {
    loginRoutes = (
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/events" element={<Events />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/passwordReset" element={<Passwordreset />}></Route>
        <Route path="/newPassword/:resetTok" element={<NewPassword />}></Route>
        <Route path="/becomevendor" element={<Becomevendor />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
        <Route path="/admindashboard" element={<Admindashboard />}></Route>
        {/* <Route path="/birthday" element={<Birthday />}></Route>
        <Route path="/babyshower" element={<Babyshower />}></Route>
        <Route path="/corporateevent" element={<Corporateevent />}></Route>
        <Route path="/engagement" element={<Engagement />}></Route>
        <Route path="/familyfunction" element={<Familyfunction />}></Route>
        <Route path="/postwedding" element={<Postwedding />}></Route>
        <Route path="/prewedding" element={<Prewedding />}></Route>
      <Route path="/wedding" element={<Wedding />}></Route> */}
      <Route path="/*" element={<Login />}></Route>
      </Routes>
    );
  }

  return (
    <Router>
      <div className="App">
        <ToastContainer/>
        <Navbar />
        <main>{loginRoutes}</main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

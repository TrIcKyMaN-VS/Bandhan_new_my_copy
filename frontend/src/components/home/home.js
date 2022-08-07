import axios from "axios";

import React, { useEffect, useState } from "react";

export default function Home() {
  // const [hmV, sethmV] = useState("Home Page")
  // hmV = "Home Page";

  // function getLogin() {
  //   console.log("loggg");
  //   axios
  //     .get("/api/home")
  //     .then((res) => {
  //       console.log(res);
  //       sethmV("Authheenticated")
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       sethmV("Error vanthruchuuu")
  //     });
  // }



  // function doLogout(){
  //   axios.get("api/login/logout").then((res) => {
  //     console.log(res.data);
  //     sethmV("successfully Logged Out")
  //   }).catch((err)  => {
  //     console.log(err);
  //   })
  // }

  return (
    <div>
      <h1>Home</h1>
    </div>
    
  );
}

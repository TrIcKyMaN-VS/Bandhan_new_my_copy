import axios from "axios";
import React, { useEffect, useState } from "react";
import EventTable from "./eventTable";

function EventInfo() {
  const [datas, setdata] = useState([]);
  useEffect(() => {
    //req for preWed

    axios
      .get("api/eventInfo/prewedding")
      .then((res) => {
        const ll = res.data;
        if (ll.length > 0) {
          setdata((data) => [...data, ll[0]]);
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
          setdata((data) => [...data, ll[0]]);
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
          setdata((data) => [...data, ll[0]]);
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
          setdata((data) => [...data, ll[0]]);
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
          setdata((data) => [...data, ll[0]]);
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
          setdata((data) => [...data, ll[0]]);
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
          setdata((data) => [...data, ll[0]]);
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
          setdata((data) => [...data, ll[0]]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // console.log("last", datas);

  return (
    <div className=" mt-5 mb-5 ps-5 pe-5 ms-3 me-3 pb-5 pt-3">
      {datas.map((item,i) => {
        console.log(item)
        if(item.foodb == true){
          item.foodb = "Catering"
        }
        if(item.venueb == true){
          item.venueb = "Venue"
        }
        if(item.photographyb == true){
          item.photographyb = "Photography"
        }
        if(item.decorationb == true){
          item.decorationb = "Decoration"
        }
        if(item.Honneymoonb == true){
          item.Honneymoonb = "HoneyMoon"
        }
        if(item.shootingb == true){
          item.shootingb = "Shooting"
        }
        
        return (

          <EventTable
          
            key={i}
            item={item}
            date={item.date}
            Catering={item.foodb}
            Photography={item.photographyb}
            Venue={item.venueb}
            Decoration={item.decorationb}
            Honeymoon={item.Honneymoonb}
            Shooting={item.shootingb}
          />
        );
      })}
    </div>
  );
}

export default EventInfo;

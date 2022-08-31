import React from "react";
import Babyshowercarousel from "./carousal/babyshowercarousel";
import BabyShowerForm from "./formcomponents/babyshowerevent/babyshowerevent";
import Babyshowerprotofolio from "./portfoliocomponents/babyshowerprotofolio";
export default function Babyshower() {
  return (
    <div>
      <Babyshowercarousel />
      <Babyshowerprotofolio />
      <BabyShowerForm />
    </div>
  );
}

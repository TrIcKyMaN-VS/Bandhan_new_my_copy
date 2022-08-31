import React from "react";
import Corporatecarousel from "./carousal/corporatecarousel";
// import "./corpeve.css";
import CorporateForm from "./formcomponents/corporate event/corporateform";
import Corporateeventprotofolio from "./portfoliocomponents/corporateeventprotofolio";

export default function corporateevent() {
  return (
    <div>
    <Corporatecarousel />
    <Corporateeventprotofolio />
     <CorporateForm/>
    </div>
  );
}
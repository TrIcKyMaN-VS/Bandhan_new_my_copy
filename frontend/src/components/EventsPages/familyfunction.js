import React from "react";
import Familyfunctioncarousel from "./carousal/familyfunctioncarousel";
// import "./familfunc.css";
import FamilyfunctionForm from "./formcomponents/FamilyFunctionevent/familyfunctionform";
import Familyfunctionprotofolio from "./portfoliocomponents/familyfunctionprotofolio";

export default function Familyfunction() {
  return (
    <div>
      <Familyfunctioncarousel />
      <Familyfunctionprotofolio />
      <FamilyfunctionForm />
    </div>
  );
}

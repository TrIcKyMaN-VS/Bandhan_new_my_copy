import React from "react";
import EngagementCarousel from "./carousal/engagementCarousel/engagementCarousel";
import EngagementForm from "./formcomponents/engagementForm/engagementForm";
import Engagementprotofolio from "./portfoliocomponents/engagementprotofolio";

function Engagement() {
  return (
    <div>
      <EngagementCarousel />
      <Engagementprotofolio />
      <EngagementForm />
    </div>
  );
}

export default Engagement;

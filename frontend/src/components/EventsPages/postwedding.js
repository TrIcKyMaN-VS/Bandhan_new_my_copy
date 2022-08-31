import React from "react";
import Postweddingcarousel from "./carousal/postweddingcarousel";
import PostweddingForm from "./formcomponents/postweddingform/postweddingform";
import Postweddingprotofolio from "./portfoliocomponents/postweddingprotofolio";

function Postwedding() {
  return (
    <div>
      <Postweddingcarousel />
      <Postweddingprotofolio />
      <PostweddingForm />
    </div>
  );
}

export default Postwedding;

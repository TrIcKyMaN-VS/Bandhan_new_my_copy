import React from "react";
import Preweddingcarousel from "./carousal/preweddingcarousel";
import Babyshowercarousel from "./carousal/preweddingcarousel";
import PreweddingForm from "./formcomponents/PreWeddingform/preweddingform";
import Preweddingprotofolio from "./portfoliocomponents/preweddingprotofolio";

export default function Prewedding() {
  return (
    <div>
      <Preweddingcarousel />
      <Preweddingprotofolio />
      <PreweddingForm />
    </div>
  );
}

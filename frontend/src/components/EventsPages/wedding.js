import React from 'react'
import Weddingcarousel from './carousal/weddingcarousel';
import Babyshowercarousel from "./carousal/weddingcarousel";
import Weddingform from './formcomponents/weddingform/weddingform'
import Weddingprotofolio from './portfoliocomponents/weddingprotofolio';

export default function Wedding() {
  return (
    <div>
    <Weddingcarousel />
    <Weddingprotofolio />
      <Weddingform/>
    </div>

  )
}
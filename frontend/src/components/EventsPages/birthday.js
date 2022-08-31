import React from 'react'
import "./birthday.css"
// import "./formcomponents/birthdayform.css"
import Birthdayform from "./formcomponents/birthdayForm/birthdayform"
import Birthdayportfolio from './portfoliocomponents/birthdayportfolio'
import Birthdaycarousal from './carousal/birthdayCarousel/birthdaycarousal'
import Formbirthday from './formcomponents/birthdayForm/formbirthday'
import Finalbirthdayform from './formcomponents/birthdayForm/finalbirthdayform'
export default function Birthday() {
  return (
    <div>
    <Birthdaycarousal/>
    <Birthdayportfolio/>
    {/* <Birthdayform/>
    <Formbirthday/> */}
    <Finalbirthdayform/>
	</div>
	
  )
}

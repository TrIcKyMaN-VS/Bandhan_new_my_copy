import axios from "axios";
// import './home.css'

import React, { useEffect, useState } from "react";

export default function Home() {
  return (
    <div>
      <section class="home" id="home">
        <div class="content">
          <h3>
            It is time to celebrate -<span> "The Best Event organiser" </span>
          </h3>
        </div>

        <div class="swiper-container home-slider">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src="images/pic1.JPG" alt="" />
            </div>
            <div class="swiper-slide">
              <img src="images/pic12.JPG" alt="" />
            </div>
            <div class="swiper-slide">
              <img src="images/pic7.jpg" alt="" />
            </div>
            <div class="swiper-slide">
              <img src="images/pic4.jpeg" alt="" />
            </div>

            <div class="swiper-slide">
              <img src="images/pic15.jpeg" alt="" />
            </div>
            <div class="swiper-slide">
              <img src="images/pic13.JPG" alt="" />
            </div>

            <div class="swiper-slide">
              <img src="images/pic8.jpeg" alt="" />
            </div>

            <div class="swiper-slide">
              <img src="images/pic11.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* <!-- home section ends --> */}

      {/* <!-- service section starts  --> */}

      <section class="service" id="service">
        <h1 class="heading">
          {" "}
          Dhamaka <span>services</span>{" "}
        </h1>

        <div class="box-container">
          <div class="box">
            <i class="fas fa-video"></i>
            <h3>Photography</h3>
            <p>Capturing is must because time passes, not memories.</p>
            <a href="#" class="btn">
              Know More
            </a>
          </div>

          <div class="box">
            <i class="fas fa-om"></i>
            <h3>Pooja</h3>
            <p>Each and Every work starts with almighty’s blessings </p>
            <a href="#" class="btn">
              Know More
            </a>
          </div>

          <div class="box">
            <i class="fas fa-atom"></i>
            <h3>decoration</h3>
            <p>It Helps to Bright your future.</p>
            <a href="#" class="btn">
              Know More
            </a>
          </div>

          <div class="box">
            <i class="fas fa-palette"></i>
            <h3>Beauty</h3>
            <p>Shine Forever.</p>
            <a href="#" class="btn">
              Know More
            </a>
          </div>

          <div class="box">
            <i class="fas fa-utensils"></i>

            <h3>catering</h3>
            <p>Food is the secret of energy.</p>
            <a href="#" class="btn">
              Know More
            </a>
          </div>
        </div>
      </section>

      {/* <!-- service section ends --> */}

      {/* <!-- about section starts  --> */}

      <section class="about" id="about">
        <h1 class="heading">
          <span>about</span> us{" "}
        </h1>

        <div class="row">
          <div class="image">
            <img src="images/newlogo.jpg" alt="" />
          </div>

          <div class="content">
            <h3>Our best services just for you</h3>
            <p>
              Dhoom Dhamaka is an online service provider platform which makes
              your occasion grand, royal and memorable. We all run after any
              function to see how the preparations are going, instead of
              enjoying it. So, we can relate to your problem and are here to
              assist you in one click and take all your responsibility. Because,
              it's time to celebrate now!!!
              <a href="./Terms of Service/index.html" class="btn">
                Terms and condition
              </a>
            </p>
          </div>
        </div>
      </section>
      <section class="service" id="service">

    <h1 class="heading"> Enjoy the  <span>Dhamaka safely</span> </h1>

    <div class="box-container">

        <div class="box">
            <i class="fas fa-briefcase-medical"></i>
            <h3>
                Protective Gears</h3>
            <p>Regular use of masks, gloves and sanitizers is ensured by professionals during working hours. The team of Dhoom Dhamaka is asking for proof by cross checking the temperature.All safety measures are being taken care of during the event.</p>
           
        </div>

        <div class="box">
            <i class="fas fa-hand-holding-medical"></i>
            <h3>
                Staff Screening</h3>
            <p>Temperature checks are done daily for the entire team. Temperature readings are confirmed by Dhoom Dhamaka security staff. We are allowing professionals to work on the spot only after the proof is verified. </p>
           
        </div>

        <div class="box">
            <i class="fas fa-heart"></i>
            <h3>Arogya Setu App Check</h3>
            <p>Each professional uses the app and undergoes self-assessment tests on a regular basis. The Dhoom Dhamaka team ensures to check it from time to time through image processing.</p>  
           
        </div>

        <div class="box">
            <i class="fas fa-shield-virus"></i>
            <h3>Sanitization Services</h3>
            <p>Venues, beauty salons and studios are taking several initiatives to disinfect their surfaces frequently. WHO guidelines for safety reference have also been shared with professionals by the Dhoom Dhamaka team.</p>
           
        </div>

       

        
    </div>

</section>
{/* <!--saftey section ends--> */}




{/* <!-- review section starts  --> */}

<section class="reivew" id="review"> 
    
    <h1 class="heading">client's <span>review</span></h1>

    <div class="review-slider swiper-container">

        <div class="swiper-wrapper">

            <div class="swiper-slide box">
                <i class="fas fa-quote-right"></i>
                <div class="user">
                    <img src="images/naveen.JPG" alt=""/>
                   
                    <div class="user-info">
                        <h3>Vengat</h3>
                        <span>happy clients</span>
                    </div>
                </div>
                <p>Yeah very good company and people at this group are amazing .</p>
            </div>

            

            <div class="swiper-slide box">
                <i class="fas fa-quote-right"></i>
                <div class="user">
                    <img src="images/mohamed.jpg" alt=""/>
                    <div class="user-info">
                        <h3>jerry</h3>
                        <span>happy clients</span>
                    </div>
                </div>
                <p>GOOD SERVICE I AM HAPPY.</p>
            </div>

            <div class="swiper-slide box">
                <i class="fas fa-quote-right"></i>
                <div class="user">
                    <img src="images/sandy.JPG" alt=""/>
                    <div class="user-info">
                        <h3>Mohammed</h3>
                        <span>happy clients</span>
                    </div>
                </div>
                <p>.One of the best and fastets growing group.All the best for your future work.</p>
            </div>

        </div>

    </div>

</section>

{/* <!-- review section ends --> */}

{/* <!-- contact section starts  --> */}

<section class="contact" id="contact">

    <h1 class="heading"> <span>BOOKING</span> Info </h1>
    
    
         
    <div class="box-container">

        <div class="box">
            <i class="fas fa-check"></i>
            <ul class="a">
                    <li>
                     <h3> Event Booking - <span> [GENERAL]</span> </h3>
                    </li>
                <li >
                    <p>Birthday: 10 days or Prior</p>
                    <p>Engagement: 10 days or Prior</p>
                    <p>Pre wedding : 12 days or Prior</p>
                    <p>Post wedding:12 days or Prior </p>
                    <p>Wedding: 15 days or Prior</p>
                    <p>Destination Event : 20 days or Prior</p>
                    <p> Wedding: 20 days or Prior</p>

                </li>
               
            </ul>
            
           
        </div>

        <div class="box">
            <i class="fas fa-check-double"></i>
            <ul class="a">
                    <li>
                     <h3> Event Booking -<span> [PREMIUM]</span> </h3>
                    </li>
                <li>
                    <p>Birthday: 5 days or Prior</p>
                    <p>Engagement: 5 days or Prior</p>
                    <p>Pre wedding : 5 days or Prior</p>
                    <p>Post wedding:5 days or Prior </p>
                    <p>Wedding: 7 days or Prior</p>
                    <p>Destination Event : 10 days or Prior</p>
                    <p> Wedding: 10 days or Prior</p>

                </li>
               
            </ul>
            
           
        </div>

       

        <div class="box">
            <i class="fas fa-bullhorn"></i>
            <ul class="a">
                    <li>
                     <h3> DHAMAKA - <span> [SPECIAL SERVICE]</span> </h3>
                    </li>
                   
                 <h3>EMERGENCY SERVICE <span>24 to 48 hours</span></h3>
               <p>If any additionl service required before the event start.</p>
               <h3>SPOT SERVICE <span>AT the Moment</span></h3>
               <p>If any additionl service required during the event.</p>
            </ul>
            
           
        </div>

        
            
           
            
    </div>

</section>

{/* <!-- contact section ends --> */}

{/* <!-- footer section starts  --> */}

<section class="footer">

    <div class="box-container">

    

        <div class="box">
            <h3>contact info</h3>
            <a href="#"> <i class="fas fa-phone"></i> +123-456-7890 </a>
            <a href="#"> <i class="fas fa-phone"></i> +111-222-3333 </a>
            <a href="#"> <i class="fas fa-envelope"></i> shaikhanas@gmail.com </a>
            <a href="#"> <i class="fas fa-envelope"></i> anasshaikh@gmail.com </a>
            <a href="#"> <i class="fas fa-map-marker-alt"></i> mumbai, india - 400104 </a>
        </div>

        <div class="box">
            <h3>follow us</h3>
            <a href="#"> <i class="fab fa-facebook-f"></i> facebook </a>
            <a href="#"> <i class="fab fa-whatsapp"></i> whatsapp</a>
            <a href="#"> <i class="fab fa-instagram"></i> instagram </a>
            <a href="#"> <i class="fab fa-linkedin"></i> linkedin </a>
            <a href="#"> <i class="fab fa-youtube"></i> youtube </a>
        </div>

    </div>

    <div class="credit"> created by <span>Team:Fabolous Four</span> | all rights reserved </div>
    <div class="grid-container">
      <div class="box">
        <a href="#"> <i class="fab fa-instagram"></i> instagram </a>
        <a href="#"> <i class="fab fa-instagram"></i> instagram </a>
        
       </div>
       <div class="box">
        <a href="#"> <i class="fab fa-linkedin"></i> linkedin </a>
        <a href="#"> <i class="fab fa-linkedin"></i> linkedin </a>
      
       </div>
    
</div>
   
    <div class="credit"> OUR <span><a href="./Terms of Service/index.html " target="blank"> TERMS AND CONDITION</a></span> </div>

</section>

{/* <!-- footer section ends --> */}

{/* <!-- theme toggler  --> */}

<div class="theme-toggler">

    <div class="toggle-btn">
        <i class="fas fa-cog"></i>
    </div>

    <h3>choose color</h3>

    <div class="buttons">
        
        <div class="theme-btn" style={{"background" : "#f7b731"}}></div>
        <div class="theme-btn" style={{"background" : "#ff0033"}}></div>
        <div class="theme-btn" style={{"background" : "#6abf20"}}></div>
        <div class="theme-btn" style={{"background": "#fff11c"}}></div>
        <div class="theme-btn" style={{"background": "#881da9"}}></div>
        <div class="theme-btn" style={{"background": "#1c6749"}}></div>
        <div class="theme-btn" style={{"background": "#02bceb"}}></div>
       
        <div class="theme-btn" style={{"background": "#e72e77"}}></div>
       
    </div>

</div>
    </div>
  );
}

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, EffectCoverflow, Pagination } from "swiper";

// import "swiper/swiper-bundle.min.css";
import "../../../../node_modules/swiper/swiper-bundle.min.css";
import "../../../../node_modules/swiper/swiper.min.css";
import "./swiper.css";

function Slide() {
  SwiperCore.use([EffectCoverflow, Pagination]);
  // if you want to use array
  const slide_img = [
    "https://swiperjs.com/demos/images/nature-1.jpg",
    "https://swiperjs.com/demos/images/nature-2.jpg",
    "https://swiperjs.com/demos/images/nature-3.jpg",
    "https://swiperjs.com/demos/images/nature-4.jpg",
    "https://swiperjs.com/demos/images/nature-5.jpg",
    "https://swiperjs.com/demos/images/nature-6.jpg",
    "https://swiperjs.com/demos/images/nature-7.jpg",
    "https://swiperjs.com/demos/images/nature-8.jpg",
    "https://swiperjs.com/demos/images/nature-8.jpg",
  ];

  return (
    <div style={{"width":"100%", }}>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 10,
          stretch: 0,
          depth: 100,
          modifier: 2,
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // pagination={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
        
      >
        {/* // Using array */}
        {slide_img.map((img, i) => {
          return (
            <SwiperSlide key={i} style={{"boxShadow":"-1px 5px 7px 3px rgba(0,0,0,0.3)"}}>
              <img src={img} alt="ji" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Slide;

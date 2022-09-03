import React from "react";
import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

// import "./serviceGallery.css";

function PhotographyGallery() {
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };

  return (
    <div className="App p-5 m-5">
      {/* <!-- Gallery --> */}
      <p className=" text-center pb-5" style={{ fontSize:"32px" ,fontWeight:"bolder" }}>
        IT'S TIME TO EXPLORE{" "}
        <span className="" style={{ fontSize:"32px" ,fontWeight:"bold" ,color: "limegreen" }}>
          {" "}
          OUR GALLERY
        </span>
      </p>
      <div class="row m-5">
        <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
          <LightGallery
            onInit={onInit}
            speed={500}
            plugins={[lgThumbnail, lgZoom]}
          >
            <a href="https://drive.google.com/file/d/1wkuxivbvZwrVdMjOWtKjhGbxkyQ1SE-K/view?usp=sharing">
              <img
                src="https://drive.google.com/file/d/1wkuxivbvZwrVdMjOWtKjhGbxkyQ1SE-K/view?usp=sharing"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Boat on Calm Water"
              />
            </a>
            <a href="./images/photograohy.jpg">
              <img
                src="./images/photograohy.jpg"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Boat on Calm Water"
              />
            </a>
            <a href="./images/dancing.jpg">
              <img
                src="./images/dancing.jpg"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Boat on Calm Water"
              />
            </a>
            <a href="./images/id.jpg">
              <img
                src="./images/id.jpg"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Boat on Calm Water"
              />
            </a>
            {/* second */}
            <a href="./images/pic1.jpg" className="d-none">
              <img
                src="./images/pic1.jpg"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Boat on Calm Water"
              />
            </a>
            <a href="./images/img5.jpg" className="d-none">
              <img
                src="./images/img5.jpg"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Boat on Calm Water"
              />
            </a>
            {/* third */}
            <a href="./images/photograohy.jpg" className="d-none">
              <img
                src="./images/photograohy.jpg"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Boat on Calm Water"
              />
            </a>
            <a href="./images/dancing.jpg" className="d-none">
              <img
                src="./images/dancing.jpg"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Boat on Calm Water"
              />
            </a>
          </LightGallery>
        </div>

        {/* second row  */}

        <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
          <LightGallery
            onInit={onInit}
            speed={500}
            plugins={[lgThumbnail, lgZoom]}
          >
            {/* first */}
            <a href="./images/id.jpg" className=" d-none">
              <img
                src="./images/id.jpg"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Boat on Calm Water"
              />
            </a>
            <a href="./images/photograohy.jpg" className=" d-none">
              <img
                src="./images/photograohy.jpg"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Boat on Calm Water"
              />
            </a>
            <a href="./images/dancing.jpg" className=" d-none">
              <img
                src="./images/dancing.jpg"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Boat on Calm Water"
              />
            </a>
            <a href="./images/id.jpg" className=" d-none">
              <img
                src="./images/id.jpg"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Boat on Calm Water"
              />
            </a>
            {/* second */}
            <a href="./images/imgw2.jpg">
              <img
                src="./images/imgw2.jpg"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Boat on Calm Water"
              />
            </a>
            <a href="./images/pic1.jpg">
              <img
                src="./images/pic1.jpg"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Boat on Calm Water"
              />
            </a>
            <a href="./images/img5.jpg">
              <img
                src="./images/img5.jpg"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Boat on Calm Water"
              />
            </a>
            <a href="./images/imgw2.jpg">
              <img
                src="./images/imgw2.jpg"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Boat on Calm Water"
              />
            </a>
            {/* third */}
            <a href="./images/newlogo.jpg" className="d-none">
              <img
                src="./images/newlogo.jpg"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Boat on Calm Water"
              />
            </a>
            <a href="./images/photograohy.jpg" className="d-none">
              <img
                src="./images/photograohy.jpg"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Boat on Calm Water"
              />
            </a>
            <a href="./images/dancing.jpg" className="d-none">
              <img
                src="./images/dancing.jpg"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Boat on Calm Water"
              />
            </a>
            <a href="./images/newlogo.jpg" className="d-none">
              <img
                src="./images/newlogo.jpg"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Boat on Calm Water"
              />
            </a>
          </LightGallery>
        </div>

        {/* thirdrow  */}

        <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
          <LightGallery
            onInit={onInit}
            speed={500}
            plugins={[lgThumbnail, lgZoom]}
          ><a href="./images/id.jpg" className=" d-none">
              <img
                src="./images/id.jpg"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Boat on Calm Water"
              />
            </a>
            <a href="./images/photograohy.jpg" className=" d-none">
              <img
                src="./images/photograohy.jpg"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Boat on Calm Water"
              />
            </a>
            <a href="./images/dancing.jpg" className=" d-none">
              <img
                src="./images/dancing.jpg"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Boat on Calm Water"
              />
            </a>
            <a href="./images/id.jpg" className=" d-none">
              <img
                src="./images/id.jpg"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Boat on Calm Water"
              />
            </a>
            {/* second row */}
            <a href="./images/pic1.jpg" className=" d-none">
              <img
                src="./images/pic1.jpg"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Boat on Calm Water"
              />
            </a>
            <a href="./images/img5.jpg" className=" d-none">
              <img
                src="./images/img5.jpg"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Boat on Calm Water"
              />
            </a>
            {/* thirdrow  */}
            <a href="./images/newlogo.jpg">
              <img
                src="./images/newlogo.jpg"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Boat on Calm Water"
              />
            </a>
            <a href="./images/photograohy.jpg">
              <img
                src="./images/photograohy.jpg"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Boat on Calm Water"
              />
            </a>
            <a href="./images/dancing.jpg">
              <img
                src="./images/dancing.jpg"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Boat on Calm Water"
              />
            </a>
            <a href="./images/newlogo.jpg">
              <img
                src="./images/newlogo.jpg"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Boat on Calm Water"
              />
            </a>
          </LightGallery>
        </div>

        {/* </LightGallery> */}
      </div>
      {/* <!-- Gallery --> */}
    </div>
  );
}

export default PhotographyGallery;

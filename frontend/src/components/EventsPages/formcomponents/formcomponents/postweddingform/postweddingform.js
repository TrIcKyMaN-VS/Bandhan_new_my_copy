import React from "react";
import { useState } from "react";
// import "./birthdayform.css";
import MultiSelect from "react-multiple-select-dropdown-lite";
import "react-multiple-select-dropdown-lite/dist/index.css";

function PostweddingForm() {
  const [value, setvalue] = useState("");
  const handleOnchange = (val) => {
    setvalue(val);
  };
  const options = [
    
    { label: "Indian", value: "Indian" },
    { label: "Folk", value: "Folk" },
  ];
  // dance option end

  // music options start
  const [musicvalue, setmusicvalue] = useState("");
  const handlemusicchange = (val) => {
    setmusicvalue(val);
  };
  const optionsmusic = [
    
    { label: "Indian", value: "Indian" },
    { label: "Western", value: "Western" },
  ];
  //music options end

  //photography option start

  const [photovalue, setphotovalue] = useState("");
  const handlePhotoChange = (val) => {
    setphotovalue(val);
  };
  const PhotoOptions = [
    { label: "Candid", value: "Candid" },
    { label: "Regular Photography", value: "Regular Photography" },
    { label: "Cinematography", value: "Cinematography" },
    { label: "Video", value: "Video" },
    { label: "Drone Video", value: "Drone Video" },
  ];

  //photography option end
  //invitation start 
   const [invitationvalue, setinvitationvalue] =useState("");
   const handleinvitation = (val) =>{
    setinvitationvalue(val)
   }
   const invitationtypes =[
    { label: "Physical", value: "Physical" },
    { label: "E-Photo", value: "E-Photo" },
    { label: "E-Video", value: "E-Video" },
    { label: "E-Card", value: "E-Card" },
   ]

  //invitation ends
  //decoration start

  const [decorationvalue, setdecorationvalue] = useState("");
  const handleOnchangedecoration = (val) => {
    setdecorationvalue(val);
  };
  const decorationoptions = [
    // { label:  'Regular Decoration', value:  'Regular Decoration'  },
    {
      label: "Artificial Flowers Decoration",
      value: "Artificial Flowers Decoration",
    },
    { label: "Indoor Decoration", value: "Indoor Decoration" },
    { label: "Outdoor Decoration", value: "Outdoor Decoration" },
    { label: "Lightning Decoration", value: "Lightning Decoration" },
  ];

  //decoration ends

  //Catering start
  const [foodvalue, setfoodvalue] = useState("");
  const handlefoodchange = (val) => {
    setfoodvalue(val);
  };
  const foodtypes = [
    { label: "North Indian", value: "North Indian" },
    { label: "South Indian", value: "South Indian" },
    { label: "Chats", value: "Chats" },
    { label: "Chinese", value: "Chinese" },
    { label: "Korean", value: "Korean" },
    { label: "Mexican", value: "Mexican" },
    { label: "Italian", value: "Italian" },
    { label: "French", value: "French" },
    { label: "Japanese", value: "Japanese" },
    { label: "Russian", value: "Russian" },
    { label: "Spanish", value: "Spanish" },
  ];

  //catering ends

  const [checkedMusic, setCheckedMusic] = useState(false);
  const [checkedDance, setCheckedDance] = useState(false);
  const [checkedVenue, setCheckedVenue] = useState(false);
  const [checkedDecoration, setCheckedDecoration] = useState(false);
  const [checkedRegulardecoration, setcheckedRegulardecoration] = useState(false);
  const [checkedInvitation, setCheckedInvitation] = useState(false)
  const [checkedPhotography, setCheckedPhotography] = useState(false)

  return (
    <section class="h-50">
      <div class="container py-5 h-50">
        <div class="row d-flex justify-content-center align-items-center h-50">
          <div class="col-md-11">
            <div class="card shadow-5-strong bdyCard card-registration my-4">
              <div class="row g-0">
                <div class="col-xl-6  d-none d-xl-block">
                  {/* <!-- Gallery --> */}
                  <div className="card example-1 mt-1 scrollbar-ripe-malinka">
                    <div class="row">
                      <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
                        <img
                          src="https://bit.ly/3o6TYiy"
                          class="w-100 shadow-4-strong rounded mb-4"
                          alt="Boat on Calm Water"
                        />

                        <img
                          src="https://bit.ly/3z90bkq"
                          class="w-100 shadow-4-strong rounded mb-4"
                          alt="Wintry Mountain Landscape"
                        />
                      </div>

                      <div class="col-lg-4 mb-4 mb-lg-0">
                        <img
                          src="https://bit.ly/3ob4tkS"
                          class="w-100 shadow-4-strong rounded mb-4"
                          alt="Mountains in the Clouds"
                        />

                        <img
                          src="https://bit.ly/3o6TYiy"
                          class="w-100 shadow-4-strong rounded mb-4"
                          alt="Boat on Calm Water"
                        />
                      </div>

                      <div class="col-lg-4 mb-4 mb-lg-0">
                        <img
                          src="https://bit.ly/3PgTfar"
                          class="w-100 shadow-4-strong rounded mb-4"
                          alt="Waves at Sea"
                        />

                        <img
                          src="https://bit.ly/3ceNueN"
                          class="w-100 shadow-4-strong rounded mb-4"
                          alt="Yosemite National Park"
                        />
                      </div>
                    </div>
                    {/* <div class="row">
                      <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
                        <img
                          src="https://bit.ly/3o6TYiy"
                          class="w-100 shadow-4-strong rounded mb-4"
                          alt="Boat on Calm Water"
                        />

                        <img
                          src="https://bit.ly/3z90bkq"
                          class="w-100 shadow-4-strong rounded mb-4"
                          alt="Wintry Mountain Landscape"
                        />
                      </div>

                      <div class="col-lg-4 mb-4 mb-lg-0">
                        <img
                          src="https://bit.ly/3ob4tkS"
                          class="w-100 shadow-4-strong rounded mb-4"
                          alt="Mountains in the Clouds"
                        />

                        <img
                          src="https://bit.ly/3o6TYiy"
                          class="w-100 shadow-4-strong rounded mb-4"
                          alt="Boat on Calm Water"
                        />
                      </div>

                      <div class="col-lg-4 mb-4 mb-lg-0">
                        <img
                          src="https://bit.ly/3PgTfar"
                          class="w-100 shadow-4-strong rounded mb-4"
                          alt="Waves at Sea"
                        />

                        <img
                          src="https://bit.ly/3ceNueN"
                          class="w-100 shadow-4-strong rounded mb-4"
                          alt="Yosemite National Park"
                        />
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
                        <img
                          src="https://bit.ly/3o6TYiy"
                          class="w-100 shadow-4-strong rounded mb-4"
                          alt="Boat on Calm Water"
                        />

                        <img
                          src="https://bit.ly/3z90bkq"
                          class="w-100 shadow-4-strong rounded mb-4"
                          alt="Wintry Mountain Landscape"
                        />
                      </div>

                      <div class="col-lg-4 mb-4 mb-lg-0">
                        <img
                          src="https://bit.ly/3ob4tkS"
                          class="w-100 shadow-4-strong rounded mb-4"
                          alt="Mountains in the Clouds"
                        />

                        <img
                          src="https://bit.ly/3o6TYiy"
                          class="w-100 shadow-4-strong rounded mb-4"
                          alt="Boat on Calm Water"
                        />
                      </div>

                      <div class="col-lg-4 mb-4 mb-lg-0">
                        <img
                          src="https://bit.ly/3PgTfar"
                          class="w-100 shadow-4-strong rounded mb-4"
                          alt="Waves at Sea"
                        />

                        <img
                          src="https://bit.ly/3ceNueN"
                          class="w-100 shadow-4-strong rounded mb-4"
                          alt="Yosemite National Park"
                        />
                      </div>
                    </div> */}
                    <div class="row">
                      <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
                        <img
                          src="https://bit.ly/3o6TYiy"
                          class="w-100 shadow-4-strong rounded mb-4"
                          alt="Boat on Calm Water"
                        />

                        <img
                          src="https://bit.ly/3z90bkq"
                          class="w-100 shadow-4-strong rounded mb-4"
                          alt="Wintry Mountain Landscape"
                        />
                      </div>

                      <div class="col-lg-4 mb-4 mb-lg-0">
                        <img
                          src="https://bit.ly/3ob4tkS"
                          class="w-100 shadow-4-strong rounded mb-4"
                          alt="Mountains in the Clouds"
                        />

                        <img
                          src="https://bit.ly/3o6TYiy"
                          class="w-100 shadow-4-strong rounded mb-4"
                          alt="Boat on Calm Water"
                        />
                      </div>

                      <div class="col-lg-4 mb-4 mb-lg-0">
                        <img
                          src="https://bit.ly/3PgTfar"
                          class="w-100 shadow-4-strong rounded mb-4"
                          alt="Waves at Sea"
                        />

                        <img
                          src="https://bit.ly/3ceNueN"
                          class="w-100 shadow-4-strong rounded mb-4"
                          alt="Yosemite National Park"
                        />
                      </div>
                    </div>
                  </div>
                  {/* <!-- Gallery --> */}
                </div>
                <div class="col-xl-6">
                  <div class="card-body bg-indigo p-md-5 text-dark fw-bolder rounded">
                    <h3 class="mb-5 text-center fw-bold text-uppercase">
                      Personal Details
                    </h3>

                    <div class="row">
                      <div class="col-md-6 mb-4">
                        <div class="form-floating mb-3">
                          <input
                            type="text"
                            class="form-control"
                            id="floatingInput"
                            placeholder="Name"
                          />
                          <label for="floatingInput">
                            {" "}
                         Client Name
                          </label>
                        </div>
                      </div>
                      <div class="col-md-6 mb-4">
                        <div class="form-floating mb-3">
                          <input
                            type="text"
                            class="form-control"
                            id="floatingInput"
                            placeholder="Name"
                          />
                          <label for="floatingInput">
                            {" "}
                         Bride Name
                          </label>
                        </div>
                      </div>
                      <div class="col-md-6 mb-4">
                        <div class="form-floating mb-3">
                          <input
                            type="text"
                            class="form-control"
                            id="floatingInput"
                            placeholder="Name"
                          />
                          <label for="floatingInput">
                            {" "}
                         Groom Name
                          </label>
                        </div>
                      </div>
                      <div class="col-md-6 mb-4">
                        <div class="form-floating mb-3">
                          <input
                            type="date"
                            class="form-control"
                            id="floatingInput"
                            placeholder="Date"
                          />
                          <label for="floatingInput">Date</label>
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-6 mb-4">
                        <div class="form-floating mb-3">
                          <input
                            type="date"
                            class="form-control"
                            id="floatingInput"
                            placeholder="From"
                          />
                          <label for="floatingInput">From</label>
                        </div>
                      </div>
                      <div class="col-md-6 mb-4">
                        <div class="form-floating mb-3">
                          <input
                            type="date"
                            class="form-control"
                            id="floatingInput"
                            placeholder="To"
                          />
                          <label for="floatingInput">To</label>
                        </div>
                      </div>
                    </div>

                    <div class="form-floating mb-4">
                      <input
                        type="city"
                        class="form-control"
                        id="floatingInput"
                        placeholder="address"
                      />
                      <label for="floatingInput">City</label>
                    </div>
                    <div class="col-md-6 mb-4">
                      <div class="form-floating mb-3">
                        <input
                          type="number"
                          class="form-control"
                          id="floatingInput"
                          placeholder="To"
                        />
                        <label for="floatingInput">No of Guests</label>
                      </div>
                    </div>

                    {/* <div class="btn-group mb-4">
                      <input
                        type="radio"
                        class="btn-check"
                        name="options"
                        id="option1"
                        autocomplete="off"
                        disabled
                      />
                      <label class="btn btn-warning" for="option1">
                        Person
                      </label>
                      <input
                        type="radio"
                        class="btn-check"
                        name="options"
                        id="option11"
                        autocomplete="off"
                      />
                      <label class="btn btn-primary" for="option11">
                        Groom
                      </label>
                      <input
                        type="radio"
                        class="btn-check"
                        name="options"
                        id="option2"
                        autocomplete="off"
                      />
                      <label class="btn btn-primary" for="option2">
                        Bride
                      </label>

                      {/* <input
                        type="radio"
                        class="btn-check"
                        name="options"
                        id="option3"
                        autocomplete="off"
                      />
                      <label class="btn btn-primary" for="option3">
                        Others
                      </label> */}
                    {/* </div>  */}
                    {/* <div class="row">
                      <div class="col-md-6 mb-4">
                        <div class="form-floating mb-3">
                          <input
                            type="number"
                            class="form-control"
                            id="floatingInput"
                            placeholder="To"
                          />
                          <label for="floatingInput">Age</label>
                        </div>
                      </div>
                      <div class="col-md-6 mb-4">
                        <div class="form-floating mb-3">
                          <input
                            type="number"
                            class="form-control"
                            id="floatingInput"
                            placeholder="To"
                          />
                          <label for="floatingInput">No of Guests</label>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6 mb-4">
                        <div class="form-floating mb-3">
                          <input
                            type="date"
                            class="form-control"
                            id="floatingInput"
                            placeholder="To"
                          />
                          <label for="floatingInput">Bachelors Party Date</label>
                        </div>
                      </div>
                      <div class="col-md-6 mb-4">
                        <div class="form-floating mb-3">
                          <input
                            type="date"
                            class="form-control"
                            id="floatingInput"
                            placeholder="To"
                          />
                          <label for="floatingInput">Shooting Date</label>
                        </div>
                      </div>
                    </div> */}
                    <div class="row"></div>

                    <div class="d-flex justify-content-end pt-3">
                      <button type="button" class="btn btn-info btn-lg ms-2 ">
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container my-5">
        <div class="card">
          <form>
            <div class="card-header py-4 px-5 bg-light border-0">
              <h4 class="mb-0 fw-bold">Post Wedding Booking</h4>
            </div>

            <div class="card-body px-5">
              <div class="row gx-xl-5">
                <div class="col-md-3">
                  <h4><strong>Muh dikhai :</strong></h4>
                </div>

                <div class="col-md-9">
                  <div class="row"></div>

                  <div class="row">
                    <div class="col-md-4">
                      <div class="mb-3">
                        <label
                          for="Sangeet choregraphy"
                          class="form-check-label"
                          value=""
                          style={{ marginRight: "15px" }}
                        >
                          Sangeet choregraphy{" "}
                        </label>
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="Sangeet choregraphy"
                        />
                      </div>
                    </div>
                    {/* <div class="col-md-3">
                      <div class="mb-3">
                        <label
                          for="Catering"
                          class="form-check-label"
                          value=""
                          style={{ marginRight: "15px" }}
                        >
                          Catering{" "}
                        </label>
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="Catering"
                        />
                      </div>
                    </div> */}
                    <div class="col-md-4">
                      <div class="mb-3">
                        <label
                          for="venue"
                          class="form-check-label"
                          value=""
                          style={{ marginRight: "15px" }}
                        >
                          Venue{" "}
                        </label>
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="venue"
                          checked={checkedVenue}
                          onChange={() => {
                            setCheckedVenue(!checkedVenue);
                          }}
                        />
                      </div>
                    </div>
                    {/* <div class="col-md-3">
                      <div class="mb-3">
                        <label
                          for="music"
                          class="form-check-label"
                          value=""
                          style={{ marginRight: "15px" }}
                        >
                          Music{" "}
                        </label>
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="music"
                          checked={checkedMusic}
                          onChange={() => {
                            setCheckedMusic(!checkedMusic);
                          }}
                        />
                      </div>
                    </div> */}
                    <div class="col-md-4">
                      <div class="mb-3">
                        <label
                          for="dance"
                          class="form-check-label"
                          value=""
                          style={{ marginRight: "15px" }}
                        >
                          Dance{" "}
                        </label>
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="dance"
                          checked={checkedDance}
                          onChange={() => {
                            setCheckedDance(!checkedDance);
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* {checkedMusic && (
                    <div class="row">
                      <div class="mb-3">
                        <div className="preview-values">
                          <h5>
                            <strong>Live Music</strong>
                          </h5>
                          {musicvalue}
                        </div>

                        <MultiSelect
                          onChange={handlemusicchange}
                          options={optionsmusic}
                        />
                      </div> */}

                      {/* <div class="col-md-3">
                        <div class="mb-3">
                          <label
                            for="dj"
                            class="form-check-label"
                            value=""
                            style={{ marginRight: "15px" }}
                          >
                            DJ{" "}
                          </label>
                          <input
                            type="checkbox"
                            class="form-check-input"
                            id="dj"
                          />
                        </div>
                      </div> */}
                    {/* </div>
                  )} */}

                  {checkedDance && (
                    <div>
                      <div className="preview-values">
                        <h5>
                          <strong>Dance</strong>
                        </h5>
                        {value}
                      </div>

                      <MultiSelect
                        onChange={handleOnchange}
                        options={options}
                      />
                    </div>
                  )}
                  <br></br>
                  {checkedVenue && (
                    <div>
                      <div class="row">
                        <div class="col-md-6">
                          <div class="mb-3">
                            <label for="exampleInput1" class="form-label">
                              <strong>Venue 1 Name</strong>{" "}
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              id="exampleInput1"
                              style={{ maxWidth: "500px" }}
                            />
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="mb-3">
                            <label for="exampleInput1" class="form-label">
                              <strong>Venue 1 place</strong>
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              id="exampleInput1"
                              style={{ maxWidth: "500px" }}
                            />
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-6">
                          <div class="mb-3">
                            <label for="exampleInput1" class="form-label">
                              <strong>Venue 2 Name</strong>
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              id="exampleInput1"
                              style={{ maxWidth: "500px" }}
                            />
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="mb-3">
                            <label for="exampleInput1" class="form-label">
                              <strong>Venue 2 place</strong>
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              id="exampleInput1"
                              style={{ maxWidth: "500px" }}
                            />
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-6">
                          <div class="mb-3">
                            <label for="exampleInput1" class="form-label">
                              <strong>Venue 3 Name</strong>
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              id="exampleInput1"
                              style={{ maxWidth: "500px" }}
                            />
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="mb-3">
                            <label for="exampleInput1" class="form-label">
                              <strong>Venue 3 place</strong>
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              id="exampleInput1"
                              style={{ maxWidth: "500px" }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}  
                </div>
              </div>
              <br></br>
              <div class="row gx-xl-5">
                <div class="col-md-3">
                  <h4><strong>Catering :</strong></h4>
                </div>

                <div class="col-md-9">
                  <div class="row">
                    <div class="col-md-4">
                      <div class="mb-3">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault"
                          />

                          <label
                            class="form-check-label"
                            for="flexRadioDefault"
                          >
                            {" "}
                            Veg{" "}
                          </label>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="mb-3">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />

                          <label
                            class="form-check-label"
                            for="flexRadioDefault1"
                          >
                            Non-Veg{" "}
                          </label>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="mb-3">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault2"
                          />

                          <label
                            class="form-check-label"
                            for="flexRadioDefault2"
                          >
                            {" "}
                            Jain{" "}
                          </label>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="preview-values">
                        <h5>
                          <strong>Food Type</strong>{" "}
                        </h5>
                        {foodvalue}
                      </div>

                      <MultiSelect
                        onChange={handlefoodchange}
                        options={foodtypes}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <hr class="my-5" />

              {/* Decoration section */}

              {/* <div class="row gx-xl-5">
                <div class="col-md-3">
                  <h4><strong>Shooting :</strong></h4>
                </div> */}

                {/* <div class="col-md-9">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="mb-3">
                        <br />
                        <label
                          for="regulardecoration"
                          class="form-check-label"
                          value=""
                          style={{ marginRight: "15px" }}
                        >
                          Regular Decoration{" "}
                        </label>
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="regulardecoration"
                          checked={checkedRegulardecoration}
                          onChange={() => {
                            setcheckedRegulardecoration(
                              !checkedRegulardecoration
                            );
                          }}
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="mb-3">
                        <br />
                        <label
                          for="decoration"
                          class="form-check-label"
                          value=""
                          style={{ marginRight: "15px" }}
                        >
                          Theme Decoration{" "}
                        </label>
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="decoration"
                          checked={checkedDecoration}
                          onChange={() => {
                            setCheckedDecoration(!checkedDecoration);
                          }}
                        />
                      </div>
                    </div> */}
{/* 
                    {checkedRegulardecoration && (
                      <div class="col-md-6">
                        <div class="mb-3">
                          <div className="preview-values">
                            <h5><strong>Decoration</strong></h5>
                            {decorationvalue}
                          </div>

                          <MultiSelect
                            onChange={handleOnchangedecoration}
                            options={decorationoptions}
                          />
                        </div>
                      </div>
                    )} */}
                    {/* {checkedDecoration && (
                      <div class="col-md-6">
                        <div class="mb-3">
                          <label for="exampleInput5" class="form-label"></label>
                          <select
                            id="exampleInput5"
                            class="form-select mb-3"
                            aria-label="Default select example"
                          >
                            <option selected value="1">
                              Ballon Decoration
                            </option>
                            <option value="2">Candy Decoration</option>
                            <option value="3">Cartoon Decoration</option>
                            <option value="4">Jungle Party Decoration</option>
                          </select>
                        </div>
                      </div>
                    )} */}
                  {/* </div>
                </div>
              </div> */}

              {/* Decoration section end  */}

              {/* <hr class="my-5" /> */}

              {/* catering start */}

             

              {/* catering ends  */}


              {/* other events start */}

              <div class="row gx-xl-5">
                <div class="col-md-3">
                  <h4><strong>Subaarambh Yatra :</strong></h4>
                </div>

                <div class="col-md-9">
                  <div class="row">
                  <div class="col-md-3">
                      <div class="mb-3">
                        <label
                          for="decoratedcar"
                          class="form-check-label"
                          value=""
                          style={{ marginRight: "15px" }}
                        >
                          Decorated Car{" "}
                        </label>
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="decoratedcar"
                        />
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="mb-3">
                        <label
                          for="decoratedcart"
                          class="form-check-label"
                          value=""
                          style={{ marginRight: "15px" }}
                        >
                          Decorated Cart{" "}
                        </label>
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="decoratedcart"
                        />
                      </div>
                    </div>
                    {/* <div class="col-md-3">
                      <div class="mb-3">
                        <label
                          for="indoor"
                          class="form-check-label"
                          value=""
                          style={{ marginRight: "15px" }}
                        >
                          Indoor{" "}
                        </label>
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="indoor"
                        />
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="mb-3">
                        <label
                          for="outdoor"
                          class="form-check-label"
                          value=""
                          style={{ marginRight: "15px" }}
                        >
                          Outdoor{" "}
                        </label>
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="outdoor"
                        />
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="mb-3">
                        <label
                          for="beauty"
                          class="form-check-label"
                          value=""
                          style={{ marginRight: "15px" }}
                        >
                          Beauty{" "}
                        </label>
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="beauty"
                        />
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="mb-3">
                        <label
                          for="food"
                          class="form-check-label"
                          value=""
                          style={{ marginRight: "15px" }}
                        >
                         Food arrangement during shooting{" "}
                        </label>
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="food"
                        />
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="mb-3">
                        <label
                          for="transport"
                          class="form-check-label"
                          value=""
                          style={{ marginRight: "15px" }}
                        >
                          Transport during shooting{" "}
                        </label>
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="transport"
                        />
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="mb-3">
                        <label
                          for="accomodation"
                          class="form-check-label"
                          value=""
                          style={{ marginRight: "15px" }}
                        >
                    Accomodation during shooting{" "}
                        </label>
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="accomodation"
                        />
                      </div>
                    </div> */}
                    
                    {/* <div class="col-md-3">
                      <div class="mb-3">
                        <label
                          for="venue"
                          class="form-check-label"
                          value=" "
                          style={{ marginRight: "15px" }}
                        >
                          Venue{" "}
                        </label>
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="venue"
                          checked={checkedVenue}
                          onChange={() => {
                            setCheckedVenue(!checkedVenue);
                          }}
                        />
                      </div>
                    </div> */}
                    {/* <div class="col-md-3">
                      <div class="mb-3">
                        <label
                          for="photography"
                          class="form-check-label"
                          value=" "
                          style={{ marginRight: "15px" }}
                        >
                          Photography{" "}
                        </label>
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="photography"
                          checked={checkedPhotography}
                          onChange={() => {
                            setCheckedPhotography(!checkedPhotography);
                          }}
                        />
                      </div>
                    </div> */}
                  </div>

                  {/* venue options start */}
                 {/* { checkedInvitation && (
                  
                  <div>
                  
                     
                      <div class="col-md-6">
                          <div class="mb-3">
                            <label for="exampleInput1" class="form-label">
                              <strong>Destination Places</strong>
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              id="exampleInput1"
                              style={{ maxWidth: "500px" }}
                            />
                          </div>
                        </div>
                      </div>
                    
                 )} */}
                  <br></br>
                  {/* {checkedVenue && (
                    <div>
                      <div class="row">
                        <div class="col-md-6">
                          <div class="mb-3">
                            <label for="exampleInput1" class="form-label">
                              <strong>Venue 1 Name</strong>{" "}
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              id="exampleInput1"
                              style={{ maxWidth: "500px" }}
                            />
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="mb-3">
                            <label for="exampleInput1" class="form-label">
                              <strong>Venue 1 place</strong>
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              id="exampleInput1"
                              style={{ maxWidth: "500px" }}
                            />
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-6">
                          <div class="mb-3">
                            <label for="exampleInput1" class="form-label">
                              <strong>Venue 2 Name</strong>
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              id="exampleInput1"
                              style={{ maxWidth: "500px" }}
                            />
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="mb-3">
                            <label for="exampleInput1" class="form-label">
                              <strong>Venue 2 place</strong>
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              id="exampleInput1"
                              style={{ maxWidth: "500px" }}
                            />
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-6">
                          <div class="mb-3">
                            <label for="exampleInput1" class="form-label">
                              <strong>Venue 3 Name</strong>
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              id="exampleInput1"
                              style={{ maxWidth: "500px" }}
                            />
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="mb-3">
                            <label for="exampleInput1" class="form-label">
                              <strong>Venue 3 place</strong>
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              id="exampleInput1"
                              style={{ maxWidth: "500px" }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )} */}

                  {/* venue option end */}
                  {/* { checkedPhotography && (
                  <div>
                    <div className="preview-values">
                      <h5>
                        <strong>Photography</strong>
                      </h5>
                      {photovalue}
                    </div>

                    <MultiSelect
                      onChange={handlePhotoChange}
                      options={PhotoOptions}
                    />
                  </div>
                  )} */}
                </div>
                  
              </div>
              <hr class="my-5" />

              {/* other events start */}

              <div class="row gx-xl-5">
                <div class="col-md-3">
                  <h4><strong>Honney Moon :</strong></h4>
                </div>

                <div class="col-md-9">
                  <div class="row">
                    <div class="col-md-3">
                      <div class="mb-3">
                        <label
                          for="invitation"
                          class="form-check-label"
                          value=""
                          style={{ marginRight: "15px" }}
                        >
                          Destination{" "}
                        </label>
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="invitation"
                          checked={checkedInvitation}
                          onChange={() => {
                            setCheckedInvitation(!checkedInvitation);
                          }}
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                          <div class="mb-3">
                            <label for="exampleInput1" class="form-label">
                            <h5><strong>Number of days Stay</strong></h5>
                            </label>
                            <input
                              type="number"
                              class="form-control"
                              id="exampleInput1"
                              style={{ maxWidth: "500px" }}
                            />
                          </div>
                        </div>
                    {/* <div class="col-md-3">
                      <div class="mb-3">
                        <label
                          for="filmcity"
                          class="form-check-label"
                          value=""
                          style={{ marginRight: "15px" }}
                        >
                          Film city{" "}
                        </label>
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="filmcity"
                        />
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="mb-3">
                        <label
                          for="indoor"
                          class="form-check-label"
                          value=""
                          style={{ marginRight: "15px" }}
                        >
                          Indoor{" "}
                        </label>
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="indoor"
                        />
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="mb-3">
                        <label
                          for="outdoor"
                          class="form-check-label"
                          value=""
                          style={{ marginRight: "15px" }}
                        >
                          Outdoor{" "}
                        </label>
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="outdoor"
                        />
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="mb-3">
                        <label
                          for="beauty"
                          class="form-check-label"
                          value=""
                          style={{ marginRight: "15px" }}
                        >
                          Beauty{" "}
                        </label>
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="beauty"
                        />
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="mb-3">
                        <label
                          for="food"
                          class="form-check-label"
                          value=""
                          style={{ marginRight: "15px" }}
                        >
                         Food arrangement during shooting{" "}
                        </label>
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="food"
                        />
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="mb-3">
                        <label
                          for="transport"
                          class="form-check-label"
                          value=""
                          style={{ marginRight: "15px" }}
                        >
                          Transport during shooting{" "}
                        </label>
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="transport"
                        />
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="mb-3">
                        <label
                          for="accomodation"
                          class="form-check-label"
                          value=""
                          style={{ marginRight: "15px" }}
                        >
                    Accomodation during shooting{" "}
                        </label>
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="accomodation"
                        />
                      </div>
                    </div>
                     */}
                    {/* <div class="col-md-3">
                      <div class="mb-3">
                        <label
                          for="venue"
                          class="form-check-label"
                          value=" "
                          style={{ marginRight: "15px" }}
                        >
                          Venue{" "}
                        </label>
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="venue"
                          checked={checkedVenue}
                          onChange={() => {
                            setCheckedVenue(!checkedVenue);
                          }}
                        />
                      </div>
                    </div> */}
                    {/* <div class="col-md-3">
                      <div class="mb-3">
                        <label
                          for="photography"
                          class="form-check-label"
                          value=" "
                          style={{ marginRight: "15px" }}
                        >
                          Photography{" "}
                        </label>
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="photography"
                          checked={checkedPhotography}
                          onChange={() => {
                            setCheckedPhotography(!checkedPhotography);
                          }}
                        />
                      </div>
                    </div> */}
                  </div>

                  {/* venue options start */}
                 { checkedInvitation && (
                  
                  <div>
                  
                      {/* <div className="preview-values">
                        <h5>
                          <strong>Invitation</strong>{" "}
                        </h5>
                        {invitationvalue}
                      </div>

                      <MultiSelect
                        onChange={handleinvitation}
                        options={invitationtypes}
                      /> */}
                      <div class="col-md-6">
                          <div class="mb-3">
                            <label for="india" class="form-label">
                              <h5><strong>India</strong></h5>
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              id="india"
                              style={{ maxWidth: "500px" }}
                            />
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="mb-3">
                            <label for="abroad" class="form-label">
                            <h5><strong>Abroad</strong></h5>
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              id="abroad"
                              style={{ maxWidth: "500px" }}
                            />
                          </div>
                        </div>
                      </div>
                    
                 )}
                  {/* <br></br>
                  {checkedVenue && (
                    <div>
                      <div class="row">
                        <div class="col-md-6">
                          <div class="mb-3">
                            <label for="exampleInput1" class="form-label">
                              <strong>Venue 1 Name</strong>{" "}
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              id="exampleInput1"
                              style={{ maxWidth: "500px" }}
                            />
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="mb-3">
                            <label for="exampleInput1" class="form-label">
                              <strong>Venue 1 place</strong>
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              id="exampleInput1"
                              style={{ maxWidth: "500px" }}
                            />
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-6">
                          <div class="mb-3">
                            <label for="exampleInput1" class="form-label">
                              <strong>Venue 2 Name</strong>
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              id="exampleInput1"
                              style={{ maxWidth: "500px" }}
                            />
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="mb-3">
                            <label for="exampleInput1" class="form-label">
                              <strong>Venue 2 place</strong>
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              id="exampleInput1"
                              style={{ maxWidth: "500px" }}
                            />
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-6">
                          <div class="mb-3">
                            <label for="exampleInput1" class="form-label">
                              <strong>Venue 3 Name</strong>
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              id="exampleInput1"
                              style={{ maxWidth: "500px" }}
                            />
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="mb-3">
                            <label for="exampleInput1" class="form-label">
                              <strong>Venue 3 place</strong>
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              id="exampleInput1"
                              style={{ maxWidth: "500px" }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )} */}

                  {/* venue option end */}
                  { checkedPhotography && (
                  <div>
                    <div className="preview-values">
                      <h5>
                        <strong>Photography</strong>
                      </h5>
                      {photovalue}
                    </div>

                    <MultiSelect
                      onChange={handlePhotoChange}
                      options={PhotoOptions}
                    />
                  </div>
                  )}
                </div>
                  
              </div>

              {/* other events end */}

              <hr class="my-5" />

              <div class="row gx-xl-5">
                <div class="col-md-3">
                  <h4><strong>Estimate Budget :</strong> </h4>
                </div>

                <div class="col-md-9">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="mb-3">
                        <label for="exampleInput11" class="form-label">
                          Minimun
                        </label>
                        <input
                          type="number"
                          class="form-control"
                          id="exampleInput11"
                        />
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="mb-3">
                        <label for="exampleInput12" class="form-label">
                          Maximum
                        </label>
                        <input
                          type="number"
                          class="form-control"
                          id="exampleInput12"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr class="my-5" />

              <div class="row gx-xl-5">
                <div class="col-md-4">
                  <h4><strong>Special Service :</strong> </h4>
                  <p>Any additional service you expect from us that may be mentioned here :</p>
                  
                  
                </div>

                <div class="col-md-8">
                  <div class="row">
                    <div class="col-md-12">
                      <div class="mb-3">
                        <label for="exampleInput11" class="form-label">
                         
                        </label>
                        <textarea
                          type="number"
                          class="form-control"
                          id="exampleInput11"
                        />
                      </div>
                    </div>

                   
                  </div>
                </div>
              </div>
              {/* <hr class="my-2" /> */}
                  <h3><strong>Note : </strong></h3>
                  <h4><strong style={{color:"red"}}> Once the form is submitted now.Our customer 
                  representative will contact you within 12-24 hours to discuss in more detail.
                  </strong></h4>

            </div>
           

            <div class="card-footer text-end py-4 px-5 bg-light border-0">
              <button
                class="btn btn-link btn-rounded"
                data-ripple-color="primary"
              >
                Cancel
              </button>
              <button type="submit" class="btn btn-primary btn-rounded">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default PostweddingForm;

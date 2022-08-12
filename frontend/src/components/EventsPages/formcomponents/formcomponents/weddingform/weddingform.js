import React from 'react'
import MultiSelect from "react-multiple-select-dropdown-lite";
import "react-multiple-select-dropdown-lite/dist/index.css";
import { useState } from "react";


function Weddingform() {
    const [value, setvalue] = useState("");
    const handleOnchange = (val) => {
      setvalue(val);
    };
    const options = [
      { label: "Folk", value: "Folk" },
      { label: "Indian", value: "Indian" },
      { label: "Western", value: "Western" },
    ];
    // dance option end
  
    // music options start
    const [musicvalue, setmusicvalue] = useState("");
    const handlemusicchange = (val) => {
      setmusicvalue(val);
    };
  
    //music options end
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
    { label: "Real Flower Decoration", value: "Real Flower Decoration" },
  ];

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
  
    //Beauty start 
     const [checkedBeauty, setCheckedBeauty] =useState("");
     const handleBeauty = (val)=>{
      setCheckedBeauty(val)
     };
     const beautyoptions = [
      { label: "Bride", value: "Bride" },
      { label: "Groom", value: "Groom" },
      { label: "Family", value: "Family" },
     ]
  
    // Beauty ends
  
    // Mehandi starts
    const [checkedMehandi, setCheckedMehandi] =useState("");
    const handleMehandi = (val)=>{
     setCheckedMehandi(val)
    };
    const mehandioptions = [
     { label: "Bride", value: "Bride" },
     { label: "Groom", value: "Groom" },
     { label: "Family", value: "Family" },
    ]
    //mehandi ends
  
    //decoration start
  
    const [Conceptweddingvalue, setConceptweddingvalue] = useState("");
    const handleOnchangeConceptwedding = (val) => {
      setConceptweddingvalue(val);
    };
    const Conceptweddingoptions = [
      // { label:  'Regular Decoration', value:  'Regular Decoration'  },
      {
        label: "Kesar kashmir wedding",
        value: "Kesar kashmir wedding",
      },
      { label: "Himalayan Wedding", value: "Himalayan Wedding" },
      { label: "Dev Bhoomi Wedding", value: "Dev Bhoomi Wedding" },
      { label: "Dil Delhi Wedding", value: "Dil Delhi Wedding" },
      { label: "Hara Haryanvi Wedding", value: "Hara Haryanvi Wedding" },
      { label: "Royal Rajasthan Wedding", value: "Royal Rajasthan Wedding" },
      { label: "Gulzar Gujrati Wedding", value: "Gulzar Gujrati Wedding" },
      { label: "Banarasi Wedding", value: "Banarasi Wedding" },
      { label: "Paaji Punjabi Wedding", value: "Paaji Punjabi Wedding" },
      { label: "Bulbul Bihari Wedding  ", value: "Bulbul Bihari Wedding " },

      { label: "Eastern Indian style Wedding", value: "Eastern Indian style Wedding" },
      { label: "Blue Bengali Wedding ", value: "Blue Bengali Wedding " },
      { label: "Indori Wedding", value: "Indori Wedding" },
      { label: "Maharaja Marathi Wedding", value: "Maharaja Marathi Wedding" },
      { label: "Kanada Keen Wedding", value: "Kanada Keen Wedding" },
      { label: "Kerala Knot Wedding", value: "Kerala Knot Wedding" },
      { label: "Andhra Awesome Wedding", value: "Andhra Awesome Wedding" },
      { label: "Tamil transcendent Wedding", value: "Tamil transcendent Wedding" },
     

    ];
  
    //decoration ends
  
    const [Themeweddingvalue, setThemeweddingvalue] = useState("");
    const handleOnchangeThemewedding = (val) => {
      setThemeweddingvalue(val);
    };
    const Themeweddingoptions = [
      { label: "Royal Wedding", value: "Royal Wedding" },
      { label: "Fairy Tale Wedding", value: "Fairy Tale Wedding" },
      { label: " Green/Forest Wedding", value: " Green/Forest Wedding" },
      { label: " Beach  Wedding", value: " Beach  Wedding" },
      { label: " Real Flowers Wedding", value: " Real Flowers Wedding" },
      { label: "Artificial Flowers  Wedding", value: "Artificial Flowers  Wedding" },
      { label: "Indoor Wedding ", value: " Indoor Wedding" },
      { label: "  Outdoor Wedding", value: " Outdoor Wedding " },
      { label: " Seasonal Wedding", value: "Seasonal Wedding " },
      { label: "  Retro Wedding", value: " Retro Wedding " },
      { label: " Romantic Wedding", value: " Romantic Wedding" },
      { label: "Single Colour theme Wedding ", value: "Single Colour theme Wedding " },
      { label: "Multi Colour theme Wedding ", value: "Multi Colour theme Wedding " },
      { label: "Historical  Wedding ", value: "Historical  Wedding " },
      { label: "Dessert style Wedding ", value: " Dessert style Wedding" },
      { label: " Musical theme Wedding", value: " Musical theme Wedding" },
      { label: " Cultural Wedding", value: "Cultural Wedding " },
      
    ]


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
    const [checkedHaldi, setCheckedHaldi] = useState(false);
    const [checkedMehandishow, setCheckedMehandishow] = useState(false);
    const [checkedSangeet, setCheckedSangeet] = useState(false);
    const [checkedPooja, setCheckedPooja] = useState(false);
    const [checkedReception, setCheckedReception] = useState(false);
    const [checkedPhera, setCheckedPhera] = useState(false);
    const [checkedBaraat, setCheckedBaraat] = useState(false);
    const [checkedTilak, setCheckedTilak] = useState(false);


    const [checkedMusic, setCheckedMusic] = useState(false);
    const [checkedDance, setCheckedDance] = useState(false);
    const [checkedVenue, setCheckedVenue] = useState(false);
    const [checkedWedding, setCheckedWedding] = useState(false);
  const [checkedDecoration, setCheckedDecoration] = useState(false);

    const [checkedRegulardecoration, setcheckedRegulardecoration] = useState(false);
    const [checkedInvitation, setCheckedInvitation] = useState(false)
    const [checkedPhotography, setCheckedPhotography] = useState(false)
    const [checkedConceptwedding, setcheckedConceptwedding] = useState(false);
 
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
                      Gender
                    </label>
                    <input
                      type="radio"
                      class="btn-check"
                      name="options"
                      id="option11"
                      autocomplete="off"
                    />
                    <label class="btn btn-primary" for="option11">
                      Male
                    </label>
                    <input
                      type="radio"
                      class="btn-check"
                      name="options"
                      id="option2"
                      autocomplete="off"
                    />
                    <label class="btn btn-primary" for="option2">
                      Female
                    </label>

                    <input
                      type="radio"
                      class="btn-check"
                      name="options"
                      id="option3"
                      autocomplete="off"
                    />
                    <label class="btn btn-primary" for="option3">
                      Others
                    </label>
                  </div> */}
                  <div class="row">
                    {/* <div class="col-md-6 mb-4">
                      <div class="form-floating mb-3">
                        <input
                          type="number"
                          class="form-control"
                          id="floatingInput"
                          placeholder="To"
                        />
                        <label for="floatingInput">Age</label>
                      </div>
                    </div> */}
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
              <h4 class="mb-0 fw-bold">Wedding Function Booking</h4>
            </div>

            <div class="card-body px-5">
              <div class="row gx-xl-5">
                <div class="col-md-3">
                  <h4><strong>Service :</strong></h4>
                </div>

                <div class="col-md-9">
                  <div class="row"></div>

                  <div class="row">
                    <div class="col-md-3">
                      <div class="mb-3">
                        <label
                          for="Mehandi"
                          class="form-check-label"
                          value=""
                          style={{ marginRight: "15px" }}
                        >
                          Mehandi{" "}
                        </label>
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="Mehandi"
                          checked={checkedMehandishow}
                          onChange={() => {
                            setCheckedMehandishow(!checkedMehandishow);
                          }}
                        />
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="mb-3">
                        <label
                          for="Sangeet"
                          class="form-check-label"
                          value=""
                          style={{ marginRight: "15px" }}
                        >
                          Sangeet{" "}
                        </label>
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="Sangeet"
                          checked={checkedSangeet}
                          onChange={() => {
                            setCheckedSangeet(!checkedSangeet);
                          }}
                        />
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="mb-3">
                        <label
                          for="Pooja"
                          class="form-check-label"
                          value=""
                          style={{ marginRight: "15px" }}
                        >
                          Pooja{" "}
                        </label>
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="Pooja"
                          checked={checkedPooja}
                          onChange={() => {
                            setCheckedPooja(!checkedPooja);
                          }}
                        />
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="mb-3">
                        <label
                          for="Baraat"
                          class="form-check-label"
                          value=""
                          style={{ marginRight: "15px" }}
                        >
                          Baraat{" "}
                        </label>
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="Baraat"
                          checked={checkedBaraat}
                          onChange={() => {
                            setCheckedBaraat(!checkedBaraat);
                          }}
                        />
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="mb-3">
                        <label
                          for="Reception"
                          class="form-check-label"
                          value=""
                          style={{ marginRight: "15px" }}
                        >
                          Reception{" "}
                        </label>
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="Reception"
                          checked={checkedReception}
                          onChange={() => {
                            setCheckedReception(!checkedReception);
                          }}
                        />
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="mb-3">
                        <label
                          for="Phera"
                          class="form-check-label"
                          value=""
                          style={{ marginRight: "15px" }}
                        >
                          Phera{" "}
                        </label>
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="Phera"
                          checked={checkedPhera}
                          onChange={() => {
                            setCheckedPhera(!checkedPhera);
                          }}
                        />
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="mb-3">
                        <label
                          for="Tilak"
                          class="form-check-label"
                          value=""
                          style={{ marginRight: "15px" }}
                        >
                          Tilak{" "}
                        </label>
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="Tilak"
                          checked={checkedTilak}
                          onChange={() => {
                            setCheckedTilak(!checkedTilak);
                          }}
                        />
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="mb-3">
                        <label
                          for="Haldi"
                          class="form-check-label"
                          value=""
                          style={{ marginRight: "15px" }}
                        >
                          Haldi{" "}
                        </label>
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="Haldi"
                          checked={checkedHaldi}
                          onChange={() => {
                            setCheckedHaldi(!checkedHaldi);
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  {checkedHaldi && (
                    <div class="row">
                    <div class="col-md-6">
                          <div class="mb-3">
                            <label for="datehaldi" class="form-label">
                              <strong>Date for Haldi</strong>{" "}
                            </label>
                            <input
                              type="date"
                              class="form-control"
                              id="datehaldi"
                              style={{ maxWidth: "500px" }}
                            />
                          </div>
                        </div>

                        <div class="col-md-6">
                          <div class="mb-3">
                            <label for="timehaldi" class="form-label">
                              <strong>Time for Haldi</strong>{" "}
                            </label>
                            <input
                              type="time"
                              class="form-control"
                              id="timehaldi"
                              style={{ maxWidth: "500px" }}
                            />
                          </div>
                        </div>
                    </div>
                  )}
                  {checkedMehandishow && (
                    <div class="row">
                    <div class="col-md-6">
                          <div class="mb-3">
                            <label for="dateMehandishow" class="form-label">
                              <strong>Date for Mehandi</strong>{" "}
                            </label>
                            <input
                              type="date"
                              class="form-control"
                              id="dateMehandishow"
                              style={{ maxWidth: "500px" }}
                            />
                          </div>
                        </div>

                        <div class="col-md-6">
                          <div class="mb-3">
                            <label for="timeMehandishow" class="form-label">
                              <strong>Time for Mehandi</strong>{" "}
                            </label>
                            <input
                              type="time"
                              class="form-control"
                              id="timeMehandishow"
                              style={{ maxWidth: "500px" }}
                            />
                          </div>
                        </div>
                    </div>
                  )}
                  {checkedSangeet && (
                    <div class="row">
                    <div class="col-md-6">
                          <div class="mb-3">
                            <label for="dateSangeet" class="form-label">
                              <strong>Date for Sangeet</strong>{" "}
                            </label>
                            <input
                              type="date"
                              class="form-control"
                              id="dateSangeet"
                              style={{ maxWidth: "500px" }}
                            />
                          </div>
                        </div>

                        <div class="col-md-6">
                          <div class="mb-3">
                            <label for="timeSangeet" class="form-label">
                              <strong>Time for Sangeet</strong>{" "}
                            </label>
                            <input
                              type="time"
                              class="form-control"
                              id="timeSangeet"
                              style={{ maxWidth: "500px" }}
                            />
                          </div>
                        </div>
                    </div>
                  )}
                  {checkedPooja && (
                    <div class="row">
                    <div class="col-md-6">
                          <div class="mb-3">
                            <label for="datePooja" class="form-label">
                              <strong>Date for Pooja</strong>{" "}
                            </label>
                            <input
                              type="date"
                              class="form-control"
                              id="datePooja"
                              style={{ maxWidth: "500px" }}
                            />
                          </div>
                        </div>

                        <div class="col-md-6">
                          <div class="mb-3">
                            <label for="timePooja" class="form-label">
                              <strong>Time for Pooja</strong>{" "}
                            </label>
                            <input
                              type="time"
                              class="form-control"
                              id="timePooja"
                              style={{ maxWidth: "500px" }}
                            />
                          </div>
                        </div>
                    </div>
                  )}
                  {checkedBaraat && (
                    <div class="row">
                    <div class="col-md-6">
                          <div class="mb-3">
                            <label for="dateBaraat" class="form-label">
                              <strong>Date for Baraat</strong>{" "}
                            </label>
                            <input
                              type="date"
                              class="form-control"
                              id="dateBaraat"
                              style={{ maxWidth: "500px" }}
                            />
                          </div>
                        </div>

                        <div class="col-md-6">
                          <div class="mb-3">
                            <label for="timeBaraat" class="form-label">
                              <strong>Time for Baraat</strong>{" "}
                            </label>
                            <input
                              type="time"
                              class="form-control"
                              id="timeBaraat"
                              style={{ maxWidth: "500px" }}
                            />
                          </div>
                        </div>
                    </div>
                  )}
                  {checkedReception && (
                    <div class="row">
                    <div class="col-md-6">
                          <div class="mb-3">
                            <label for="dateReception" class="form-label">
                              <strong>Date for Reception</strong>{" "}
                            </label>
                            <input
                              type="date"
                              class="form-control"
                              id="dateReception"
                              style={{ maxWidth: "500px" }}
                            />
                          </div>
                        </div>

                        <div class="col-md-6">
                          <div class="mb-3">
                            <label for="timeReception" class="form-label">
                              <strong>Time for Reception</strong>{" "}
                            </label>
                            <input
                              type="time"
                              class="form-control"
                              id="timeReception"
                              style={{ maxWidth: "500px" }}
                            />
                          </div>
                        </div>
                    </div>
                  )}
                  {checkedPhera && (
                    <div class="row">
                    <div class="col-md-6">
                          <div class="mb-3">
                            <label for="datePhera" class="form-label">
                              <strong>Date for Phera</strong>{" "}
                            </label>
                            <input
                              type="date"
                              class="form-control"
                              id="datePhera"
                              style={{ maxWidth: "500px" }}
                            />
                          </div>
                        </div>

                        <div class="col-md-6">
                          <div class="mb-3">
                            <label for="timePhera" class="form-label">
                              <strong>Time for Phera</strong>{" "}
                            </label>
                            <input
                              type="time"
                              class="form-control"
                              id="timePhera"
                              style={{ maxWidth: "500px" }}
                            />
                          </div>
                        </div>
                    </div>
                  )}
                  {checkedTilak && (
                    <div class="row">
                    <div class="col-md-6">
                          <div class="mb-3">
                            <label for="dateTilak" class="form-label">
                              <strong>Date for Tilak</strong>{" "}
                            </label>
                            <input
                              type="date"
                              class="form-control"
                              id="dateTilak"
                              style={{ maxWidth: "500px" }}
                            />
                          </div>
                        </div>

                        <div class="col-md-6">
                          <div class="mb-3">
                            <label for="timeTilak" class="form-label">
                              <strong>Time for Tilak</strong>{" "}
                            </label>
                            <input
                              type="time"
                              class="form-control"
                              id="timeTilak"
                              style={{ maxWidth: "500px" }}
                            />
                          </div>
                        </div>
                    </div>
                  )}

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
                </div>
              </div>

              <hr class="my-5" />
              <div class="row gx-xl-5">
                <div class="col-md-3">
                  <h4><strong>Shows :</strong></h4>
                </div>

                <div class="col-md-9">
                  <div class="row"></div>

                  <div class="row">
                    {/* <div class="col-md-3">
                      <div class="mb-3">
                        <label
                          for="games"
                          class="form-check-label"
                          value=""
                          style={{ marginRight: "15px" }}
                        >
                          Games{" "}
                        </label>
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="games"
                        />
                      </div>
                    </div> */}
                    <div class="col-md-4">
                      <div class="mb-3">
                        <label
                          for="Sangeetchoreography"
                          class="form-check-label"
                          value=""
                          style={{ marginRight: "15px" }}
                        >
                          Sangeet Choreography{" "}
                        </label>
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="Sangeetchoreography"
                        />
                      </div>
                    </div>
                    <div class="col-md-4">
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
                    </div>
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
                  {checkedMusic && (
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
                          options={options}
                        />
                      </div>

                      <div class="col-md-3">
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
                      </div>
                    </div>
                  )}

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
                </div>
              </div>

              <hr class="my-5" />

              {/* Decoration section */}

              <div class="row gx-xl-5">
                <div class="col-md-3">
                  <h4><strong>Wedding Type :</strong></h4>
                </div>

                <div class="col-md-9">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="mb-3">
                        <br />
                        <label
                          for="ConceptWedding"
                          class="form-check-label"
                          value=""
                          style={{ marginRight: "15px" }}
                        >
                          Concept Wedding{" "}
                        </label>
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="ConceptWedding"
                          checked={checkedConceptwedding}
                          onChange={() => {
                            setcheckedConceptwedding(
                              !checkedConceptwedding
                            );
                          }}
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="mb-3">
                        <br />
                        <label
                          for="ThemeWedding"
                          class="form-check-label"
                          value=""
                          style={{ marginRight: "15px" }}
                        >
                          Theme Wedding{" "}
                        </label>
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="ThemeWedding"
                          checked={checkedWedding}
                          onChange={() => {
                            setCheckedWedding(!checkedWedding);
                          }}
                        />
                      </div>
                    </div>

                    {checkedConceptwedding && (
                      <div class="col-md-6">
                        <div class="mb-3">
                          <div className="preview-values">
                            {/* <h5><strong>Decoration</strong></h5> */}
                            {Conceptweddingvalue}
                          </div>

                          <MultiSelect
                            onChange={handleOnchangeConceptwedding}
                            options={Conceptweddingoptions}
                          />
                        </div>
                      </div>
                    )}
                    {checkedWedding && (
                      <div class="col-md-6">
                        <div class="mb-3">
                          <div className="preview-values">
                            {/* <h5><strong>Decoration</strong></h5> */}
                            {Themeweddingvalue}
                          </div>

                          <MultiSelect
                            onChange={handleOnchangeThemewedding}
                            options={Themeweddingoptions}
                          />
                        </div>
                      </div>
                    )}
                   
                  </div>
                </div>
              </div>

              {/* Decoration section end  */}

              <hr class="my-5" />
              <div class="row gx-xl-5">
                <div class="col-md-3">
                  <h4><strong>Decorations :</strong></h4>
                </div>

                <div class="col-md-9">
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
                    </div>

                    {checkedRegulardecoration && (
                      <div class="col-md-6">
                        <div class="mb-3">
                          <div className="preview-values">
                            {/* <h5><strong>Decoration</strong></h5> */}
                            {decorationvalue}
                          </div>

                          <MultiSelect
                            onChange={handleOnchangedecoration}
                            options={decorationoptions}
                          />
                        </div>
                      </div>
                    )}
                    {checkedDecoration && (
                      <div class="col-md-6">
                        <div class="mb-3">
                          <label for="exampleInput5" class="form-label"></label>
                          <select
                            id="exampleInput5"
                            class="form-select mb-3"
                            aria-label="Default select example"
                          >
                            <option selected value="1">
                              Romantic Decoration
                            </option>
                            <option value="2">Musical Decoration</option>
                            <option value="3">Retro Decoration</option>
                            <option value="4">Single Color Decoration</option>
                            <option value="5">Multi Color Decoration</option>
                            <option value="6">Traditional decoration</option>
                            
                          </select>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Decoration section end  */}

              <hr class="my-5" />

              {/* catering start */}

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

              {/* catering ends  */}

              <hr class="my-5" />

              {/* other events start */}

              <div class="row gx-xl-5">
                <div class="col-md-3">
                  <h4><strong>Other Services :</strong></h4>
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
                          Invitation{" "}
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
                    <div class="col-md-3">
                      <div class="mb-3">
                        <label
                          for="beauty"
                          class="form-check-label"
                          value=""
                          style={{ marginRight: "15px" }}
                        >
                          Pooja Pandit Ji{" "}
                        </label>
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="beauty"
                        />
                      </div>
                    </div>
                    <div class="col-md-3">
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
                    </div>
                    <div class="col-md-3">
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
                    </div>
                    <div class="col-md-3">
                      <div class="mb-3">
                        <label
                          for="Beauty"
                          class="form-check-label"
                          value=" "
                          style={{ marginRight: "15px" }}
                        >
                          Beauty{" "}
                        </label>
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="Beauty"
                          checked={checkedBeauty}
                          onChange={() => {
                            setCheckedBeauty(!checkedBeauty);
                          }}
                        />
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="mb-3">
                        <label
                          for="Mehandi"
                          class="form-check-label"
                          value=" "
                          style={{ marginRight: "15px" }}
                        >
                          Mehandi{" "}
                        </label>
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="Mehandi"
                          checked={checkedMehandi}
                          onChange={() => {
                            setCheckedMehandi(!checkedMehandi);
                          }}
                        />
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="mb-3">
                        <label
                          for="hosting"
                          class="form-check-label"
                          value=""
                          style={{ marginRight: "15px" }}
                        >
                          Hosting{" "}
                        </label>
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="hosting"
                        />
                      </div>
                    </div>
                  </div>

                  {/* venue options start */}
                 { checkedInvitation && (
                  
                  <div>
                      <div className="preview-values">
                        <h5>
                          <strong>Invitation</strong>{" "}
                        </h5>
                        {invitationvalue}
                      </div>

                      <MultiSelect
                        onChange={handleinvitation}
                        options={invitationtypes}
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

                  {/* venue option end */}
                  { checkedPhotography && (
                  <div>
                    <div className="preview-values">
                      <h5>
                        <strong>Photography</strong>
                      </h5>
                      {checkedBeauty}
                    </div>

                    <MultiSelect
                      onChange={handlePhotoChange}
                      options={PhotoOptions}
                    />
                  </div>
                  )}
                  { checkedBeauty && (
                  <div>
                    <div className="preview-values">
                      <h5>
                        <strong>Beauty</strong>
                      </h5>
                      {}
                    </div>

                    <MultiSelect
                      onChange={handleBeauty}
                      options={beautyoptions}
                    />
                  </div>
                  )}
                  { checkedMehandi && (
                  <div>
                    <div className="preview-values">
                      <h5>
                        <strong>Mehandi</strong>
                      </h5>
                      {}
                    </div>

                    <MultiSelect
                      onChange={handleMehandi}
                      options={mehandioptions}
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
  )
}

export default Weddingform
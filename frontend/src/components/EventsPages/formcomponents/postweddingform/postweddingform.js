import React from "react";
import { useState } from "react";
// import "./birthdayform.css";
import MultiSelect from "react-multiple-select-dropdown-lite";
import "react-multiple-select-dropdown-lite/dist/index.css";
import axios from "axios";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';

const schema = yup.object().shape({
  Client_Name: yup.string().required("Client name must be required"),
  Bride_Name: yup.string().required("Bride name must be required"),
  Groom_Name: yup.string().required("Groom name must be required"),
  date: yup.string().required("Date must be required"),
  fromDate: yup.string().required("From date must be required"),
  ToDate: yup.string().required("To date must be required"),
  city: yup.string().required("city name must be required"),
  No_Of_Guests: yup
    .number()
    .typeError("No of Guests must be required")
    .required("No of Guests must be required"),
  Estimate_Budget_Maximum: yup
    .string()
    .required("Estimate Budget Maximum must be required"),
  Estimate_Budget_Minimum: yup
    .string()
    .required("Estimate Budget Minimum must be required"),
});

function PostweddingForm() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });


  const [value, setvalue] = useState("");
  const handleOnchange = (val) => {
    setvalue(val);
  };
  const options = [
    { label: "Indian", value: "Indian" },
    { label: "Folk", value: "Folk" },
  ];

  const [dancevalue, setdancevalue] = useState("");
  const handledancechange = (val) => {
    setdancevalue(val);
  };

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
  const [invitationvalue, setinvitationvalue] = useState("");
  const handleinvitation = (val) => {
    setinvitationvalue(val);
  };
  const invitationtypes = [
    { label: "Physical", value: "Physical" },
    { label: "E-Photo", value: "E-Photo" },
    { label: "E-Video", value: "E-Video" },
    { label: "E-Card", value: "E-Card" },
  ];

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
  const [checkedRegulardecoration, setcheckedRegulardecoration] =
    useState(false);
  const [checkedInvitation, setCheckedInvitation] = useState(false);
  const [checkedPhotography, setCheckedPhotography] = useState(false);

  const handleSubmit2 = (data) => {
    const checkBoxValues = {
      musicvalue,
      foodvalue,
      dancevalue,
    };
    const userDate = data.date
    const changeFormat = new Date(userDate)    
    var usermonth = changeFormat.getUTCMonth() + 1; //months from 1-12
    var userday = changeFormat.getUTCDate();
    var useryear = changeFormat.getUTCFullYear();
    const UserSelectDate = useryear + "/" + usermonth + "/" + userday;

    var dateObj = new Date();
    var month = dateObj.getUTCMonth() + 1; //months from 1-12
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();
    const currentDate = year + "/" + month + "/" + day;

    const date1 = new Date(UserSelectDate);
    const date2 = new Date(currentDate);
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    console.log(diffTime + " milliseconds");
    console.log(diffDays + " days");

    if(diffDays <10){
      toast.success("you are under premium booking!!!", {
        position: toast.POSITION.TOP_CENTER
      });
    }
    console.log(checkBoxValues);
    // console.log(checkBoxValues.dancevalue);
    console.log(data);
    axios.post("/api/postwedding", {data, checkBoxValues}).then((res)=>{
      console.log(res.data);
    }).catch((err)=>{
      console.log(err);
    })
  };


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

                    <form>
                      <div class="row">
                        <div class="col-md-6 mb-4">
                          <div class="form-floating mb-3">
                            <input
                              {...register("Client_Name")}
                              type="text"
                              class="form-control"
                              id="Client_Name"
                              placeholder="Name"
                            />
                            <label for="floatingInput"> Client Name</label>
                            {errors.Client_Name && (
                              <div class="alert alert-danger mt-2" role="alert">
                                {errors.Client_Name?.message}
                              </div>
                            )}
                          </div>
                        </div>
                        <div class="col-md-6 mb-4">
                          <div class="form-floating mb-3">
                            <input
                              {...register("Bride_Name")}
                              type="text"
                              class="form-control"
                              id="Bride_Name"
                              placeholder="Name"
                            />
                            <label for="floatingInput"> Bride Name</label>
                            {errors.Bride_Name && (
                              <div class="alert alert-danger mt-2" role="alert">
                                {errors.Bride_Name?.message}
                              </div>
                            )}
                          </div>
                        </div>
                        <div class="col-md-6 mb-4">
                          <div class="form-floating mb-3">
                            <input
                              {...register("Groom_Name")}
                              type="text"
                              class="form-control"
                              id="Groom_Name"
                              placeholder="Name"
                            />
                            <label for="floatingInput"> Groom Name</label>
                            {errors.Groom_Name && (
                              <div class="alert alert-danger mt-2" role="alert">
                                {errors.Groom_Name?.message}
                              </div>
                            )}
                          </div>
                        </div>
                        <div class="col-md-6 mb-4">
                          <div class="form-floating mb-3">
                            <input
                              {...register("date")}
                              type="date"
                              class="form-control"
                              id="date"
                              placeholder="Date"
                            />
                            <label for="floatingInput">Date</label>
                            {errors.date && (
                              <div class="alert alert-danger mt-2" role="alert">
                                {errors.date?.message}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-md-6 mb-4">
                          <div class="form-floating mb-3">
                            <input
                              {...register("fromDate")}
                              type="date"
                              class="form-control"
                              id="FromDate"
                              placeholder="From"
                            />
                            <label for="floatingInput">From</label>
                            {errors.fromDate && (
                              <div class="alert alert-danger mt-2" role="alert">
                                {errors.fromDate?.message}
                              </div>
                            )}
                          </div>
                        </div>
                        <div class="col-md-6 mb-4">
                          <div class="form-floating mb-3">
                            <input
                              {...register("ToDate")}
                              type="date"
                              class="form-control"
                              id="ToDate"
                              placeholder="To"
                            />
                            <label for="floatingInput">To</label>
                            {errors.ToDate && (
                              <div class="alert alert-danger mt-2" role="alert">
                                {errors.ToDate?.message}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      <div class="form-floating mb-4">
                        <input
                          {...register("city")}
                          type="city"
                          class="form-control"
                          id="city"
                          placeholder="address"
                        />
                        <label for="floatingInput">City</label>
                        {errors.city && (
                          <div class="alert alert-danger mt-2" role="alert">
                            {errors.city?.message}
                          </div>
                        )}
                      </div>
                      <div class="row">
                        <div class="col-md-12 mb-4">
                          <div class="form-floating mb-3">
                            <input
                              {...register("No_Of_Guests")}
                              type="number"
                              class="form-control"
                              id="No_Of_Guests"
                              placeholder="To"
                            />
                            {errors.No_Of_Guests && (
                              <div class="alert alert-danger mt-2" role="alert">
                                {errors.No_Of_Guests?.message}
                              </div>
                            )}
                            <label for="floatingInput">No of Guests</label>
                          </div>
                        </div>
                      </div>

                      <div class="d-flex justify-content-end pt-3">
                        <button type="button" class="btn btn-info btn-lg ms-2 ">
                          Save
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container my-5">
        <div class="card">
          <form onSubmit={handleSubmit((data) => handleSubmit2(data))}>
            <div class="card-header py-4 px-5 bg-light border-0">
              <h4 class="mb-0 fw-bold">Post Wedding Booking</h4>
            </div>

            <div class="card-body px-5">
              <div class="row gx-xl-5 mb-5 mt-3">
                <div class="col-md-3">
                  <h4>
                    <strong>Muh dikhai :</strong>
                  </h4>
                </div>

                <div class="col-md-9">
                  <div class="row"></div>

                  <div class="row">
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
                          {...register("muh_Dikhal")}
                          type="checkbox"
                          class="form-check-input"
                          id="Sangeetchoreography"
                          value="Sangeetchoreography"
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
                          {...register("muh_Dikhal")}
                          type="checkbox"
                          class="form-check-input"
                          id="music"
                          value="music"
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
                          style={{ marginRight: "15px" }}
                        >
                          Dance{" "}
                        </label>
                        <input
                          {...register("muh_Dikhal")}
                          type="checkbox"
                          class="form-check-input"
                          id="dance"
                          value="dance"
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
                            {...register("dj")}
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
                        onChange={handledancechange}
                        options={options}
                      />
                    </div>
                  )}
                </div>
              </div>
              <hr></hr>
              <div class="row gx-xl-5 mt-5">
                <div class="col-md-3">
                  <h4>
                    <strong>Catering :</strong>
                  </h4>
                </div>

                <div class="col-md-9">
                  <div class="row">
                    <div class="col-md-4">
                      <div class="mb-3">
                        <div class="form-check">
                          <input
                            {...register("Food")}
                            class="form-check-input"
                            type="radio"
                            name="Food"
                            id="veg"
                            value={"veg"}
                          />

                          <label
                            class="form-check-label"
                            for="flexRadioDefault"
                          >
                            Veg
                          </label>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="mb-3">
                        <div class="form-check">
                          <input
                            {...register("Food")}
                            class="form-check-input"
                            type="radio"
                            name="Food"
                            value={"Non-veg"}
                            id="non-veg"
                          />

                          <label
                            class="form-check-label"
                            for="flexRadioDefault1"
                          >
                            Non-Veg
                          </label>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="mb-3">
                        <div class="form-check">
                          <input
                            {...register("Food")}
                            class="form-check-input"
                            type="radio"
                            value={"Jain"}
                            name="Food"
                            id="jain"
                          />

                          <label
                            class="form-check-label"
                            for="flexRadioDefault2"
                          >
                            Jain
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

              {/* other events start */}

              <div class="row gx-xl-5">
                <div class="col-md-3">
                  <h4>
                    <strong>Subaarambh Yatra :</strong>
                  </h4>
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
                        {...register("subaarambh_Yatra")}
                          type="checkbox"
                          class="form-check-input"
                          value={"decorated_Car"}
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
                        {...register("subaarambh_Yatra")}
                          type="checkbox"
                          value={"decorated_Cart"}
                          class="form-check-input"
                          id="decoratedcart"
                        />
                      </div>
                    </div>
                  </div>

                  <br></br>
                </div>
              </div>
              <hr class="my-5" />

              {/* other events start */}

              <div class="row gx-xl-5">
                <div class="col-md-3">
                  <h4>
                    <strong>Honney Moon :</strong>
                  </h4>
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
                        {...register("honeyMoon")}
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
                          <h5>
                            <strong>Number of days Stay</strong>
                          </h5>
                        </label>
                        <input
                        {...register("no_of_days_honeymoon")}
                          type="number"
                          class="form-control"
                          id="exampleInput1"
                          style={{ maxWidth: "500px" }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* venue options start */}
                  {checkedInvitation && (
                    <div>
                      <div class="col-md-6">
                        <div class="mb-3">
                          <label for="india" class="form-label">
                            <h5>
                              <strong>India</strong>
                            </h5>
                          </label>
                          <input
                          {...register("destination_India")}
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
                            <h5>
                              <strong>Abroad</strong>
                            </h5>
                          </label>
                          <input
                          {...register("destination_Abroad")}
                            type="text"
                            class="form-control"
                            id="abroad"
                            style={{ maxWidth: "500px" }}
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* venue option end */}
                  {checkedPhotography && (
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
                  <h4>
                    <strong>Estimate Budget :</strong>{" "}
                  </h4>
                </div>

                <div class="col-md-9">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="mb-3">
                        <label for="exampleInput11" class="form-label">
                          Minimun
                        </label>
                        <input
                          {...register("Estimate_Budget_Minimum")}
                          type="number"
                          class="form-control"
                          id="exampleInput11"
                        />
                      </div>
                      {errors.Estimate_Budget_Minimum && (
                        <div class="alert alert-danger mt-2" role="alert">
                          {errors.Estimate_Budget_Minimum?.message}
                        </div>
                      )}
                    </div>

                    <div class="col-md-6">
                      <div class="mb-3">
                        <label for="exampleInput12" class="form-label">
                          Maximum
                        </label>
                        <input
                          {...register("Estimate_Budget_Maximum")}
                          type="number"
                          class="form-control"
                          id="Estimate Budget Maximum"
                        />
                      </div>
                      {errors.Estimate_Budget_Maximum && (
                        <div class="alert alert-danger mt-2" role="alert">
                          {errors.Estimate_Budget_Maximum?.message}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <hr class="my-5" />

              <div class="row gx-xl-5">
                <div class="col-md-4">
                  <h4>
                    <strong>Special Service :</strong>{" "}
                  </h4>
                  <p>
                    Any additional service you expect from us that may be
                    mentioned here :
                  </p>
                </div>

                <div class="col-md-8">
                  <div class="row">
                    <div class="col-md-12">
                      <div class="mb-3">
                        <label
                          for="exampleInput11"
                          class="form-label"
                        ></label>
                        <textarea
                          {...register("SpecialService")}
                          type="number"
                          class="form-control"
                          id="special service"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <hr class="my-2" /> */}
              <h3>
                <strong>Note : </strong>
              </h3>
              <h4>
                <strong style={{ color: "red" }}>
                  Once the form is submitted now.Our customer representative
                  will contact you within 12-24 hours to discuss in more detail.
                </strong>
              </h4>
            </div>

            <div class="card-footer text-end py-4 px-5 bg-light border-0">
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

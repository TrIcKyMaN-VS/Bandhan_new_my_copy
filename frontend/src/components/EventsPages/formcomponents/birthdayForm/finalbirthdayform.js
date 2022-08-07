import React, { useState } from "react";
import "./birthdayform.css";
import MultiSelect from "react-multiple-select-dropdown-lite";
import "react-multiple-select-dropdown-lite/dist/index.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";

//schema

const schema = yup.object().shape({
  Birthday_Person_name: yup
    .string()
    .required("Birthday Person name must be required"),
  date: yup.string().required("Date must be required"),
  fromTime: yup.string().required("From Time must be required"),
  ToTime: yup.string().required("To Time must be required"),
  city: yup.string().required("city name must be required"),
  gender: yup.mixed().required("Gender must be required"),
  age: yup
    .number()
    .typeError("Age must be required")
    .required("Age must be required"),
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
  // venue_1_name : yup.string().required("required name")
});

function Finalbirthdayform() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  // console.log(errors);
  const [value, setvalue] = useState("");
  const handleOnchange = (val) => {
    setvalue(val);
  };

  function organizeValues() {
    // const checkBoxValues = {
    //   musicvalue,
    //   photovalue,
    //   decorationvalue,
    //   foodvalue,
    //   invitationvalue
    // }
  }

  const options = [
    { label: "Folk", value: "Folk" },
    { label: "Indian", value: "Indian" },
    { label: "Western", value: "Western" },
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
    console.log(data);
    // console.log(foodvalue);
    const checkBoxValues = {
      musicvalue,
      photovalue,
      decorationvalue,
      foodvalue,
      invitationvalue,
      dancevalue,
    };
    console.log(checkBoxValues);
    axios.post("/api/wedding", {data, checkBoxValues}).then((res)=>{
      console.log(res.data);
    }).catch((err)=>{
      console.log(err);
    })
    // console.log(organizeValues.checkBoxValues);
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
                    <form
                      onSubmit={handleSubmit(
                        (data) => handleSubmit2(data)
                        // (data) => {
                        // console.log(data);}
                      )}
                    >
                      <div class="row">
                        <div class="col-md-6 mb-4">
                          <div class="form-floating mb-3">
                            <input
                              type="text"
                              {...register("Birthday_Person_name")}
                              class="form-control"
                              id="floatingInput"
                              placeholder="Name"
                            />
                            <label HtmlFor="floatingInput">
                              Birthday person name
                            </label>
                            {errors.Birthday_Person_name && (
                              <div class="alert alert-danger mt-2" role="alert">
                                {errors.Birthday_Person_name?.message}
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
                              id="floatingInput"
                              placeholder="Date"
                            />
                            <label HtmlFor="floatingInput">Date</label>
                          </div>
                          {errors.date && (
                            <div class="alert alert-danger mt-2" role="alert">
                              {errors.date?.message}
                            </div>
                          )}
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-md-6 mb-4">
                          <div class="form-floating mb-3">
                            <input
                              {...register("fromTime")}
                              type="time"
                              class="form-control"
                              id="floatingInput"
                              placeholder="From"
                            />
                            <label HtmlFor="floatingInput">From</label>
                          </div>
                          {errors.fromTime && (
                            <div class="alert alert-danger mt-2" role="alert">
                              {errors.fromTime?.message}
                            </div>
                          )}
                        </div>
                        <div class="col-md-6 mb-4">
                          <div class="form-floating mb-3">
                            <input
                              {...register("ToTime")}
                              type="time"
                              class="form-control"
                              id="floatingInput"
                              placeholder="To"
                            />
                            <label HtmlFor="floatingInput">To</label>
                          </div>
                          {errors.ToTime && (
                            <div class="alert alert-danger mt-2" role="alert">
                              {errors.ToTime?.message}
                            </div>
                          )}
                        </div>
                      </div>

                      <div class="form-floating mb-4">
                        <input
                          {...register("city")}
                          type="city"
                          class="form-control"
                          id="floatingInput"
                          placeholder="address"
                        />
                        <label HtmlFor="floatingInput">City</label>
                        {errors.city && (
                          <div class="alert alert-danger mt-2" role="alert">
                            {errors.city?.message}
                          </div>
                        )}
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
                        <label class="btn btn-warning" HtmlFor="option1">
                          Gender
                        </label>
                        <input
                        {...register('gender')}
                          type="radio"
                          class="btn-check"
                          name="male"
                          id="male"
                          value={"Male"}
                        />
                        <label class="btn btn-primary" HtmlFor="option11">
                          Male
                        </label>
                        <input
                        {...register('gender')}
                          type="radio"
                          class="btn-check"
                          name="gender"
                          value="Female"
                          id="female"
                        />
                        <label class="btn btn-primary" HtmlFor="option2">
                          Female
                        </label>

                        <input
                        {...register('gender')}
                          type="radio"
                          class="btn-check"
                          name="gender"
                          value={"others"}
                          id="others"
                        />
                        <label class="btn btn-primary" HtmlFor="option3">
                          Others
                        </label>
                      </div> */}
                      <div class="btn-group mb-4">
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
                          {...register("gender")}
                          type="radio"
                          class="btn-check"
                          name="gender"
                          id="male"
                          value={"Male"}
                          autocomplete="off"
                        />
                        <label class="btn btn-primary" for="male">
                          Male
                        </label>
                        <input
                          {...register("gender")}
                          type="radio"
                          class="btn-check"
                          name="gender"
                          value={"Female"}
                          id="female"
                        />
                        <label class="btn btn-primary" for="female">
                          Female
                        </label>

                        <input
                          {...register("gender")}
                          type="radio"
                          class="btn-check"
                          name="gender"
                          value={"Others"}
                          id="others"
                        />
                        <label class="btn btn-primary" for="others">
                          Others
                        </label>
                      </div>
                      {errors.gender && (
                        <div class="alert alert-danger mt-2" role="alert">
                          {errors.gender?.message}
                        </div>
                      )}

                      <div class="row">
                        <div class="col-md-6 mb-4">
                          <div class="form-floating mb-3">
                            <input
                              {...register("age")}
                              type="number"
                              class="form-control"
                              id="age"
                              placeholder="To"
                            />
                            <label HtmlFor="floatingInput">Age</label>
                          </div>
                          {errors.age && (
                            <div class="alert alert-danger mt-2" role="alert">
                              {errors.age?.message}
                            </div>
                          )}
                        </div>
                        <div class="col-md-6 mb-4">
                          <div class="form-floating mb-3">
                            <input
                              {...register("No_Of_Guests")}
                              type="number"
                              class="form-control"
                              id="noofguest"
                              placeholder="To"
                            />
                            <label HtmlFor="floatingInput">No of Guests</label>
                          </div>
                          {errors.No_Of_Guests && (
                            <div class="alert alert-danger mt-2" role="alert">
                              {errors.No_Of_Guests?.message}
                            </div>
                          )}
                        </div>
                      </div>
                      <div class="row"></div>

                      <div class="d-flex justify-content-end pt-3">
                        <button type="submit" class="btn btn-info btn-lg ms-2 ">
                          Submit form
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
          <form>
            <div class="card-header py-4 px-5 bg-light border-0">
              <h4 class="mb-0 fw-bold">Birthday Event Booking</h4>
            </div>

            <div class="card-body px-5">
              <div class="row gx-xl-5">
                <div class="col-md-3">
                  <h4>
                    <strong>Shows :</strong>
                  </h4>
                </div>

                <div class="col-md-9">
                  <div class="row"></div>

                  <div class="row">
                    <div class="col-md-3">
                      <div class="mb-3">
                        <label
                          HtmlFor="games"
                          class="form-check-label"
                          value=""
                          style={{ marginRight: "15px" }}
                        >
                          Games{" "}
                        </label>
                        <input
                          {...register("shows")}
                          type="checkbox"
                          class="form-check-input"
                          id="games"
                          value={"games"}
                        />
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="mb-3">
                        <label
                          HtmlFor="magic"
                          class="form-check-label"
                          value=""
                          style={{ marginRight: "15px" }}
                        >
                          Magic
                        </label>
                        <input
                          {...register("shows")}
                          type="checkbox"
                          class="form-check-input"
                          id="magic"
                          value={"magic"}
                        />
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="mb-3">
                        <label
                          HtmlFor="music"
                          class="form-check-label"
                          style={{ marginRight: "15px" }}
                        >
                          Music{" "}
                        </label>
                        <input
                          {...register("shows")}
                          type="checkbox"
                          class="form-check-input"
                          id="music"
                          value={"music"}
                          checked={checkedMusic}
                          onChange={() => {
                            setCheckedMusic(!checkedMusic);
                          }}
                        />
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="mb-3">
                        <label
                          HtmlFor="dance"
                          class="form-check-label"
                          value=""
                          style={{ marginRight: "15px" }}
                        >
                          Dance{" "}
                        </label>
                        <input
                          {...register("shows")}
                          type="checkbox"
                          class="form-check-input"
                          id="dance"
                          value={"dance"}
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
                            HtmlFor="dj"
                            class="form-check-label"
                            style={{ marginRight: "15px" }}
                          >
                            DJ{" "}
                          </label>
                          <input
                            {...register("musicType_DJ")}
                            type="checkbox"
                            class="form-check-input"
                            // name="dj"
                            value={"dj"}
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

              <hr class="my-5" />

              {/* Decoration section */}

              <div class="row gx-xl-5">
                <div class="col-md-3">
                  <h4>
                    <strong>Decorations :</strong>
                  </h4>
                </div>

                <div class="col-md-9">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="mb-3">
                        <br />
                        <label
                          HtmlFor="regulardecoration"
                          class="form-check-label"
                          value=""
                          style={{ marginRight: "15px" }}
                        >
                          Regular Decoration{" "}
                        </label>
                        <input
                          {...register("Decoration")}
                          type="checkbox"
                          class="form-check-input"
                          id="RegularDecoration"
                          value={"Regular Decoration"}
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
                          HtmlFor="decoration"
                          class="form-check-label"
                          value=""
                          style={{ marginRight: "15px" }}
                        >
                          Theme Decoration{" "}
                        </label>
                        <input
                          {...register("Decoration")}
                          type="checkbox"
                          class="form-check-input"
                          id="decoration"
                          value={"Theme Decoration"}
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
                          <label
                            HtmlFor="exampleInput5"
                            class="form-label"
                          ></label>
                          <select
                            id="exampleInput5"
                            class="form-select mb-3"
                            aria-label="Default select example"
                          >
                            <option
                              selected
                              value="1"
                              {...register("DecorationType")}
                            >
                              Ballon Decoration
                            </option>
                            <option
                              {...register("DecorationType")}
                              id="CandyDecoration"
                              value="Candy Decoration"
                            >
                              Candy Decoration
                            </option>
                            <option
                              {...register("DecorationType")}
                              id="CartoonDecoration"
                              value="Cartoon Decoration"
                            >
                              Cartoon Decoration
                            </option>
                            <option
                              {...register("DecorationType")}
                              id="Jungle Party Decoration"
                              value="Jungle Party Decoration"
                            >
                              Jungle Party Decoration
                            </option>
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
                            HtmlFor="flexRadioDefault"
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
                            HtmlFor="flexRadioDefault1"
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
                            HtmlFor="flexRadioDefault2"
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

              {/* catering ends  */}

              <hr class="my-5" />

              {/* other events start */}

              <div class="row gx-xl-5">
                <div class="col-md-3">
                  <h4>
                    <strong>Other Services :</strong>
                  </h4>
                </div>

                <div class="col-md-9">
                  <div class="row">
                    <div class="col-md-3">
                      <div class="mb-3">
                        <label
                          HtmlFor="invitation"
                          class="form-check-label"
                          value=""
                          style={{ marginRight: "15px" }}
                        >
                          Invitation{" "}
                        </label>
                        <input
                          {...register("Other Services")}
                          type="checkbox"
                          class="form-check-input"
                          id="invitation"
                          value="invitation"
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
                          HtmlFor="beauty"
                          class="form-check-label"
                          value=""
                          style={{ marginRight: "15px" }}
                        >
                          Beauty{" "}
                        </label>
                        <input
                          {...register("Other Services")}
                          type="checkbox"
                          class="form-check-input"
                          id="beauty"
                          value="beauty"
                        />
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="mb-3">
                        <label
                          HtmlFor="venue"
                          class="form-check-label"
                          value=" "
                          style={{ marginRight: "15px" }}
                        >
                          Venue{" "}
                        </label>
                        <input
                          {...register("Other Services")}
                          type="checkbox"
                          class="form-check-input"
                          id="venue"
                          value="venue"
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
                          HtmlFor="photography"
                          class="form-check-label"
                          style={{ marginRight: "15px" }}
                        >
                          Photography{" "}
                        </label>
                        <input
                          {...register("Other Services")}
                          type="checkbox"
                          class="form-check-input"
                          id="photography"
                          value="photography"
                          checked={checkedPhotography}
                          onChange={() => {
                            setCheckedPhotography(!checkedPhotography);
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* venue options start */}
                  {checkedInvitation && (
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
                            <label HtmlFor="exampleInput1" class="form-label">
                              <strong>Venue 1 Name</strong>{" "}
                            </label>
                            <input
                              {...register("Venue 1 Name")}
                              type="text"
                              class="form-control"
                              id="exampleInput1"
                              style={{ maxWidth: "500px" }}
                            />
                          </div>
                          {errors.venue_1_name && (
                            <div class="alert alert-danger mt-2" role="alert">
                              {errors?.venue_1_name.message}
                            </div>
                          )}
                        </div>
                        <div class="col-md-6">
                          <div class="mb-3">
                            <label HtmlFor="exampleInput1" class="form-label">
                              <strong>Venue 1 place</strong>
                            </label>
                            <input
                              {...register("Venue 1 Place")}
                              type="text"
                              class="form-control"
                              id="exampleInput1"
                              style={{ maxWidth: "500px" }}
                            />
                          </div>
                          {errors.venue_1_place && (
                            <div class="alert alert-danger mt-2" role="alert">
                              {errors.venue_1_place?.message}
                            </div>
                          )}
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-6">
                          <div class="mb-3">
                            <label HtmlFor="exampleInput1" class="form-label">
                              <strong>Venue 2 Name</strong>
                            </label>
                            <input
                              {...register("Venue 2 Name")}
                              type="text"
                              class="form-control"
                              id="exampleInput1"
                              style={{ maxWidth: "500px" }}
                            />
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="mb-3">
                            <label HtmlFor="exampleInput1" class="form-label">
                              <strong>Venue 2 place</strong>
                            </label>
                            <input
                              {...register("Venue 2 Place")}
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
                            <label HtmlFor="exampleInput1" class="form-label">
                              <strong>Venue 3 Name</strong>
                            </label>
                            <input
                              {...register("Venue 3 Name")}
                              type="text"
                              class="form-control"
                              id="exampleInput1"
                              style={{ maxWidth: "500px" }}
                            />
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="mb-3">
                            <label HtmlFor="exampleInput1" class="form-label">
                              <strong>Venue 3 place</strong>
                            </label>
                            <input
                              {...register("Venue 3 Place")}
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
                        <label HtmlFor="exampleInput11" class="form-label">
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
                        <label HtmlFor="exampleInput12" class="form-label">
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
                          htmlFor="exampleInput11"
                          class="form-label"
                        ></label>
                        <textarea
                          {...register("Special Service")}
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
                  {" "}
                  Once the form is submitted now.Our customer representative
                  will contact you within 12-24 hours to discuss in more detail.
                </strong>
              </h4>
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

export default Finalbirthdayform;

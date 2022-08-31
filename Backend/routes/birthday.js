const express = require("express");
const router = express.Router();
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const { v4: uuidv4 } = require('uuid');
app.use(cors());
app.use(express.static("files"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const { EventForm } = require("../model/eventModel");
const { BirthdayForm } = require("../model/birthdaymodel");
const auth = require("../middleware/auth");

//routes
router.post("/", auth, async (req, res) => {
  const eventName = "Birthday Event";
  const orderId = uuidv4().slice(0,6)
  const userId = req.id;
  const BirthdayPersonName = req.body.data.Birthday_Person_name;
  const Age = req.body.data.Age;
  const Gender = req.body.data.gender;
  const City = req.body.data.city;
  const FromTime = req.body.data.FromTime;
  const ToTime = req.body.data.ToTime;
  const date = req.body.data.date;
  const NoOfGuests = req.body.data.No_Of_Guests;
  const MinBudget = req.body.data.Estimate_Budget_Minimum;
  const MaxBudget = req.body.data.Estimate_Budget_Maximum;
  const Shows = {
    show: req.body.data.shows?req.body.data.shows:"null",
    musicvalues: req.body.checkBoxValues.musicvalue?req.body.checkBoxValues.musicvalue:"null",
    dancevalues: req.body.checkBoxValues.dancevalue? req.body.checkBoxValues.dancevalue:"null",
    dj: req.body.data.dj?req.body.data.dj:"null",
  };
  const Decoration = {
    RegularDecoration: req.body.checkBoxValues.decorationvalue?req.body.checkBoxValues.decorationvalue:"null",
    ThemeDecoration: req.body.data.DecorationType?req.body.data.DecorationType:"null",
  };
  const SpecialService = req.body.data.SpecialService?req.body.data.SpecialService:"null";
  const OtherServices = req.body.data.OtherServices?req.body.data.OtherServices:"null";
  const OtherServiceValues = {
    invitation: req.body.checkBoxValues.invitationvalue?req.body.checkBoxValues.invitationvalue:"null",
    photography: req.body.checkBoxValues.photovalue?req.body.checkBoxValues.photovalue:"null",
    venues: {
      venue1: {
        name: req.body.data.venue_1_name?req.body.data.venue_1_name:"null",
        place: req.body.data.venue_1_place?req.body.data.venue_1_place:"null",
      },
      venue2: {
        name: req.body.data.venue_2_name?req.body.data.venue_2_name:"null",
        place: req.body.data.venue_2_place?req.body.data.venue_2_place:"null",
      },
      venue3: {
        name: req.body.data.venue_3_name?req.body.data.venue_3_name:"null",
        place: req.body.data.venue_3_place?req.body.data.venue_3_place:"null",
      },
    },
  };
  // const Photography = {
  //     photography : req.body.checkBoxValues.photovalue
  // }
  // console.log(photography);
  const Food = {
    Foodtype: req.body.data.Food?req.body.data.Food:"null",
    items: req.body.checkBoxValues.foodvalue?req.body.checkBoxValues.foodvalue:"null",
  };

  var venueStatus = "pending"
  var cateringStatus = "pending"
  var photographyStatus = "pending"
  var decorationStatus = "pending"
  var isVerified = false
  var foodb = false
   var photographyb = false
   var venueb = false
   var decorationb = false
   if (Food.Foodtype){
    foodb = true
   }
   if(OtherServiceValues.photography){
    photographyb= true
   }
   if(OtherServiceValues.venues){
    venueb = true
   }
   if(Decoration.RegularDecoration || Decoration.ThemeDecoration){
      decorationb = true
   }
  //    console.log(req.body);

  const newBirthdayForm = BirthdayForm({
    eventName,
    orderId,
    userId,
    BirthdayPersonName,
    Age,
    Gender,
    City,
    FromTime,
    ToTime,
    date,
    NoOfGuests,
    MinBudget,
    MaxBudget,
    Shows,
    Decoration,
    SpecialService,
    OtherServices,
    OtherServiceValues,
    // Photography,
    Food,
    foodb,
    photographyb,
    venueb,
    decorationb,
    venueStatus,
    photographyStatus,
    decorationStatus,
    cateringStatus,
    isVerified
  });
  newBirthdayForm.save().then(() => {
    res.status(200).send("birthday form saved successfully...!");
  });
  // console.log( );
});

module.exports = router;

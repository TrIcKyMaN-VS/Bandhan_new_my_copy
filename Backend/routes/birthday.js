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
    show: req.body.data.shows,
    musicvalues: req.body.checkBoxValues.musicvalue,
    dancevalues: req.body.checkBoxValues.dancevalue,
    dj: req.body.data.dj,
  };
  const Decoration = {
    RegularDecoration: req.body.checkBoxValues.decorationvalue,
    ThemeDecoration: req.body.data.DecorationType,
  };
  const SpecialService = req.body.data.SpecialService;
  const OtherServices = req.body.data.OtherServices;
  const OtherServiceValues = {
    invitation: req.body.checkBoxValues.invitationvalue,
    photography: req.body.checkBoxValues.photovalue,
    venues: {
      venue1: {
        name: req.body.data.venue_1_name,
        place: req.body.data.venue_1_name,
      },
      venue2: {
        name: req.body.data.venue_2_name,
        place: req.body.data.venue_2_name,
      },
      venue3: {
        name: req.body.data.venue_3_name,
        place: req.body.data.venue_3_name,
      },
    },
  };
  // const Photography = {
  //     photography : req.body.checkBoxValues.photovalue
  // }
  // console.log(photography);
  const Food = {
    Foodtype: req.body.data.Food,
    items: req.body.checkBoxValues.foodvalue,
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

const express = require("express");
const router = express.Router();
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
app.use(cors());
const { v4: uuidv4 } = require('uuid');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const auth = require("../middleware/auth");
const { EventForm } = require("../model/eventModel");
const { EventName } = require("../model/eventName");
const { BabyShowerForm } = require("../model/babyshowermodel");

router.post("/", auth, async (req, res) => {
  const eventName = "BabyShower Event";
  const orderId = uuidv4().slice(0,6)
  const data = req.body.data;
  const checkBoxValues = req.body.checkBoxValues;
  const userId = req.id;
  const MomName = data.Mom_Name;
  const DadName = data.Dad_Name;
  const date = data.date;
  const FromDate = data.fromDate;
  const ToData = data.ToDate;
  const MinBudget = data.Estimate_Budget_Minimum;
  const MaxBudget = data.Estimate_Budget_Maximum;
  const NoOfGuests = data.No_Of_Guests;
  const points = "0"
  const voucher = "0"
  const Shows = {
    show: data.shows?data.shows:"null",
    musicvalues: checkBoxValues.musicvalue?checkBoxValues.musicvalue:"null",
    dancevalues: checkBoxValues.dancevalue?checkBoxValues.dancevalue:"null",
    dj: data.dj? data.dj:"null",
  };
  const Decoration = {
    RegularDecoration: checkBoxValues.decorationvalue?checkBoxValues.decorationvalue:"null",
    ThemeDecoration: data.ThemeDecoration,
  };
  const SpecialService = data.SpecialService;

  const Food = {
    Foodtype: data.Food,
    items: checkBoxValues.foodvalue,
  };
  const OtherServices = data.OtherServices;
  const OtherServiceValues = {
    invitation: checkBoxValues.invitationvalue,
    photography: checkBoxValues.photovalue,
    venues: {
      venue1: {
        name: data.venue_1_name,
        place: data.venue_1_place,
      },
      venue2: {
        name: data.venue_2_name,
        place: data.venue_2_place,
      },
      venue3: {
        name: data.venue_3_name,
        place: data.venue_3_place,
      },
    },
  };

  var venueStatus = "pending";
  var cateringStatus = "pending";
  var photographyStatus = "pending";
  var decorationStatus = "pending";
  var isVerified = false;
  var foodb = false;
  var photographyb = false;
  var venueb = false;
  var decorationb = false;
  if (Food.Foodtype) {
    foodb = true;
  }
  if (OtherServiceValues.photography) {
    photographyb = true;
  }
  if (OtherServiceValues.venues) {
    venueb = true;
  }
  if (Decoration.RegularDecoration || Decoration.ThemeDecoration) {
    decorationb = true;
  }

  const newBabyShowerForm = BabyShowerForm({
    eventName,
    orderId,
    userId,
    MomName,
    DadName,
    FromDate,
    ToData,
    date,
    NoOfGuests,
    MinBudget,
    MaxBudget,
    SpecialService,
    Shows,
    Decoration,
    OtherServices,
    OtherServiceValues,
    Food,
    foodb,
    photographyb,
    venueb,
    decorationb,
    venueStatus,
    photographyStatus,
    decorationStatus,
    cateringStatus,
    isVerified,
    points,
    voucher
  });

  const name_Of_The_Event = checkBoxValues.name_Of_The_Event;

  const newEventName = EventName({
    userId,
    name_Of_The_Event,
  });

  newEventName.save().then(() => console.log("successfully event name saved"));

  newBabyShowerForm.save().then(() => {
    res.status(200).send("BabyShower form saved successfully...!");
    console.log(newBabyShowerForm);
  });
  console.log("completed!! saved");

  console.log(req.body);
});

module.exports = router;

const express = require("express");
const router = express.Router();
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const { v4: uuidv4 } = require('uuid');
app.use(cors());
// app.use(express.static("files"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const { EventForm } = require("../model/eventModel");
const auth = require("../middleware/auth");
const { EventName } = require("../model/eventName");
const { FamilyFunctionForm } = require("../model/familyFunction");
router.post("/", auth, async (req, res) => {
  const data = req.body.data;
  const checkBoxValues = req.body.checkBoxValues;

  const eventName = "Familyfunction Event";
  const userId = req.id;
  const orderId = uuidv4().slice(0,6)
  const TypeOfFunction = data.type_Of_Function;
  const NameOfFunction = data.name_Of_Function;
  const NoOfDays = data.no_Of_Days?data.no_Of_Days:"null";
  const FromDate = data.fromDate?data.fromDate:"null";
  const ToData = data.ToDate;
  const MinBudget = data.Estimate_Budget_Minimum;
  const MaxBudget = data.Estimate_Budget_Maximum;
  const NoOfGuests = data.No_Of_Guests;

  const Shows = {
    show: data.shows?data.shows:"null",
    musicvalues: checkBoxValues.musicvalue?checkBoxValues.musicvalue:"null",
    dancevalues: checkBoxValues.dancevalue?checkBoxValues.dancevalue:"null",
    dj: data.dj?data.dj:"null",
  };
  const Decoration = {
    RegularDecoration: checkBoxValues.decorationvalue?checkBoxValues.decorationvalue:"null",
    ThemeDecoration: data.DecorationType?data.DecorationType:"null",
  };
  const SpecialService = data.SpecialService?data.SpecialService:"null";

  const Food = {
    Foodtype: data.Food?data.Food:"null",
    items: checkBoxValues.foodvalue?checkBoxValues.foodvalue:"null",
  };
  const OtherServices = data.OtherServices?data.OtherServices:"null";
  const OtherServiceValues = {
    invitation: checkBoxValues.invitationvalue?checkBoxValues.invitationvalue:"null",
    photography: checkBoxValues.photovalue?checkBoxValues.photovalue:"null",
    venues: {
      venue1: {
        name: data.Venue_1_name?data.Venue_1_name:"null",
        place: data.Venue_1_place?data.Venue_1_place:"null",
      },
      venue2: {
        name: data.Venue_2_name?data.Venue_2_name:"null",
        place: data.Venue_2_place?data.Venue_2_place:"null",
      },
      venue3: {
        name: data.Venue_3_name?data.Venue_3_name:"null",
        place: data.Venue_3_place?data.Venue_3_place:"null",
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

  const newFamilyFunctionForm = FamilyFunctionForm({
    eventName,
    userId,
    orderId,
    TypeOfFunction,
    NameOfFunction,
    FromDate,
    ToData,
    NoOfDays,
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
  });

  const name_Of_The_Event = checkBoxValues.name_Of_The_Event;

  const newEventName = EventName({
    userId,
    name_Of_The_Event,
  });

  newEventName.save().then(() => console.log("successfully event name saved"));

  newFamilyFunctionForm.save().then(() => {
    res.status(200).send("Family Function form saved successfully...!");
  });
  console.log("completed!! saved");

  console.log(req.body);
});

module.exports = router;

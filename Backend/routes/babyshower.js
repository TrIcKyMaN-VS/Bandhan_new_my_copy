const express = require("express");
const router = express.Router();
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
app.use(cors());
// app.use(express.static("files"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const auth = require("../middleware/auth");
const { EventForm } = require("../model/eventModel");
const { EventName } = require("../model/eventName");

router.post("/", auth, async (req, res) => {
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

  const Shows = {
    show: data.shows,
    musicvalues: checkBoxValues.musicvalue,
    dancevalues: checkBoxValues.dancevalue,
    dj: data.dj,
  };
  const Decoration = {
    RegularDecoration: checkBoxValues.decorationvalue,
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
        place: data.venue_1_name,
      },
      venue2: {
        name: data.venue_2_name,
        place: data.venue_2_name,
      },
      venue3: {
        name: data.venue_3_name,
        place: data.venue_3_name,
      },
    },
  };
  const newEventForm = EventForm({
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
  });

  const name_Of_The_Event = checkBoxValues.name_Of_The_Event;

  const newEventName = EventName({
    userId,
    name_Of_The_Event,
  });

  newEventName.save().then(() => console.log("successfully event name saved"));

  newEventForm.save().then(() => {
    res.status(200).send("BabyShower form saved successfully...!");
    console.log(newEventForm);
  });
  console.log("completed!! saved");

  console.log(req.body);
});

module.exports = router;

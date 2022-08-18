const express = require("express");
const router = express.Router();
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
app.use(cors());
app.use(express.static("files"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const { EventForm } = require("../model/eventModel");
const auth = require("../middleware/auth");

//routes
router.post("/", auth, async (req, res) => {
  const data = req.body.data;
  const checkBoxValues = req.body.checkBoxValues;

  const userId = req.id;
  const ClientName = data.Client_Name;
  const BrideName = data.Bride_Name;
  const GroomName = data.Groom_Name;
  const Age = data.Age;
  const Gender = data.Gender;
  const date = data.date;
  const City = data.City;
  const FromDate = data.fromDate;
  const ToData = data.ToDate;
  const NoOfGuests = data.No_Of_Guests;
  const MinBudget = data.Estimate_Budget_Minimum;
  const MaxBudget = data.Estimate_Budget_Maximum;
  const Shows = {
    show: data.shows,
    musicvalues: checkBoxValues.musicvalue,
    dancevalues: checkBoxValues.dancevalue,
    dj: data.Dj,
  };
  const Decoration = {
    RegularDecoration: checkBoxValues.decorationvalue,
    ThemeDecoration: data.ThemeDecoration,
  };
  const SpecialService = data.SpecialService;
  const OtherServices = data.OtherServices;
  const OtherServiceValues = {
    invitation: checkBoxValues.invitationvalue,
    photography: checkBoxValues.photovalue,
    mehandi: checkBoxValues.checkedMehandi,
    venues: {
      venue1: {
        name: data.Venue_1_Name,
        place: data.Venue_1_Place,
      },
      venue2: {
        name: data.Venue_1_Name,
        place: data.Venue_1_Place,
      },
      venue3: {
        name: data.Venue_1_Name,
        place: data.Venue_1_Place,
      },
    },
  };
  const Food = {
    Foodtype: data.Food,
    items: checkBoxValues.foodvalue,
  };

  const newEventForm = EventForm({
    userId,
    ClientName,
    BrideName,
    GroomName,
    Age,
    Gender,
    City,
    FromDate,
    ToData,
    date,
    NoOfGuests,
    MinBudget,
    MaxBudget,
    Shows,
    Decoration,
    SpecialService,
    OtherServices,
    OtherServiceValues,
    Food,
  });
  newEventForm.save().then(() => {
    res.status(200).send("Engagement form saved successfully...!");
    console.log(newEventForm);
  });
  console.log("completed!! saved");

  //   console.log(req.body);
});

module.exports = router;

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
const { EventName } = require("../model/eventName");

router.post("/", auth, async (req, res) => {
  const data = req.body.data;
  const checkBoxValues = req.body.checkBoxValues;

  const userId = req.id;
  const ClientName = data.Client_Name;
  const BrideName = data.Bride_Name;
  const GroomName = data.Groom_Name;
  const date = data.date;
  const City = data.City;
  const FromDate = data.fromDate;
  const ToData = data.ToDate;
  const MinBudget = data.Estimate_Budget_Minimum;
  const MaxBudget = data.Estimate_Budget_Maximum;
  const NoOfGuests = data.No_Of_Guests;
  const Services = data.service;
  const Servicevalue = {
    Mehandi: {
      DateMehandiShow: data.DateMehandiShow,
      TimeMehandiShow: data.TimeMehandiShow,
    },
    Reception: {
      DateReception: data.DateReception,
      TimeReception: data.TimeReception,
    },
    Phera: {
      DatePhera: data.DatePhera,
      TimePhera: data.TimePhera,
    },
    Sangeet: {
      DateSangeet: data.DateSangeet,
      TimeSangeet: data.TimeSangeet,
    },
    Pooja: {
      DatePooja: data.DatePooja,
      TimePooja: data.TimePooja,
    },
    Baraat: {
      DateBaraat: data.DateBaraat,
      TimeBaraat: data.TimeBaraat,
    },
    Haldi: {
      DateHaldi: data.DateHaldi,
      TimeHaldi: data.TimeHaldi,
    },
    Tilak: {
      dateTilak: data.dateTilak,
      TimeTilak: data.TimeTilak,
    },
  };
  const ConceptWedding = checkBoxValues.Conceptweddingvalue;
  const ThemeWedding = checkBoxValues.Themeweddingvalue;
  const Decoration = {
    RegularDecoration: checkBoxValues.decorationvalue,
    ThemeDecoration: data.ThemeDecoration,
  };
  const Shows = {
    show: data.shows,
    musicvalues: checkBoxValues.musicvalue,
    dancevalues: checkBoxValues.dancevalue,
    dj: data.Dj,
  };
  const Food = {
    Foodtype: data.Food,
    items: checkBoxValues.foodvalue,
  };
  const SpecialService = data.SpecialService;
  const OtherServices = data.OtherServices;
  const OtherServiceValues = {
    invitation: checkBoxValues.invitationvalue,
    photography: checkBoxValues.photovalue,
    venues: {
      venue1: {
        name: data.Venue_1_name,
        place: data.Venue_1_place,
      },
      venue2: {
        name: data.Venue_1_name,
        place: data.Venue_1_place,
      },
      venue3: {
        name: data.Venue_1_name,
        place: data.Venue_1_place,
      },
    },
  };
  const newEventForm = EventForm({
    userId,
    ClientName,
    BrideName,
    GroomName,
    City,
    FromDate,
    ToData,
    date,
    NoOfGuests,
    MinBudget,
    MaxBudget,
    Services,
    ConceptWedding,
    ThemeWedding,
    Shows,
    Servicevalue,
    Decoration,
    SpecialService,
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
    res.status(200).send("Wedding form saved successfully...!");
    console.log(newEventForm);
  });
  console.log(req.body);
});

module.exports = router;

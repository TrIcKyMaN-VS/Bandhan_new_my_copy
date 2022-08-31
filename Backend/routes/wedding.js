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
const auth = require("../middleware/auth");
const { EventName } = require("../model/eventName");
const { WeddingForm } = require("../model/weddingmodel");

router.post("/", auth, async (req, res) => {
  const data = req.body.data;
  const checkBoxValues = req.body.checkBoxValues;

  const eventName = "Wedding Event";
  const userId = req.id;
  const orderId = uuidv4().slice(0,6)
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
  const Services = data.service ?data.service : "null";
  const Servicevalue = {
    Mehandi: {
      DateMehandiShow: data.DateMehandiShow ?data.DateMehandiShow : "null",
      TimeMehandiShow: data.TimeMehandiShow ?data.TimeMehandiShow:"null",
    },
    Reception: {
      DateReception: data.DateReception ?data.DateReception:"null",
      TimeReception: data.TimeReception?data.TimeReception:"null",
    },
    Phera: {
      DatePhera: data.DatePhera ?data.DatePhera:"null",
      TimePhera: data.TimePhera ?data.TimePhera :"null",
    },
    Sangeet: {
      DateSangeet: data.DateSangeet?data.DateSangeet:"null",
      TimeSangeet: data.TimeSangeet ?data.TimeSangeet:"null",
    },
    Pooja: {
      DatePooja: data.DatePooja?data.DatePooja:"null",
      TimePooja: data.TimePooja?data.TimePooja:"null",
    },
    Baraat: {
      DateBaraat: data.DateBaraat ? data.DateBaraat: "null",
      TimeBaraat: data.TimeBaraat ? data.TimeBaraat: "null",
    },
    Haldi: {
      DateHaldi: data.DateHaldi?data.DateHaldi:"null",
      TimeHaldi: data.TimeHaldi? data.TimeHaldi:"null",
    },
    Tilak: {
      dateTilak: data.dateTilak?data.dateTilak:"null",
      TimeTilak: data.TimeTilak?data.TimeTilak:"null",
    },
  };
  const ConceptWedding = checkBoxValues.Conceptweddingvalue?checkBoxValues.Conceptweddingvalu:"null";
  const ThemeWedding = checkBoxValues.Themeweddingvalue ?checkBoxValues.Themeweddingvalue:"null";
  const Decoration = {
    RegularDecoration: checkBoxValues.decorationvalue?checkBoxValues.decorationvalue:"null",
    ThemeDecoration: data.ThemeDecoration?data.ThemeDecoration:'null',
  };
  const Shows = {
    show: data.shows?data.show:"null",
    musicvalues: checkBoxValues.musicvalue?checkBoxValues.musicvalue:"null",
    dancevalues: checkBoxValues.dancevalue?checkBoxValues.dancevalue:"null",
    dj: data.Dj?data.Dj:"null",
  };
  const Food = {
    Foodtype: data.Food?data.Food:"null",
    items: checkBoxValues.foodvalue?checkBoxValues.foodvalue:"null",
  };
  const SpecialService = data.SpecialService?data.SpecialService:"null";
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

  const newWeddingForm = WeddingForm({

    eventName,
    userId,
    orderId,
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

  const name_Of_The_Event = checkBoxValues.name_Of_The_Event;

  const newEventName = EventName({
    userId,
    name_Of_The_Event,
  });

  newEventName.save().then(() => console.log("successfully event name saved"));

  newWeddingForm.save().then(() => {
    res.status(200).send("Wedding form saved successfully...!");
  });
  console.log(req.body);
});

module.exports = router;

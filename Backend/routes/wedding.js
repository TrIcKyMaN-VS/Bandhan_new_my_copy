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
  const City = data.city;
  const FromDate = data.fromDate;
  const ToData = data.ToDate;
  const MinBudget = data.Estimate_Budget_Minimum;
  const MaxBudget = data.Estimate_Budget_Maximum;
  const NoOfGuests = data.No_Of_Guests;
  const Services = data.service;
  const Servicevalue = {
    Mehandi: {
      DateMehandiShow: data.DateMehandiShow?data.DateMehandiShow:"-",
      TimeMehandiShow: data.TimeMehandiShow?data.TimeMehandiShow:"-",
    },
    Reception: {
      DateReception: data.DateReception?data.DateReception:"-",
      TimeReception: data.TimeReception? data.TimeReception:"-",
    },
    Phera: {
      DatePhera: data.DatePhera?data.DatePhera:"-",
      TimePhera: data.TimePhera?data.TimePhera:"-",
    },
    Sangeet: {
      DateSangeet: data.DateSangeet?data.DateSangeet:"-",
      TimeSangeet: data.TimeSangeet?data.TimeSangeet:"-",
    },
    Pooja: {
      DatePooja: data.DatePooja?data.DatePooja:"-",
      TimePooja: data.TimePooja?data.TimePooja:"-",
    },
    Baraat: {
      DateBaraat: data.DateBaraat?data.DateBaraat:"-",
      TimeBaraat: data.TimeBaraat? data.TimeBaraat:"-",
    },
    Haldi: {
      DateHaldi: data.DateHaldi?data.DateHaldi:"-",
      TimeHaldi: data.TimeHaldi?data.TimeHaldi:"-",
    },
    Tilak: {
      dateTilak: data.dateTilak?data.dateTilak:"-",
      TimeTilak: data.TimeTilak?data.TimeTilak:"-",
    },
  };
  const ConceptWedding = checkBoxValues.Conceptweddingvalue?checkBoxValues.Conceptweddingvalue:"-";
  const ThemeWedding = checkBoxValues.Themeweddingvalue?checkBoxValues.Themeweddingvalue:"-";
  const Decoration = {
    RegularDecoration: checkBoxValues.decorationvalue?checkBoxValues.decorationvalue:"-",
    ThemeDecoration: data.ThemeDecoration?data.ThemeDecoration:"-",
  };
  const Shows = {
    show: data.shows?data.shows:"-",
    musicvalues: checkBoxValues.musicvalue?checkBoxValues.musicvalue:"-",
    dancevalues: checkBoxValues.dancevalue?heckBoxValues.dancevalue:"-",
    dj: data.Dj?data.Dj:"-",
  };
  const Food = {
    Foodtype: data.Food?data.Food:"-",
    items: checkBoxValues.foodvalue?checkBoxValues.foodvalue:"-",
  };

  const SpecialService = data.SpecialService?data.SpecialService:"-";
  const OtherServices = data.OtherServices? data.OtherServices:"-";
  const OtherServiceValues = {
    invitation: checkBoxValues.invitationvalue?checkBoxValues.invitationvalue:"-",
    photography: checkBoxValues.photovalue?checkBoxValues.photovalue:"-",
    venues: {
      venue1: {
        name: data.venue_1_name?data.venue_1_name:"-",
        place: data.venue_1_place?data.venue_1_place:"-",
      },
      venue2: {
        name: data.venue_2_name? data.venue_2_name:"-",
        place: data.venue_2_place?data.venue_2_place:"-",
      },
      venue3: {
        name: data.venue_3_name?data.venue_3_name:"-",
        place: data.venue_3_place?data.venue_3_place:"-",
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
    isVerified,

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
});

module.exports = router;

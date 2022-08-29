const express = require("express");
const router = express.Router();
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express()
const { v4: uuidv4 } = require('uuid');;
app.use(cors());
// app.use(express.static("files"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const { EventForm } = require("../model/eventModel");
const auth = require("../middleware/auth");
const { EventName } = require("../model/eventName");
const {CorporateEventForm} = require("../model/corporateEvent")

router.post("/", auth, async (req, res) => {
  const data = req.body.data;
  const checkBoxValues = req.body.checkboxValue;

  const eventName = "Corporate Event"
  const orderId = uuidv4().slice(0,6)
  const userId = req.id;
  const TypeOfFunction = data.type_Of_Function;
  const NameOfEvent = data.name_Of_Event;
  const NameOfConcern = data.name_Of_Concern;
  const Date = data.date;
  const FromTime = data.fromTime;
  const ToTime = data.ToTime;
  const MinBudget = data.Estimate_Budget_Minimum;
  const MaxBudget = data.Estimate_Budget_Maximum;
  const NoOfGuests = data.No_Of_Guests;

  const Shows = data.shows;
  const ShowsValue = {
    show: data.shows,
    musicvalues: checkBoxValues.musicvalue,
    dancevalues: checkBoxValues.dancevalue,
    dj: data.dj,
  };
  const Decoration = {
    RegularDecoration: checkBoxValues.decorationvalue,
    ThemeDecoration: data.DecorationType,
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

  const newcorporateeventform = CorporateEventForm({
    eventName,
    orderId,
    userId,
    TypeOfFunction,
    NameOfEvent,
    NameOfConcern,
    Date,
    FromTime,
    ToTime,
    NoOfGuests,
    MinBudget,
    MaxBudget,
    SpecialService,
    Shows,
    ShowsValue,
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
    isVerified
  });

  const name_Of_The_Event = checkBoxValues.name_Of_The_Event;

  const newEventName = EventName({
    userId,
    name_Of_The_Event,
  });

  newEventName.save().then(() => console.log("successfully event name saved"));
  newcorporateeventform.save().then(() => {
    res.status(200).send("Family Function form saved successfully...!");
  });
  console.log("completed!! saved");

  console.log(req.body);
});

module.exports = router;

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
const {PostWeddingForm} = require("../model/postweddingmodel")
router.post("/", auth, async (req, res) => {
  const data = req.body.data;
  const checkBoxValues = req.body.checkBoxValues;

  const eventName = "PostWedding Event"
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
  const NoOfGuests = req.body.data.No_Of_Guests;

  const muhDikhal = data.muh_Dikhal;
  const muhDikhalvalue = {
    musicvalues: checkBoxValues.musicvalue,
    dancevalues: checkBoxValues.dancevalue,
  };
  const SubaarambhYatra = data.subaarambh_Yatra;
  const Honneymoon = {
    DestinationIndia: data.destination_India,
    DestinationAbroad: data.destination_Abroad,
    HonneymoonDays: data.no_of_days_honneymoon,
  };
  const points = "0"
  const SpecialService = data.SpecialService;

  const Food = {
    Foodtype: data.Food,
    items: checkBoxValues.foodvalue,
  };

  // var venueStatus = "pending"
  var cateringStatus = "pending"
  var honeymoonStatus = "pending"
  // var decorationStatus = "pending"
  var isVerified = false
  var foodb = false
   var Honneymoonb = false
  //  var venueb = false
  //  var decorationb = false
   if (Food.Foodtype){
    foodb = true
   }
   if(Honneymoon.DestinationIndia || Honneymoon.DestinationAbroad){
    Honneymoonb= true
   }
  //  if(OtherServiceValues.venues){
  //   venueb = true
  //  }
  //  if(Decoration.RegularDecoration || Decoration.ThemeDecoration){
  //     decorationb = true
  //  }

  const newPostWeddingForm = PostWeddingForm({
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
    muhDikhal,
    muhDikhalvalue,
    SubaarambhYatra,
    Honneymoon,
    SpecialService,
    Food,
    foodb,
    Honneymoonb,
    honeymoonStatus,
    cateringStatus,
    points,
    // venueb,
    // decorationb,
    // status,
    isVerified
  });

  const name_Of_The_Event = checkBoxValues.name_Of_The_Event;

  const newEventName = EventName({
    userId,
    name_Of_The_Event,
  });

  newEventName.save().then(() => console.log("successfully event name saved"));

  newPostWeddingForm.save().then(() => {
    res.status(200).send("Postwedding form saved successfully...!");
  });
  console.log("completed!! saved");

  console.log(req.body);
});

module.exports = router;

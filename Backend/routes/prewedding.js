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
const { PreWeddingForm } = require("../model/preweddingmodel");
const auth = require("../middleware/auth");
const { EventName } = require("../model/eventName");

router.post("/", auth, async (req, res) => {
  const data = req.body.data;
  const checkBoxValues = req.body.checkBoxValues;

  const eventName = "PreWedding Event"
  const userId = req.id;
  const orderId = uuidv4().slice(0,6)
  const ClientName = data.Client_Name;
  const BrideName = data.Bride_Name;
  const GroomName = data.Groom_Name;
  const Person = data.person;
  const date = data.date;
  const City = data.city?data.city:"-";
  const FromDate = data.fromDate;
  const ToData = data.ToDate;
  const BachelorsPartyDate = data.BachelorPartyDate;
  const ShootingDate = data.ShootingDate;
  const MinBudget = data.Estimate_Budget_Minimum;
  const MaxBudget = data.Estimate_Budget_Maximum;

  const BachelorsParty = {
    venues: {
      venue1: {
        name: data.Venue_1_Name?data.Venue_1_Name:"-",
        place: data.Venue_1_Place?data.Venue_1_Place:"-",
      },
      venue2: {
        name: data.Venue_2_Name?data.Venue_2_Name:"-",
        place: data.Venue_2_Place?data.Venue_2_Place:"-",
      },
      venue3: {
        name: data.Venue_3_Name?data.Venue_3_Name:"-",
        place: data.Venue_3_Place?data.Venue_3_Place:"-",
      },
    },
    musicvalues: checkBoxValues.musicvalue?checkBoxValues.musicvalue:"-",
    dancevalues: checkBoxValues.dancevalue? checkBoxValues.dancevalue:"-",
    noofguests: data.No_Of_Guests?data.No_Of_Guests:"-",
  };

  const Shooting = {
    Shooting: data.shooting?data.shooting:"-",
    Destination: data.destination_Place? data.destination_Place:"-",
  };

  const SpecialService = data.SpecialService?data.SpecialService:"-";

  const Food = {
    Foodtype: data.Food?data.Food:"-",
    items: checkBoxValues.foodvalue? checkBoxValues.foodvalue:"-",
  };

  var venueStatus = "pending"
  var cateringStatus = "pending"
  var shootingStatus = "pending"
  // var decorationStatus = "pending"
  var status = "pending"
  var isVerified = false
  var foodb = false
   var shootingb = true
   var venueb = false
  //  var decorationb = false
   if (Food.Foodtype){
    foodb = true
   }
  //  if(OtherServiceValues.photography){
  //   photographyb= true
  //  }
   if(BachelorsParty.venues){
    venueb = true
   }
  //  if(Decoration.RegularDecoration || Decoration.ThemeDecoration){
  //     decorationb = true
  //  }

  const newPreWeddingForm = PreWeddingForm({

    eventName,
    userId,
    orderId,
    ClientName,
    BrideName,
    GroomName,
    Person,
    BachelorsPartyDate,
    ShootingDate,
    City,
    FromDate,
    ToData,
    date,
    MinBudget,
    MaxBudget,
    BachelorsParty,
    SpecialService,
    Shooting,
    Food,
    foodb,
    shootingb,
    venueb,
    // decorationb,
    shootingStatus,
    cateringStatus,
    venueStatus,
    isVerified,

  });

  console.log("def", req.body.name_Of_The_Event);

  // const name_Of_The_Event = checkBoxValues.name_Of_The_Event;
  const name_Of_The_Event = req.body.name_Of_The_Event
  console.log(name_Of_The_Event);

  const newEventName = EventName({
    userId,
    name_Of_The_Event,
  });

  newEventName.save().then(() => console.log("successfully event name saved"));

  newPreWeddingForm.save().then(() => {
    res.status(200).send("Prewedding form saved successfully...!");
    console.log(newPreWeddingForm);
  });
  console.log("completed!! saved");

  console.log(req.body);
});

module.exports = router;

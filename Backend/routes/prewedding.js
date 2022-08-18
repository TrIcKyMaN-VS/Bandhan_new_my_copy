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

router.post("/", auth, async (req, res) => {
  const data = req.body.data;
  const checkBoxValues = req.body.checkBoxValues;

  const userId = req.id;
  const ClientName = data.Client_Name;
  const BrideName = data.Bride_Name;
  const GroomName = data.Groom_Name;
  const Person = data.Person;
  const date = data.date;
  const City = data.City;
  const FromDate = data.fromDate;
  const ToData = data.ToDate;
  const BachelorsPartyDate = data.BachelorPartyDate;
  const ShootingDate = data.ShootingDate;
  const MinBudget = data.Estimate_Budget_Minimum;
  const MaxBudget = data.Estimate_Budget_Maximum;

  const BachelorsParty = {
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
    musicvalues: checkBoxValues.musicvalue,
    dancevalues: checkBoxValues.dancevalue,
    noofguests: data.No_Of_Guests,
  };
  const Shooting = {
    Shooting: data.shooting,
    Destination: data.destination_Place,
  };

  const SpecialService = data.SpecialService;

  const Food = {
    Foodtype: data.Food,
    items: checkBoxValues.foodvalue,
  };
  const newEventForm = EventForm({
    userId,
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
  });
  newEventForm.save().then(() => {
    res.status(200).send("Prewedding form saved successfully...!");
    console.log(newEventForm);
  });
  console.log("completed!! saved");

  console.log(req.body);
});

module.exports = router;

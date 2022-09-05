const express = require("express");
const router = express.Router();
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const { v4: uuidv4 } = require("uuid");
app.use(cors());
app.use(express.static("files"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const { EventForm } = require("../model/eventModel");
const auth = require("../middleware/auth");
const { EventName } = require("../model/eventName");
const {
  PostWeddingForm,
  PostWeddinngInfo,
} = require("../model/postweddingmodel");
router.post("/", auth, async (req, res) => {
  const data = req.body.data;
  const checkBoxValues = req.body.checkBoxValues;

  const eventName = "PostWedding Event";
  const userId = req.id;
  const orderId = uuidv4().slice(0, 6);
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

  const muhDikhal = data.muh_Dikhal ? data.muh_Dikhal : "-";
  const muhDikhalvalue = {
    musicvalues: checkBoxValues.musicvalue ? checkBoxValues.musicvalue : "-",
    dancevalues: checkBoxValues.dancevalue ? checkBoxValues.dancevalue : "-",
  };
  const SubaarambhYatra = data.subaarambh_Yatra ? data.subaarambh_Yatra : "-";
  const Honneymoon = {
    DestinationIndia: data.destination_India ? data.destination_India : "-",
    DestinationAbroad: data.destination_Abroad ? data.destination_Abroad : "-",
    HonneymoonDays: data.no_of_days_honneymoon
      ? data.no_of_days_honneymoon
      : "-",
  };
  const SpecialService = data.SpecialService ? data.SpecialService : "-";

  const Food = {
    Foodtype: data.Food ? data.Food : "-",
    items: checkBoxValues.foodvalue ? checkBoxValues.foodvalue : "-",
  };

  var cateringStatus = "pending";
  // var honeymoonStatus = "pending";
  var isVerified = false;
  var foodb = false;
  var Honneymoonb = false;
  if (Food.Foodtype) {
    foodb = true;
  }
  if (
    Honneymoon.DestinationIndia.length > 1 ||
    Honneymoon.DestinationAbroad.length > 1
  ) {
    Honneymoonb = true;
  }

  let muh_DikhaiReason;
  let muh_DikhaiPromiseDate;
  let muh_Dikhaistatus;
  let muh_DikhaiConfirmation;

  if (muhDikhal[0] != undefined) {
    if (muhDikhal[0].length > 1) {
      (muh_DikhaiReason = "-"), (muh_DikhaiConfirmation = "Not Confirmed");
      (muh_Dikhaistatus = "pending"), (muh_DikhaiPromiseDate = "");
    }
  } else {
    (muh_DikhaiReason = null), (muh_DikhaiConfirmation = null);
    (muh_Dikhaistatus = null), (muh_DikhaiPromiseDate = null);
  }
  let honeymoonReason;
  let honeymoonConfirmation;
  let honeymoonstatus;
  let honeymoonPromiseDate;

  if (
    Honneymoon.DestinationIndia.length > 1 ||
    Honneymoon.DestinationAbroad.length > 1
  ) {
    (honeymoonReason = "-"), (honeymoonConfirmation = "Not Confirmed");
    (honeymoonstatus = "pending"), (honeymoonPromiseDate = "");
  } else {
    (honeymoonReason = null), (honeymoonConfirmation = null);
    (honeymoonstatus = null), (honeymoonPromiseDate = null);
  }

  let subaarambhYatraReason;
  let subaarambhYatraConfirmation;
  let subaarambhYatrastatus;
  let subaarambhYatraPromiseDate;

  if (SubaarambhYatra[0] != undefined) {
    if (SubaarambhYatra[0].length > 1) {
      (subaarambhYatraReason = "-"), (subaarambhYatraConfirmation = "Not Confirmed");
      (subaarambhYatrastatus = "pending"), (subaarambhYatraPromiseDate = "");
    }
  } else {
    (subaarambhYatraReason = null), (subaarambhYatraConfirmation = null);
    (subaarambhYatrastatus = null), (subaarambhYatraPromiseDate = null);
  }

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
    // honeymoonStatus,
    cateringStatus,

    isVerified,
  });

  const name_Of_The_Event = checkBoxValues.name_Of_The_Event;

  const newPostWeddingInfo = PostWeddinngInfo({
    userId,
    eventName,
    orderId,
    honeymoonReason,
    honeymoonConfirmation,
    honeymoonstatus,
    honeymoonPromiseDate,
    subaarambhYatraReason,
    subaarambhYatraConfirmation,
    subaarambhYatrastatus,
    subaarambhYatraPromiseDate,
    muh_DikhaiReason,
    muh_DikhaiPromiseDate,
    muh_Dikhaistatus,
    muh_DikhaiConfirmation,
  });

  const newEventName = EventName({
    userId,
    name_Of_The_Event,
  });

  newPostWeddingInfo.save().then(() => console.log("saved..."));

  newEventName.save().then(() => console.log("successfully event name saved"));

  newPostWeddingForm.save().then(() => {
    console.log(fffs);
    res.status(200).send("Postwedding form saved successfully...!");
  });

});

router.get("/postweddingInfo/:orderIdp", (req, res) => {
  // console.log(req.params.orderIdp);
  PostWeddinngInfo.find({ orderId: req.params.orderIdp }, (err, doc) => {
    if (err) {
      console.log(err);
      res.status(400).send(err);
    } else {
      // console.log(doc);
      res.status(200).send(doc);
    }
  });
});

router.post("/updateInfos", (req, res) => {
  const datass = req.body.eventDatas;
  PostWeddinngInfo.findOneAndUpdate(
    { orderId: datass.orderId },
    {
      $set: {
        honeymoonstatus: datass.honeymoonstats,
        honeymoonConfirmation: datass.honeymoonConf,
        honeymoonPromiseDate: datass.honeymoonPromiseDat,
        honeymoonReason: datass.honeymoonReas,
        muh_DikhaiConfirmation: datass.muh_DikhaiConf,
        muh_DikhaiPromiseDate: datass.muh_DikhaiPromiseDat,
        muh_Dikhaistatus: datass.muh_Dikhaistats,
        muh_DikhaiReason: datass.muh_DikhaiReas,
        subaarambhYatraConfirmation: datass.subaarambhYatraConf,
        subaarambhYatraPromiseDate: datass.subaarambhYatraPromiseDat,
        subaarambhYatraReason: datass.subaarambhYatraReas,
        subaarambhYatrastatus: datass.subaarambhYatrastats,
      },
    },
    (err, doc) => {
      if (err) {
        console.log(err);
        res.status(400).send(err);
      } else {
        // console.log(doc);
        res.status(200).send(doc);
      }
    }
  );
});

module.exports = router;

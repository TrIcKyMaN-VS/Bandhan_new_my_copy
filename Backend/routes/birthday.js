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
const { BirthdayForm ,BirthdayInfo} = require("../model/birthdaymodel");
const auth = require("../middleware/auth");

//routes
router.post("/", auth, async (req, res) => {
  const eventName = "Birthday Event";
  const orderId = uuidv4().slice(0,6)
  const userId = req.id;
  const BirthdayPersonName = req.body.data.Birthday_Person_name;
  const Age = req.body.data.Age;
  const Gender = req.body.data.gender;
  const City = req.body.data.city;
  const FromTime = req.body.data.fromTime?req.body.data.fromTime:"-";
  const ToTime = req.body.data.ToTime?req.body.data.ToTime:"-";
  const date = req.body.data.date?req.body.data.date:"-";
  const NoOfGuests = req.body.data.No_Of_Guests?req.body.data.No_Of_Guests:"-";
  const MinBudget = req.body.data.Estimate_Budget_Minimum?req.body.data.Estimate_Budget_Minimum:"-";
  const MaxBudget = req.body.data.Estimate_Budget_Maximum?req.body.data.Estimate_Budget_Maximum:"-";
  const Shows = {
    show: req.body.data.shows?req.body.data.shows:"-",
    musicvalues: req.body.checkBoxValues.musicvalue? req.body.checkBoxValues.musicvalue:"-",
    dancevalues: req.body.checkBoxValues.dancevalue?req.body.checkBoxValues.dancevalue:"-",
    dj: req.body.data.dj? req.body.data.dj:"-",
  };
  const Decoration = {
    RegularDecoration: req.body.checkBoxValues.decorationvalue?req.body.checkBoxValues.decorationvalue:"-",
    ThemeDecoration: req.body.data.DecorationType?req.body.data.DecorationType:"-",
  };
  const SpecialService = req.body.data.SpecialService?req.body.data.SpecialService:"-";
  const OtherServices = req.body.data.OtherServices?req.body.data.OtherServices:"-";
  const OtherServiceValues = {
    invitation: req.body.checkBoxValues.invitationvalue?req.body.checkBoxValues.invitationvalue:"-",
    photography: req.body.checkBoxValues.photovalue?req.body.checkBoxValues.photovalue:"-",
    venues: {
      venue1: {
        name: req.body.data.venue_1_name? req.body.data.venue_1_name:"-",
        place: req.body.data.venue_1_place?req.body.data.venue_1_place:"-",
      },
      venue2: {
        name: req.body.data.venue_2_name?req.body.data.venue_2_name:"-",
        place: req.body.data.venue_2_place?req.body.data.venue_2_place:"-",
      },
      venue3: {
        name: req.body.data.venue_3_name?req.body.data.venue_3_name:"-",
        place: req.body.data.venue_3_place?req.body.data.venue_3_place:"-",
      },
    },
  };
  // const Photography = {
  //     photography : req.body.checkBoxValues.photovalue
  // }
  console.log(req.body);
  const Food = {
    Foodtype: req.body.data.Food?req.body.data.Food:"-",
    items: req.body.checkBoxValues.foodvalue?req.body.checkBoxValues.foodvalue:"-",
  };

  // var venueStatus = "pending"
  // var cateringStatus = "pending"
  // var photographyStatus = "pending"
  // var decorationStatus = "pending"
  // var isVerified = false
  // var foodb = false
  //  var photographyb = false
  //  var venueb = false
  //  var decorationb = false
  //  if (Food.Foodtype){
  //   foodb = true
  //  }
  //  if(OtherServiceValues.photography){
  //   photographyb= true
  //  }
  //  if(OtherServiceValues.venues){
  //   venueb = true
  //  }
  //  if(Decoration.RegularDecoration || Decoration.ThemeDecoration){
  //     decorationb = true
  //  }
  //    console.log(req.body);

  const newBirthdayForm = BirthdayForm({
    eventName,
    orderId,
    userId,
    BirthdayPersonName,
    Age,
    Gender,
    City,
    FromTime,
    ToTime,
    date,
    NoOfGuests,
    MinBudget,
    MaxBudget,
    Shows,
    Decoration,
    SpecialService,
    OtherServices,
    OtherServiceValues,
    // Photography,
    Food,
    // foodb,
    // photographyb,
    // venueb,
    // decorationb,
    // venueStatus,
    // photographyStatus,
    // decorationStatus,
    // cateringStatus,
    // isVerified,
  });


  let invitationReason;
  let invitationStatus;
  let invitationPromiseDate;
  let invitationService;

  let beautyReason;
  let beautyStatus;
  let beautyPromiseDate;
  let beautyService;

  let venueReason;
  let venueStatus;
  let venuePromiseDate;
  let venueService;

  let photographyReason;
  let photographyStatus;
  let photographyPromiseDate;
  let photographyService;

  let cateringReason;
  let cateringStatus;
  let cateringPromiseDate;
  let cateringService;

  let decorationReason;
  let decorationStatus;
  let decorationPromiseDate;
  let decorationService;

  let showsReason;
  let showsStatus;
  let showsPromiseDate;
  let showsService;

  let AdditionalReason;
  let AdditionalStatus;
  let AdditionalPromiseDate;
  let AdditionalService;


  if (req.body.data.OtherServices.includes("venue")) {
    venueStatus = "pending";
    venueReason = "-";
    venuePromiseDate = "";
    venueService = "Not Confirmed";
  } else {
    venueStatus = null;
    venueReason = null;
    venuePromiseDate = null;
    venueService = null;
  }

  if (req.body.data.SpecialService) {
    AdditionalStatus = "pending";
    AdditionalReason = "-";
    AdditionalPromiseDate = "";
    AdditionalService = "Not Confirmed";
  } else {
    AdditionalStatus = null;
    AdditionalReason = null;
    AdditionalPromiseDate = null;
    AdditionalService = null;
  }

  if (req.body.data.OtherServices.includes("photography")) {
    photographyStatus = "pending";
    photographyReason = "-";
    photographyPromiseDate = "";
    photographyService = "Not Confirmed";
  } else {
    photographyStatus = null;
    photographyReason = null;
    photographyPromiseDate = null;
    photographyService = null;
  }
  if (req.body.data.Food) {
    cateringStatus = "pending";
    cateringReason = "-";
    cateringPromiseDate = "";
    cateringService = "Not Confirmed";
  } else {
    cateringStatus = null;
    cateringReason = null;
    cateringPromiseDate = null;
    cateringService = null;
  }

  if (req.body.data.shows[0] != undefined) {
    showsStatus = "pending";
    showsReason = "-";
    showsPromiseDate = "";
    showsService = "Not Confirmed";
  } else {
    showsStatus = null;
    showsReason = null;
    showsPromiseDate = null;
    showsService = null;
  }

  if (req.body.data.OtherServices.includes("invitation")) {
    invitationStatus = "pending";
    invitationReason = "-";
    invitationPromiseDate = "";
    invitationService = "Not Confirmed";
  } else {
    invitationStatus = null;
    invitationReason = null;
    invitationPromiseDate = null;
    invitationService = null;
  }
  if (req.body.checkBoxValues.decorationvalue || req.body.data.ThemeDecoration) {
    decorationStatus = "pending";
    decorationReason = "-";
    decorationPromiseDate = "";
    decorationService = "Not Confirmed";
  } else {
    decorationStatus = null;
    decorationReason = null;
    decorationPromiseDate = null;
    decorationService = null;
  }

  if (!!req.body.data.OtherServices.includes("beauty")) {
    beautyStatus = "pending";
    beautyReason = "-";
    beautyPromiseDate = "";
    beautyService = "Not Confirmed";
  } else {
    beautyStatus = null;
    beautyReason = null;
    beautyPromiseDate = null;
    beautyService = null;
  }

  const newBirthdayInfo = BirthdayInfo({
    eventName,
    userId,
    orderId,
    invitationReason,
    invitationStatus,
    invitationPromiseDate,
    invitationService,
    beautyReason,
    beautyStatus,
    beautyPromiseDate,
    beautyService,
    venueReason,
    venueStatus,
    venuePromiseDate,
    venueService,
    photographyReason,
    photographyStatus,
    photographyPromiseDate,
    photographyService,
    cateringReason,
    cateringStatus,
    cateringPromiseDate,
    cateringService,
    decorationReason,
    decorationStatus,
    decorationPromiseDate,
    decorationService,
    showsReason,
    showsStatus,
    showsPromiseDate,
    showsService,
    AdditionalReason,
    AdditionalStatus,
    AdditionalPromiseDate,
    AdditionalService,
  
  });

  newBirthdayInfo.save().then(()=>console.log("success infowed saved"))


  newBirthdayForm.save().then(() => {
    res.status(200).send("birthday form saved successfully...!");
  });
  // console.log( );
});



router.get("/birthdayInfo/:orderIdp", (req, res) => {
  // console.log(req.params.orderIdp);
  BirthdayInfo.find({ orderId: req.params.orderIdp }, (err, doc) => {
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
  BirthdayInfo.findOneAndUpdate(
    { orderId: datass.orderId },
    {
      $set: {
        invitationReason: datass.invitationReas,
        invitationStatus: datass.invitationstats,
        invitationPromiseDate: datass.invitationPromiseDat,
        invitationService: datass.invitationConf,
        beautyReason: datass.beautyReas,
        beautyStatus: datass.beautystats,
        beautyPromiseDate: datass.beautyPromiseDat,
        beautyService: datass.beautyConf,
        venueReason: datass.venueReas,
        venueStatus: datass.venuestats,
        venuePromiseDate: datass.venuePromiseDat,
        venueService: datass.venueConf,
        photographyReason: datass.photographyReas,
        photographyStatus: datass.photographystats,
        photographyPromiseDate: datass.photographyPromiseDat,
        photographyService: datass.photographyConf,
        cateringReason: datass.cateringReas,
        cateringStatus: datass.cateringstats,
        cateringPromiseDate: datass.cateringPromiseDat,
        cateringService: datass.cateringConf,
        decorationReason: datass.decorationReas,
        decorationStatus: datass.decorationstats,
        decorationPromiseDate: datass.decorationPromiseDat,
        decorationService: datass.decorationConf,
        showsReason: datass.showsReas,
        showsStatus: datass.showsstats,
        showsPromiseDate: datass.showsPromiseDat,
        showsService: datass.showsConf,
        pandit_JiReason: datass.pandit_JiReas,
        pandit_JiStatus: datass.pandit_Jistats,
        pandit_JiPromiseDate: datass.pandit_JiPromiseDat,
        pandit_JiService: datass.pandit_JiConf,
        mehandiReason: datass.mehandiReas,
        mehandiStatus: datass.mehandistats,
        mehandiPromiseDate: datass.mehandiPromiseDat,
        mehandiService: datass.mehandiConf,
        hostingReason: datass.hostingReas,
        hostingStatus: datass.hostingstats,
        hostingPromiseDate: datass.hostingPromiseDat,
        hostingService: datass.hostingConf,
        AdditionalReason: datass.additionalReas,
        AdditionalStatus: datass.additionalstats,
        AdditionalPromiseDate: datass.additionalPromiseDat,
        AdditionalService: datass.additionalConf,
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

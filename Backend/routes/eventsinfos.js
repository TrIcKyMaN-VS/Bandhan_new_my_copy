const express = require("express");
const router = express.Router();
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const auth = require("../middleware/auth");
const { EventForm } = require("../model/eventModel");
const { PreWeddingForm } = require("../model/preweddingmodel");
const { EngagementForm } = require("../model/engagementmodel");
const { BirthdayForm } = require("../model/birthdaymodel");
const { PostWeddingForm } = require("../model/postweddingmodel");
const { CorporateEventForm } = require("../model/corporateEvent");
const { FamilyFunctionForm } = require("../model/familyFunction");
const { WeddingForm } = require("../model/weddingmodel");
const { EventName } = require("../model/eventName");
const { BabyShowerForm } = require("../model/babyshowermodel");
const { resolveContent } = require("nodemailer/lib/shared");
const {User} = require("../model/user")

router.get("/prewedding", auth, (req, res) => {
  PreWeddingForm.find({ userId: req.id },(err, doc) => {
    if (doc) {
      res.json(doc)
    }
  })
})

router.get("/babyshower", auth, (req, res) => {
  console.log("req rec eventinfo");
  BabyShowerForm.find({ userId: req.id }, (err, doc) => {
    if (doc) {
      res.json(doc)
    }
  })
})
router.get("/wedding", auth, (req, res) => {
  console.log("req rec eventinfo");
  WeddingForm.find({ userId: req.id }, (err, doc) => {
    if (doc) {
      res.json(doc)
    }
  })
})
router.get("/engagement", auth, (req, res) => {
  console.log("req rec eventinfo");
  EngagementForm.find({ userId: req.id }, (err, doc) => {
    if (doc) {
      res.json(doc)
    }
  })
})
router.get("/postwedding", auth, (req, res) => {
  console.log("req rec eventinfo");
  PostWeddingForm.find({ userId: req.id }, (err, doc) => {
    if (doc) {
      res.json(doc)
    }
  })
})
router.get("/birthday", auth, (req, res) => {
  console.log("req rec eventinfo");
  BirthdayForm.find({ userId: req.id }, (err, doc) => {
    if (doc) {
      res.json(doc)
    }
  })
})
router.get("/corporate", auth, (req, res) => {
  console.log("req rec eventinfo");
  CorporateEventForm.find({ userId: req.id }, (err, doc) => {
    if (doc) {
      res.json(doc)
    }
  })
})
router.get("/familyfunction", auth, (req, res) => {
  console.log("req rec eventinfo");
  FamilyFunctionForm.find({ userId: req.id }, (err, doc) => {
    if (doc) {
      res.json(doc)
    }
  })
})




//points:

//post wedding 
router.get("/postweddingpoints", async  (req, res) => {
  const value = await User.find( { _id: req.id }, { points: 1,voucher:1 } )
  res.status(200).send(value)
   console.log("successfully completed!!!");
  })

//pre wedding 
router.get("/preweddingpoints", async  (req, res) => {
  const value = await User.find( { _id: req.id}, { points: 1,voucher:1 } )
  res.status(200).send(value)
   console.log("successfully completed!!!");
  })

// wedding
router.get("/weddingpoints", async  (req, res) => {
  const value = await User.find( { _id: req.id}, { points: 1,voucher:1 } )
  res.status(200).send(value)
   console.log("successfully completed!!!");
  })

//baby shower
router.get("/babyshowerpoints", async  (req, res) => {
  const value = await User.find( { _id: req.id}, { points: 1,voucher:1 } )
  res.status(200).send(value)
   console.log("successfully completed!!!");
  })


//birthday
router.get("/birthdaypoints", async  (req, res) => {
  const value = await User.find( { _id: req.id}, { points: 1,voucher:1 } )
  res.status(200).send(value)
   console.log("successfully completed!!!");
  })

// family function
router.get("/familyfunctionpoints", async  (req, res) => {
  const value = await User.find( { _id: req.id}, { points: 1,voucher:1 } )
  res.status(200).send(value)
   console.log("successfully completed!!!");
  })

// corporate 

router.get("/corporatepoints", async  (req, res) => {
  const value = await User.find( { _id: req.id}, { points: 1,voucher:1 } )
  res.status(200).send(value)
   console.log("successfully completed!!!");
  })

// engagement
router.get("/engagementpoints", async  (req, res) => {
  const value = await User.find( { _id: req.id}, { points: 1,voucher:1 } )
  res.status(200).send(value)
   console.log("successfully completed!!!");
  })







  //EVent info

  router.get("/getname", async  (req, res) => {
    const value = await User.find( { _id: req.id}, { username: 1, } )
    res.status(200).send(value)
     console.log("successfully completed!!!");
    })
module.exports = router;

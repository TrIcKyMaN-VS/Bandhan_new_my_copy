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

router.get("/", auth, (req, res) => {
  console.log("req rec eventinfo");

  const functions23 = ["preWeddingForm", "postWeddingForm"];

  EventName.find({ userId: req.id }, (err, doc) => {
    if (err) {
      res.status(400).send(err);
      console.log(err);
    } else {
      const modelName = [];
      doc.map((item) => {
        modelName.push(item.name_Of_The_Event);
      });
      // console.log(modelName);

      const datas = [];

      modelName.map((item) => {
        if ("preWeddingForm" === item) {
          PreWeddingForm.find({ userId: req.id }, (err, doc) => {
            if (doc) {
              console.log(doc);
              datas.push(doc);
            }
          });
        } else if ("EngagementForm" === item) {
          EngagementForm.find({ userId: req.id }, (err, doc) => {
            if (doc) {
              //   console.log(doc);
              datas.push(doc);
            }
          });
        } else if ("PostWeddingForm" === item) {
          PostWeddingForm.find({ userId: req.id }, (err, doc) => {
            if (doc) {
              //   console.log(doc);
              datas.push(doc);
            }
          });
        } else if ("WeddingForm" === item) {
          WeddingForm.find({ userId: req.id }, (err, doc) => {
            if (doc) {
              //   console.log(doc);
              datas.push(doc);
            }
          });
        }
        // else if("BabyShowerForm" === item){
        //     BabyShowerForm.find({ userId: req.id }, (err, doc) => {
        //         if (doc) {
        //           console.log(doc);
        //         }
        //     })
        // }
        else if ("BirthdayForm" === item) {
          BirthdayForm.find({ userId: req.id }, (err, doc) => {
            if (doc) {
              //   console.log(doc);
              datas.push(doc);
            }
          });
        } else if ("CorporateEventForm" === item) {
          CorporateEventForm.find({ userId: req.id }, (err, doc) => {
            if (doc) {
              //   console.log(doc);
              datas.push(doc);
            }
          });
        } else if ("FamilyFunctionForm" === item) {
          FamilyFunctionForm.find({ userId: req.id }, (err, doc) => {
            if (doc) {
              //   console.log(doc);
              datas.push(doc);
            }
          });
        }
      });
      console.log(datas);
      // for (const item of functions) {
      //     for (const item1 of modelName) {
      //         if(item == item1){
      //             console.log("finder",item);
      //         }
      //     }
      // }

      // modelName.map(item => {
      // PreWeddingForm.find({userId: req.id}, (err,doc)=>{
      // if(doc){
      // datas.push(doc)
      // console.log(doc);
      // }
      // })
      // })

      //   console.log(datas);
      // res.send("got it")
    }
  });

  // EventForm.find({userId : req.id}, (err,doc) => {
  //     if(err){
  //         res.status(400).send(err)
  //         console.log(err);
  //     }else{
  //         console.log(doc);
  //         res.send("got it")
  //     }
  // })
});

module.exports = router;

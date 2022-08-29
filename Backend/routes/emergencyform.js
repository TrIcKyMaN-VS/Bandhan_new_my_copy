const express = require("express");
const router = express.Router();
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
app.use(cors());
app.use(express.static("files"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const auth = require("../middleware/auth");
const {EmergencyForm} = require("../model/emergencyform")
//routes

router.post("/", auth, async (req, res) => {
  const data = req.body.data;
  const username = data.username;
  const nameoftheservice = data.nameoftheservice;
  const previousorderId = data.previousorderId;
  const phone = data.phone;
  const userId = req.id
  const date = data.date;
  const email = data.email;


  const newEmergencyForm = EmergencyForm({
    date,
    username,
    nameoftheservice,
    previousorderId,
    phone,
    userId,
    email
  });

newEmergencyForm.save().then(() => {
    res.status(200).send("EmergencyForm form saved successfully...!");
  });
  console.log("completed!! saved");

});

router.get("/", async (req, res) => {
    //    const users = await User.find()
    //    console.log(users);
    const users = await EmergencyForm.aggregate([
        { $project :{username:1 ,email :1,phone:1,nameoftheservice:1,previousorderId:1,date:1  } }
      ])
      res.status(200).send(users)
    
    })


    const {Vendor} = require("../model/becomeVendor.model")
    
    router.get("/vendor", async (req, res) => {
        //    const users = await User.find()
        //    console.log(users);
        const users = await Vendor.aggregate([
            { $project :{name :1,vendorType:1,email:1,city:1, area:1,phoneNo:1 } }
          ])
          res.status(200).send(users)
        
        })

module.exports = router;

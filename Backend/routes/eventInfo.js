const express = require('express')
const router = express.Router()
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const auth = require("../middleware/auth");
const { EventForm } = require('../model/eventModel');

router.get("/",auth, (req,res) => {
    console.log("req rec eventinfo");
    EventForm.find({userId : req.id}, (err,doc) => {
        if(err){
            res.status(400).send(err)
            console.log(err);
        }else{
            console.log(doc[0]);
            res.send("got it")
        }
    })
})


module.exports = router;
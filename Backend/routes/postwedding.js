const express = require('express')
const router = express.Router()
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
app.use(cors());
app.use(express.static("files"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const { PostWeddingForm } = require("../model/postweddingmodel");
const auth = require('../middleware/auth')

router.post("/",auth,async(req,res) => {
    const data = req.body.data
    const checkBoxValues = req.body.checkBoxValues

    const userId = req.id
    const ClientName = data.Client_Name
    const BrideName = data.Bride_Name
    const GroomName = data.Groom_Name
    const date = data.date
    const City = data.City
    const FromDate = data.fromDate
    const ToData = data.ToDate
    const MinBudget = data.Estimate_Budget_Minimum
    const MaxBudget = data.Estimate_Budget_Maximum
    const NoOfGuests = req.body.data.No_Of_Guests

    const muhDikhal = data.muh_Dikhal
    const muhDikhalvalue ={
        
        musicvalues : checkBoxValues.musicvalue,
        dancevalues : checkBoxValues.dancevalue,
    }
    const SubaarambhYatra = data.subaarambh_Yatra
    const Honneymoon ={
        DestinationIndia  :data.destination_India,
        DestinationAbroad :data.destination_Abroad,
        HonneymoonDays : data.no_of_days_honneymoon
    }
   
    const SpecialService = data.SpecialService
   
    const Food ={
        Foodtype:data.Food,
        items : checkBoxValues.foodvalue
    }
    const newPostWeddingForm = PostWeddingForm({
        userId,
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
        Food

    })
    newPostWeddingForm
    .save()
    .then(() => res.status(200).send("Postwedding form saved successfully...!"));
    console.log( "completed!! saved");

    console.log(req.body);


})

module.exports = router;
const express = require('express')
const router = express.Router()
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
app.use(cors());
app.use(express.static("files"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const { EventForm } = require("../model/eventModel");
const auth = require('../middleware/auth')

//routes
router.post("/",auth,async(req,res) => {

        const userId = req.id
        const BirthdayPersonName = req.body.data.Birthday_Person_name
        const Age = req.body.data.Age
        const Gender = req.body.data.gender
        const City = req.body.data.city
        const FromTime = req.body.data.FromTime
        const ToTime = req.body.data.ToTime
        const date = req.body.data.date
        const NoOfGuests = req.body.data.No_Of_Guests
        const MinBudget = req.body.data.Estimate_Budget_Minimum
        const MaxBudget = req.body.data.Estimate_Budget_Maximum
        const Shows = {
            show:req.body.data.shows,
            musicvalues : req.body.checkBoxValues.musicvalue,
            dancevalues : req.body.checkBoxValues.dancevalue,
            dj : req.body.data.dj
        }
        const Decoration = {
            RegularDecoration : req.body.checkBoxValues.decorationvalue,
            ThemeDecoration : req.body.data.DecorationType
        }
        const SpecialService = req.body.data.SpecialService
        const OtherServices = req.body.data.OtherServices
        const OtherServiceValues = {
            invitation : req.body.checkBoxValues.invitationvalue,
            photography : req.body.checkBoxValues.photovalue,
            venues : {
                venue1 :{
                    name : req.body.data.venue_1_name,
                    place : req.body.data.venue_1_name
                },
                venue2 :{
                    name : req.body.data.venue_2_name,
                    place : req.body.data.venue_2_name
                },
                venue3 :{
                    name : req.body.data.venue_3_name,
                    place : req.body.data.venue_3_name
                }
            }
        }
        // const Photography = {
        //     photography : req.body.checkBoxValues.photovalue
        // }
        // console.log(photography);
        const Food ={
            Foodtype:req.body.data.Food,
            items : req.body.checkBoxValues.foodvalue
        }

    //    console.log(req.body);

        const newEventForm = EventForm({
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
            Food

        })
        newEventForm
        .save()
        .then(() => {res.status(200).send("birthday form saved successfully...!")
        console.log(newEventForm);
    })
        // console.log( );

    
})



module.exports = router;
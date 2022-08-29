const express = require("express");
const router = express.Router();
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const {User} = require("../model/user")
const {BirthdayForm} = require("../model/birthdaymodel")
const {EngagementForm} = require("../model/engagementmodel")
const {PreWeddingForm} = require("../model/preweddingmodel")
const {PostWeddingForm} = require("../model/postweddingmodel")
const {WeddingForm} = require("../model/weddingmodel")
const {BabyShowerForm} = require("../model/babyshowermodel")
const {FamilyFunctionForm} = require("../model/familyFunction")
const {CorporateEventForm} = require("../model/corporateEvent")
async function gettingdata(res,formdata){
  var list = []
  await Promise.all(formdata.map(async (user)=>{
    var users = await User.find({_id:user.userId})
    list.push([users[0],user.orderId, user.createdAt])
  
  }))
  res.status(200).send(list)
  
}

//birthday
router.get("/birthdayorder", async (req, res) => {
const formdata = await BirthdayForm.aggregate([
    { $project :{userId:1, orderId:1,createdAt :1} }
  ])
 await  gettingdata(res,formdata)
  
})

//engagement
router.get("/engagementorder", async (req, res) => {
  const formdata = await EngagementForm.aggregate([
      { $project :{userId:1, orderId:1,createdAt :1} }
    ])
   await  gettingdata(res,formdata)
    
  })

//pre wedding
router.get("/preweddingorder", async (req, res) => {
    const formdata = await PreWeddingForm.aggregate([
        { $project :{userId:1, orderId:1,createdAt :1} }
      ])
      await gettingdata(res,formdata)
      
    })

//post wedding
router.get("/postweddingorder", async (req, res) => {
      const formdata = await PostWeddingForm.aggregate([
          { $project :{userId:1, orderId:1,createdAt :1} }
        ])
        await gettingdata(res,formdata)
        
 })

//wedding
router.get("/weddingorder", async (req, res) => {
  const formdata = await WeddingForm.aggregate([
      { $project :{userId:1, orderId:1,createdAt :1} }
    ])
    await gettingdata(res,formdata)
    
})

//Baby shower
router.get("/babyshowerorder", async (req, res) => {
  const formdata = await BabyShowerForm.aggregate([
      { $project :{userId:1, orderId:1,createdAt :1} }
    ])
    await gettingdata(res,formdata)
    
})

//Corporate
router.get("/corporateorder", async (req, res) => {
  const formdata = await CorporateEventForm.aggregate([
      { $project :{userId:1, orderId:1,createdAt :1} }
    ])
    await gettingdata(res,formdata)
    
})

//afmily function
router.get("/familyfunctionorder", async (req, res) => {
  const formdata = await FamilyFunctionForm.aggregate([
      { $project :{userId:1, orderId:1,createdAt :1} }
    ])
    await gettingdata(res,formdata)
    
})

router.get("/", async (req, res) => {
//    const users = await User.find()
//    console.log(users);
const users = await User.aggregate([
    { $project :{username:1 ,email :1,phone:1} }
  ])
  res.status(200).send(users)

})






module.exports = router
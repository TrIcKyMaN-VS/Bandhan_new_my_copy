const express = require("express");
const router = express.Router();
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const {User} = require("../model/user")


router.get("/", async (req, res) => {
//    const users = await User.find()
//    console.log(users);
const users = await User.aggregate([
    { $project :{username:1 ,email :1,phonenumber:1} }
  ])
  res.status(200).send(users)

})






module.exports = router;
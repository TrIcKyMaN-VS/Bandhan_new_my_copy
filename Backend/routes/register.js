const express = require("express");
const jwt = require("jsonwebtoken");
const config = require("config");
const app = express();
const router = express.Router();
const bcrypt = require("bcrypt");
const cookieParser = require('cookie-parser');
const mongoose = require("mongoose");
const { User, validate } = require("../model/user");
const _ = require("lodash");
const auth = require("../middleware/auth");

// router.get("/me", auth, async (req, res) => {
//   const user = await User.findById(req.user._id).select("-password");
//   res.send(user);
// });

app.use(cookieParser());


router.post("/", async (req, res) => {
  console.log(req.body);
  const { error } = validate(req.body);

  if (error) {
    console.log("error");
    return res.status(400).send(error.details[0].message);
  }

  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send("User already registered...");

  user = new User(_.pick(req.body, ["username", "email", "password"]));
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);

  await user.save();

   res.status(200).send("USer Regisstered  SuccessFully...!")
});

module.exports = router;

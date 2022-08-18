const express = require('express')
const router = express.Router()
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

router.get("/", (req,res) => {
    console.log("req rec eventinfo");
    
})


module.exports = router;
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { urlencoded } = require("express");
const app = express();
const fileupload = require("express-fileupload");
const cookieParser = require("cookie-parser");
app.use(cookieParser());
app.use(cors());
app.use(fileupload());
app.use(express.static("files"));
app.use(express.json());
app.use(urlencoded({ extended: true }));

require("./startups/db")();
require("./startups/config")();
require("./startups/routes")(app);

// const port = process.env.PORT || 3001;
const port = 3001;
app.listen(port, () => {
  console.log(`listening port on ${port}`);
});

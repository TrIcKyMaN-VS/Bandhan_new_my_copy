const register = require("../routes/register");
const login = require("../routes/login");
const profile = require("../routes/profile");
const wedding = require("../routes/wedding");
const familyFunction = require("../routes/familyFunction");
const corporateEvent = require("../routes/corporateEvent");
const birthday = require("../routes/birthday")
const engagement = require("../routes/engagement")
const prewedding = require("../routes/prewedding")
const postwedding = require("../routes/postwedding")
const babyshower = require("../routes/babyshower")
const eventsinfos = require("../routes/eventsinfos")
const home = require("../routes/home");
const todo = require("../routes/todo");
const newPassword = require("./../routes/newPassword");
const passwordReset = require("./../routes/passwordReset");
const adminuserlist = require("./../routes/adminuserlist");
const becomeVendor = require("../routes/becomeVendor")
const emergencyform = require("../routes/emergencyform")
const setUsers = require('../routes/setUser')
const imgupload = require('../routes/imgupload');
const logout = require("../controllers/user-controller");
const birthdayorder = require("../routes/adminorderslist/birthdayorder")
const vendoradminlist = require("../routes/vendoradminlist")

module.exports = function (app) {
  app.use("/api/register", register);
  app.use("/api/login", login);
  app.use("/api/logout", login);
  app.use("/api/passwordReset", passwordReset);
  app.use("/api/newPassword", newPassword);
  app.use("/api/becomeVendor", becomeVendor)
  app.use("/api/profile", profile);
  app.use("/api/home", home);
  app.use("/api/setUser", setUsers)
  app.use("/api/todo",todo )
  app.use("/api/birthday", birthday )
  app.use("/api/engagement", engagement )
  app.use("/api/prewedding", prewedding)
  app.use("/api/postwedding", postwedding)
  app.use("/api/babyshower", babyshower)
  app.use("/api/wedding", wedding)
  app.use("/api/familyFunction", familyFunction)
  app.use("/api/corporateEvent", corporateEvent)
  app.use("/api/eventInfo",eventsinfos )
  app.use("/api/adminuserlist", adminuserlist)
  app.use("/api/emergencyform",emergencyform)
  app.use("/api/vendoradminlist",vendoradminlist)
};

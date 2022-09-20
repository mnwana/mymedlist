const router = require("express").Router();
const sequelize = require("../config/connection");
const { User, List, PatientDetails, ProviderDetails } = require("../models");

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

router.get("/", (req, res) => {
  res.render("homepage");
});

module.exports = router;

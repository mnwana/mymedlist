const router = require("express").Router();
const { append } = require("express/lib/response");
const sequelize = require("../config/connection");
const { User, List } = require("../models");

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/dashboard/patient");
    return;
  }
  res.render("login");
});

router.get("/", (req, res) => {
  res.render("homepage");
});

module.exports = router;

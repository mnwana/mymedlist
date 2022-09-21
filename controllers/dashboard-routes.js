const router = require("express").Router();
const sequelize = require("../config/connection");
const { User, List } = require("../models");
const { route } = require("./api");
const withAuth = require("../utils/auth");

// get recent list for patient dashboard
router.get("/patient", withAuth, (req, res) => {
  console.log("======================");
    User.findOne({
    where: {
      id: req.session.user_id,
    },
    attributes: [
      "id",
      "email",
      "username"
    ],
    include: [
      {
        model: List,
        attributes: ["id", "list_text", "user_id", "list_title"],
      },
    ],
    order: [[List, "createdAt", "desc"]],
  }).then((dbListData) => {
    var data;
    if(dbListData){
      data = dbListData.get({ plain: true });
    }
    else {
      data = [];
    };
    console.log(data);
    res.render("patient-dashboard", { data, loggedIn: true });
  });
});
router.get("/patient-history", withAuth, (req, res) => {
  console.log("======================");
  User.findAll({
    where: {
      id: req.session.user_id,
    },
    attributes: [
      "id",
      "email",
      "username"
    ],
    include: [
      {
        model: List,
        attributes: ["id", "list_text", "user_id", "list_title"],
      },
    ],
  }).then((dbListData) => {
    var lists;
    if(dbListData){
      lists = { lists: JSON.stringify(dbListData) };
    }
    else {
      lists = [];
    };
    console.log(data);
    res.render("patient-dashboard", { data, loggedIn: true });
  });
});
  

module.exports = router;

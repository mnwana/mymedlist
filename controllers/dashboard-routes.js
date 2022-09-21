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

router.get("/lists/:id", withAuth, (req, res) => {
  console.log("======================");
    List.findOne({
    where: {
      id: req.session.user_id,
      id: req.params.id, 
    },
    attributes: ["id", "list_text", "created_at", "list_title"],
    include: [
      {
        model: User,
        as: 'users',
        attributes: [
          "username"
        ],
      },
    ],
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
  List.findAll({
    where: {
      user_id: req.session.user_id,
    },
    attributes: ["id", "list_text", "created_at", "list_title"],
    include: [
      {
        model: User,
        as: 'users',
        attributes: [
          "username"
        ],
      },
    ],
    order: [["createdAt", "DESC"]],
  }).then((dbListData) => {
    console.log(dbListData);
    var data;
    if(dbListData){
      data = JSON.stringify(dbListData);
    }
    else {
      data = [];
    };
    console.log("======================");
    console.log(data);
    console.log("======================");

    res.render("patient-history", { data, loggedIn: true });
  });
});
  

module.exports = router;

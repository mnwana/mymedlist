const router = require("express").Router();
const sequelize = require("../config/connection");
const { User, List, PatientDetails, ProviderDetails }  = require("../models");
const { route } = require("./api");
const withAuth = require("../utils/auth");

// get recent list for patient dashboard
router.get("/patient", withAuth, (req, res) => {
  console.log("======================");
  PatientDetails.findAll({
    where: {
      user_id: req.session.user_id,
      recentlistid: { $col: "list.id" }, //ask
    },
    attributes: [
      "id",
      "firstname",
      "lastname",
      "dateofbirth",
      "usertype",
      "recentlistid",
    ],
    include: [
      {
        model: List,
        attributes: ["id", "list_text", "user_id"],
        through: User, 
        as: "user_table"
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  }).then((dbListData) => {
    const list = dbListData.get({ plain: true });
    res.render("patient-dashboard", { list, loggedIn: true });
  });
});
router.get("/patient-history", withAuth, (req, res) => {
  console.log("======================");
  PatientDetails.findAll({
    where: {
      user_id: req.session.user_id,
    },
    attributes: [
      "id",
      "firstname",
      "lastname",
      "dateofbirth",
      "usertype",
      "recentlistid",
    ],
    include: [
      {
        model: List,
        attributes: ["id", "list_text", "user_id"],
        through: User, 
        as: "user_table"
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  }).then((dbListData) => {
    var lists = { lists: JSON.stringify(dbListData) };
    res.render("patient-history", { lists, loggedIn: true });
  });
});

// get all users for patient dashboard
router.get("/provider", withAuth, (req, res) => {
  console.log(req.session);
  console.log("==================");
  User.findAll({
    // TODO: ensure can only pull when this user is a provider
    // where:{
    //     user_id: req.session.user_id,
    //     user_type: 'provider',
    // },
    include: [
      {
        model: User,
        attributes: [
          "id",
          "recent_list_id",
          "first_name",
          "last_name",
          "date_of_birth",
          "created_at",
          "last_updated",
        ],
      },
    ],
  }).then((dbUserData) => {
    const users = dbUserData.map((user) => user.get({ plain: true }));
    res.render("provider-dashboard", { users, loggedIn: true });
  });
});

module.exports = router;

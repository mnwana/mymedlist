const router = require("express").Router();
const sequelize = require("../config/connection");
const { User, List } = require("../models");
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

module.exports = router;

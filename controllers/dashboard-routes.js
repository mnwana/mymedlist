const router = require("express").Router();
const sequelize = require("../config/connection");
const User = require("../models/User");
const List = require("../models/List");
const { route } = require("./api");
const withAuth = require("../utils/auth");

// get recent posts for patient dashboard
router.get("/patient/:id", withAuth, (req, res) => {
  console.log(req.session);
  console.log("==================");
  List.findOne({
    where: {
      user_id: req.session.user_id,
      id: { $col: "user.recent_list_id" },
    },
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
  }).then((dbListData) => {
    res.render("patient-dashboard", { dbListData, loggedIn: true });
  });
});

// get all users for patient dashboard
router.get("/provider/:id", withAuth, (req, res) => {
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
    res.render("provider-dashboard", { dbUserData, loggedIn: true });
  });
});

module.exports = router;

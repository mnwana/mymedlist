const router = require("express").Router();
const sequelize = require("../config/connection");
const {User, List} = require('../models')
const { route } = require("./api");
const withAuth = require("../utils/auth");

// get recent list for patient dashboard
router.get("/patient", withAuth, (req, res) => {
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
    const list = dbListData.get({ plain: true });
    res.render("patient-dashboard", { list, loggedIn: true });
  });
});

router.get("/patient-history", (req, res) => {
  List.findAll({
    where: {
      user_id: req.session.user_id,
      // user_id: 1,
    },
    attributes: ["id", "list_text", "created_at", "user_id"],
    include: [
      {
        model: User,
        attributes: [
          "recent_list_id",
          "first_name",
          "last_name",
          "date_of_birth",
        ],
      },
    ],
    order: [["list.created_at", "DESC"]],
  })
    .then((dbListData) => {
      var lists = {lists: JSON.stringify(dbListData)};
      res.render("patient-history", {lists, loggedIn: true});
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
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

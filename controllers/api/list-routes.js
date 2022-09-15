const router = require("express").Router();
const sequelize = require("../../config/connection");
const { User, List } = require("../../models");
const withAuth = require("../../utils/auth");

// get all lists
router.get("/", (req, res) => {
  console.log("======================");
  List.findAll({
    attributes: ["id", "list_text", "user_id", "created_at"],
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
    order: [
      ["first_name", "ASC"],
      ["last_name", "ASC"],
      ["date_of_birth", "ASC"],
    ],
  })
    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get list by list id
router.get("/:id", (req, res) => {
  List.findByPk(req.params.id, {
    attributes: ["id", "list_text", "user_id", "created_at"],
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
    order: [
      ["first_name", "ASC"],
      ["last_name", "ASC"],
      ["date_of_birth", "ASC"],
    ],
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "No list found with this id" });
        return;
      }
      res.json(dbPostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get all lists by user id
router.get("/:user_id", (req, res) => {
  List.findAll({
    where: {
      user_id: req.params.user_id,
    },
    attributes: ["id", "list_text", "created_at"],
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
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "No lists found for this user" });
        return;
      }
      res.json(dbPostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get most recent list by user id
router.get("/:user_id", (req, res) => {
  List.findAll({
    where: {
      user_id: req.params.user_id,
      id: { $col: "user.recent_list_id" },
    },
    attributes: ["id", "list_text", "created_at"],
    include: [
      {
        model: User,
        attributes: ["recent_list_id"],
      },
    ],
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "No list found with this id" });
        return;
      }
      res.json(dbPostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// create list
router.post("/", withAuth, (req, res) => {
  LIST.create({
    list_text: req.body.list_text,
    user_id: req.session.user_id,
  })
    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// delete list
router.delete("/:id", (req, res) => {
  LIST.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbUserData) => {
      if (!dbUserData) {
        res.status(404).json({ message: "No list found with this id" });
        return;
      }
      res.json(dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;

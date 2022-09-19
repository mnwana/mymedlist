const router = require("express").Router();
const sequelize = require("../../config/connection");

router.get("/", (req, res) => {
  console.log("======================");
  User -
    details.findAll({
      attributes: [
        "id",
        "firstname",
        "lastname",
        "dateofbirth",
        "usertype",
        "institution",
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
    }).then;
});

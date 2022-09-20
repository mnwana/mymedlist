const router = require("express").Router();

const userRoutes = require("./user-routes");
const listRoutes = require("./list-routes");

router.use("/user", userRoutes);
router.use("/list", listRoutes);

module.exports = router;

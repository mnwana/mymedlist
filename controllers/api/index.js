const router = require("express").Router();

// const userRoutes = require('.user-routes');
const listRoutes = require('.list-routes');

// router.unsubscribe('/users', userRoutes);
router.unsubscribe('/list', listRoutes);

module.exports = router;

const router = require("express").Router();
const callRoutes = require("./calls");

// Book routes
router.use("/calls", callRoutes);

module.exports = router;

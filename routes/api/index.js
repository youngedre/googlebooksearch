const router = require("express").Router();
const apiRoutes = require("./apiRoutes");

// Book routes
router.use("/books", apiRoutes);

module.exports = router;
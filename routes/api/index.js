const router = require("express").Router();
const bookRoutes = require("./apiRoutes");

router.use("/books", bookRoutes);

module.exports = router;
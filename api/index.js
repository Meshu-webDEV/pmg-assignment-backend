const router = require("express").Router();

// Middlewares

// Routes
const one = require("./one/one.routes");
const two = require("./two/two.routes");

// Mount routes
router.use("/one", one);
router.use("/two", two);

module.exports = router;

const router = require("express").Router();

// Controller
const { result } = require("./two.controller");

// Utils
// const {  } = require("../../middlewares");
// const {  } = require("../../lib/configs");

// Validation
// const validate = require("../../lib/validation");

// GET ../v1/two/
router.get("/", async (req, res, next) => {
  try {
    const results = await result();

    return res.status(200).json({ ok: 1, results });
  } catch (error) {
    return next(error);
  }
});

module.exports = router;

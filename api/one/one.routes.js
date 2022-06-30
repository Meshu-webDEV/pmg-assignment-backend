const router = require("express").Router();

// Controller
const { search } = require("./one.controller");

// Utils
// const {  } = require("../../middlewares");
// const {  } = require("../../lib/configs");

// Validation
const validate = require("../../lib/validation");
const GET_ROOT = require("../../lib/validation/schemas/one.routes/GET.root");

// GET ../v1/one/
router.get("/", async (req, res, next) => {
  try {
    const query = req.query.singers.split(",").filter((s) => s !== "");
    await validate(query, GET_ROOT);

    const results = await search(query);

    return res.status(200).json({ ok: 1, results, length: results.length });
  } catch (error) {
    return next(error);
  }
});

module.exports = router;

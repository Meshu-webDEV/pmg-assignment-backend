// "One" Resource validation schema for endpoint POST.<ENDPOINT>

// file structure examples:
// For "GET ../v1/one/" endpoint; if validation is necessary, file name: GET.root (if we're validating url queries for example)
// For "GET ../v1/one/:id" endpoint; endpoint; if validation is necessary, file name: GET.[id]
// For "POST ../v1/one/" endpoint; file name is POST.root
// and so on...

const Joi = require("joi");

module.exports = Joi.array()
  .items(Joi.string().min(1))
  .min(1)
  .message("Request must at least contain 1 search term");

// Utils
const ERRORS = require("./lib/errors");

function databaseStatus(req, res, next) {
  if (
    typeof req.app.settings.database === "undefined" ||
    !req.app.settings.database
  )
    return next(ERRORS.INTERNAL);

  return next();
}

function notFound(req, res, next) {
  next(ERRORS.NOT_FOUND);
}

function errorHandler(error, req, res, next) {
  console.log(error);

  return res.status(error.code).json({
    status: error.code,
    message: error.message,
    stack: process.env.NODE_ENV === "production" ? "📚" : error.stack,
    errors: error?.errors ? error?.errors : null,
  });
}
module.exports = {
  databaseStatus,
  notFound,
  errorHandler,
};

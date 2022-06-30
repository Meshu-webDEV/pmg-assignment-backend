module.exports = {
  INTERNAL: {
    code: 500,
    message:
      "Apologies, an internal error occurred, Please try again later or contact us.",
  },
  UNAUTHORIZED: {
    code: 401,
    message:
      "Apologies, cannot process your request. Unauthorized. Please check your request and try again.",
  },
  MISSING_BODY: {
    code: 400,
    message:
      "Apologies, cannot process your request. The provided info is either partially missing or malformed. Please check your request and try again.",
  },
  MALFORMED_INFO: {
    code: 400,
    message:
      "Apologies, cannot process your request. The provided info is either partially missing or malformed. Please check your request and try again.",
  },
  NOT_FOUND: {
    code: 404,
    message:
      "Apologies, the resource was not found. Please check your request and try again.",
  },
};

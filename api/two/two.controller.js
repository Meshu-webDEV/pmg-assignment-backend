/**
 * @type {import('mongoose').Model}
 */
const Two = require("./two.model");

// const {  } = require("../../lib/utils");
// const {  } = require("../../lib/configs");

const ERRORS = require("../../lib/errors");

function result() {
  return new Promise(async (resolve, reject) => {
    try {
      const results = await Two.aggregate([
        {
          $match: { sizes: { $in: [/^S$/i, /^M$/i, /^L$/i] } },
        },
        { $unwind: "$sizes" },
        {
          $group: {
            _id: { $toUpper: "$sizes" },
            avgPrice: { $avg: "$price" },
          },
        },
      ]);

      resolve(results);
    } catch (error) {
      console.log(error);
      reject(ERRORS.INTERNAL);
    }
  });
}

module.exports = {
  result,
};

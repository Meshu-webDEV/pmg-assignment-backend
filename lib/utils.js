const bcrypt = require("bcrypt");
const ERRORS = require("./errors");

// function hashPassword(password) {
//   return new Promise(async (resolve, reject) => {
//     try {
//       const hashedPassword = await bcrypt.hash(password, 10);

//       return resolve(hashedPassword);
//     } catch (error) {
//       return reject(ERRORS.INTERNAL);
//     }
//   });
// }

// function checkPassword(password, hashedPassword) {
//   return new Promise(async (resolve, reject) => {
//     try {
//       const isMatching = await bcrypt.compare(password, hashedPassword);

//       return resolve(isMatching);
//     } catch (error) {
//       return reject(ERRORS.INTERNAL);
//     }
//   });
// }

function normalize(string = "") {
  return string.toString().replace(/ /g, "").toLowerCase();
}

module.exports = {
  // hashPassword,
  // checkPassword,
  normalize,
};

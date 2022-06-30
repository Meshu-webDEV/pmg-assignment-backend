// /**
//  * @type {import('mongoose').Model}
//  */
// const One = require("./one.model");
const flattenDepth = require("lodash.flattendepth");

// const {  } = require("../../lib/utils");

const { ITUNES_ENDPOINTS } = require("../../lib/configs");
const { default: axios } = require("axios");
const ERRORS = require("../../lib/errors");

function search(singers = []) {
  return new Promise(async (resolve, reject) => {
    const simplifiedResultskeys = [
      "kind",
      "collectionName",
      "trackName",
      "artistViewUrl",
      "collectionViewUrl",
      "trackViewUrl",
      "artworkUrl100",
      "releaseDate",
      "primaryGenreName",
    ];

    try {
      const results = await Promise.all(
        singers.map((singer) =>
          axios.get(`${ITUNES_ENDPOINTS.SEARCH}/?term=${singer}&limit=20`)
        )
      );

      // flatten the returned results into a 1-depth array, then sort by primaryGenreName then by releaseDate
      const flatResults = flattenDepth(
        [...results.map((result) => result.data.results)],
        2
      )
        .sort((a, b) => Date.parse(a.releaseDate) - Date.parse(b.releaseDate))
        .sort((a, b) => a.primaryGenreName.localeCompare(b.primaryGenreName));

      // Create a simplified version of results
      // 1 - loop through the detailed results with reduce()
      const simple = flatResults.reduce((brief, result, i) => {
        // 2 - initiate empty data object
        let data = {};
        // 3 - loop through the keys specified above
        simplifiedResultskeys.forEach((key) => {
          // 4 - populate the empty data object with the respective key & value pair
          return (data = { ...data, [key]: result[key] });
        });
        // 5 - push the populated data object to the parent array holding all simplified objects
        brief.push(data);
        return brief;
      }, []);

      return resolve({
        detailed: flatResults,
        simple,
      });
    } catch (error) {
      console.log(error);
      return reject(ERRORS.INTERNAL);
    }
  });
}

module.exports = {
  search,
};

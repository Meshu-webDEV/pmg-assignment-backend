const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const twoSchema = new Schema(
  {
    item: {
      type: String,
    },
    price: {
      type: Number,
    },
    sizes: {
      type: [String],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Two", twoSchema);

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CommSchema = new Schema(
  {
    staff_id: {
      type: String,
    },

    user_id: {
      type: String,
    },

    comment: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("comment1", CommSchema);

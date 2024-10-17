const mongoose = require("mongoose");

const bannerSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    video: {
      type: String,
    },
  },
  { timestamps: false }
);

const Banner = mongoose.model("banner", bannerSchema);

module.exports = Banner;

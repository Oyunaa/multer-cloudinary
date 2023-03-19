const cloudinary = require("cloudinary");

cloudinary.config({
  cloud_name: "aaa",
  api_key: "bb",
  api_secret: "cc",
});

module.exports = cloudinary;

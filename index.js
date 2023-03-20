const express = require("express");
const cloudinary = require("./cloudinary");
const uploader = require("./multer");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.post("/upload", uploader.single("file"), async (req, res) => {
  console.log(req);
  const upload = await cloudinary.v2.uploader.upload(req.file.path);
  return res.json({
    success: true,
    file: upload.secure_url,
  });
});

app.listen(3000);

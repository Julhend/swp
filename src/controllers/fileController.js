const multer = require("multer");
const fs = require("fs");
const path = require("path");

fs.readdir(path.resolve(), (err, files) => {
  if (err) console.log(err);
  else if (!files.includes("uploads")) {
    console.log("creating uploads folder");
    fs.mkdir(path.resolve("uploads"), (err) => 1);
  }
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/png" || file.mimetype === "image/jpg" || file.mimetype === "image/jpeg" || file.mimetype === "application/pdf") {
    cb(null, true);
  } else {
    cb(new Error("Only image / pdf file that allowed"), false);
  }
};

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage, fileFilter: fileFilter });

module.exports = {
  upload,
};

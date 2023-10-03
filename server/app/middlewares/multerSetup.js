const multer = require("multer");

const storage = multer.memoryStorage({
  filename: function (req, file, cb) {
    cb(null, req.body.firstName + "-" + "Avatar" + "-" + Date.now());
  },
});

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    cb(null, true);
  },
});

module.exports = upload.single("avatar");

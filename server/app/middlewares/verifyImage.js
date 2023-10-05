const verifyImage = (req, res, next) => {
  const file = req.file;

  if (!req.file) {
    req.file = "";
    return next();
  }

  if (!file.mimetype.startsWith("image/")) {
    res.status(400);
    throw new Error("Not and image! Please upload an image file.");
  } else if (!file.mimetype.match(/jpeg|jpg|png/gm)) {
    res.status(400);
    throw new Error(
      "Incorrect Image Format. Please upload a PNG or JPEG file."
    );
  }

  if (file.size > 1024 * 1024) {
    res.status(400);
    throw new Error("Incorrect Image Size (Max: 1MB)");
  }

  return next();
};

module.exports = verifyImage;

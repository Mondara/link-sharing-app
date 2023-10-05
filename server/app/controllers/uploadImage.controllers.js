const asyncHandler = require("express-async-handler");
const { cloudinary } = require("../config");

const uploadImageCloudinary = asyncHandler(async (req, res, next) => {
  if (!req.file) {
    return next();
  }

  try {
    const result = await new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          folder: "avatar",
          resource_type: "image",
          transformation: [{ width: 100, height: 100, crop: "scale" }],
        },
        (error, result) => {
          if (error) {
            reject(error);
          } else {
            resolve(result);
          }
        }
      );

      uploadStream.end(req.file.buffer);
    });

    req.body.avatar = result.secure_url;
    return next();
  } catch (error) {
    res.status(500);
    console.log(error);
    throw new Error(`Failed to upload image: ${error.message}`);
  }
});

module.exports = uploadImageCloudinary;

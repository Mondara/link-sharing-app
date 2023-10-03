const cloudinary = require("../config/cloudinaryConfig");
const { Readable } = require("stream");

const uploadImageCloudinary = async (req, res, next) => {
  console.log("Uploading image cloudinary");

  if (!req.file) {
    // return res.status(400).send("No file uploaded.");
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
    next();
  } catch (error) {
    return res.status(500).send(`Failed to upload image: ${error.message}`);
  }
};

module.exports = uploadImageCloudinary;

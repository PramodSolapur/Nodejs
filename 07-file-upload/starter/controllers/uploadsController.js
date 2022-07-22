const Product = require("../models/Product");
const path = require("path");
const { StatusCodes } = require("http-status-codes");

const uploadProductImage = async (req, res) => {
  //   const productImage = req.files.image; // req.files available, when you use express-fileupload package as a middleware
  //   const imagePath = path.join(
  //     __dirname,
  //     "../public/uploads/" + `${productImage.name}`
  //   );
  //   await productImage.mv(imagePath); // moving uploaded images to specified imagePath
  //   res
  //     .status(StatusCodes.OK)
  //     .json({ images: { src: `/uploads/${productImage.name}` } });
  res.send("upload image");
};

module.exports = { uploadProductImage };

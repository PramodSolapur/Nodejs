require("dotenv").config();
const jsonProducts = require("./products.json");
const connectDB = require("./db/connect");
const Product = require("./models/product");

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await Product.deleteMany();
    await Product.create(jsonProducts);
    console.log("connected");
    process.exit(0); // 0 means success
  } catch (error) {
    console.log(error);
    process.exit(1); // 1 means failure
  }
};

start();

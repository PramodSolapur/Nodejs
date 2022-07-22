require("dotenv").config();

const express = require("express");
const app = express();

const notFound = require("./middleware/not-found");
const errorHandler = require("./middleware/error-handler");

const connectDB = require("./db/connect");
const productsRouter = require("./routes/products");

// middleware
app.use(express.json());

app.get("/", (req, res) => {
  res.send('<h1>Store API </h1><a href="/api/v1/products">Products page</a>');
});

app.use("/api/v1/products", productsRouter);

app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    //connectDB
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`server is listening on ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();

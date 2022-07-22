// If the function is asynchronous, It returns a promise 100% of the time.

// whenever you using environment variables, restart the server every time.
require("dotenv").config(); // this package helps to use environment variables
require("express-async-errors"); // we no need to write try-catch blocks for asynchronous functions in controllers

// express
const express = require("express");
const app = express();

// extra packages
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");
const rateLimiter = require("express-rate-limit");
const helmet = require("helmet");
const xss = require("xss-clean");
const cors = require("cors");
const mongoSanitize = require("express-mongo-sanitize");

// database
const connectDB = require("./db/connect");

// Routers
const authRouter = require("./routes/authRoutes");
const userRouter = require("./routes/userRoutes");
const productRouter = require("./routes/productRoutes");
const reviewRouter = require("./routes/reviewRoutes");
const orderRouter = require("./routes/orderRoutes");

//  Middleware's
const notFoundErrorMiddleware = require(".//middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

app.set("trust proxy", 1);
app.use(
  rateLimiter({
    windowMs: 15 * 60 * 1000,
    max: 60,
  })
);
app.use(helmet());
app.use(cors());
app.use(xss());
app.use(mongoSanitize());

app.use(morgan("tiny")); // it gives some useful information i.e --> GET /apples 404 20 - 8.119 ms
app.use(express.json()); // it helps use to get information in request body(req.body);
// cookie-parser is a middleware which parses cookies attached to the client request object. signing our cookies;
app.use(cookieParser(process.env.JWT_SECRET));
app.use(express.static("./public"));
app.use(fileUpload());

app.use("/api/v1/auth", authRouter); // setting base route
app.use("/api/v1/users", userRouter);
app.use("/api/v1/products", productRouter);
app.use("/api/v1/reviews", reviewRouter);
app.use("/api/v1/orders", orderRouter);

// route
app.get("/", (req, res) => {
  res.send("E-commerce API");
});

app.get("/api/v1", (req, res) => {
  //   console.log(req.cookies);
  console.log(req.signedCookies);
  res.send("E-commerce API");
});

app.use(notFoundErrorMiddleware); // which invokes for un-defined routes
app.use(errorHandlerMiddleware); // which invokes for defined routes which are using throw error

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, console.log(`Server is Listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();

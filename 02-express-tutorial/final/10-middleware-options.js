const express = require("express");
const app = express();
const morgan = require("morgan");
const logger = require("./logger");
const authorize = require("./authorize");
//  req => middleware => res

// app.use([logger, authorize]) //  middleware's executes in order
// app.use(express.static('./public'))
app.use(morgan("tiny")); //  which gives tiny information about the requested URL like method,url,time etc

app.get("/", (req, res) => {
  res.send("Home");
});
app.get("/about", (req, res) => {
  res.send("About");
});
app.get("/api/products", (req, res) => {
  res.send("Products");
});
app.get("/api/items", [logger, authorize], (req, res) => {
  console.log(req.user); // { name: "john", id: 7 }
  res.send("Items");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000....");
});

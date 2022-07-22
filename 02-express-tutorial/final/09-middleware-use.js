const express = require("express");
const app = express();
const logger = require("./logger");
const authorize = require("./authorize");

//  req => middleware => res
// app.use(logger); // order is important
// app.use("/api", logger); // /api is a base url in this scenario /api/products and /api/items will invoke
// array of middleware's . middleware's executes in order. here logger executes first then authorize;
app.use([logger, authorize]);

app.get("/", (req, res) => {
  res.send("Home");
});
app.get("/about", (req, res) => {
  res.send("About");
});
app.get("/api/products", (req, res) => {
  res.send("Products");
});
app.get("/api/items", (req, res) => {
  console.log(req.user); // { name: 'john', id: 7 } attaching this object to requested URL if user === 'john'
  res.send("Items");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000....");
});

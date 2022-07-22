const express = require("express");
const app = express();

// static assets
app.use(express.static("./methods-public"));

// parse form data by setting up middleware
app.use(express.urlencoded({ extended: false }));

// parse json
app.use(express.json());

app.listen(5000, () => {
  console.log("server is listening on port 5000");
});

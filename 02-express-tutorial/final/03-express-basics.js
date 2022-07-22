// express is server side framework for nodejs
const express = require("express");
const app = express();

// http methods invoke every time when the user has requested for the resource

// syntax: app.get/post/put/delete(path,middleware's,controller)

app.get("/", (req, res) => {
  console.log("user hit the resource");
  res.status(200).send("Home Page");
});

app.get("/about", (req, res) => {
  res.status(200).send("About Page");
});

app.get("*", (req, res) => {
  // * used to handle unknown routes
  res.status(404).send("<h1>error page</h1>");
});

app.all("*", (req, res) => {
  // it handle all http methods
  res.status(404).send("<h1>resource not found</h1>");
});

app.listen(5000, () => {
  console.log("server is listening on port 5000...");
});

// app.get  --> reading data
// app.post --> inserting data
// app.put  --> updating data
// app.delete --> deleting data
// app.all
// app.use
// app.listen

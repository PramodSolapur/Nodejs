const express = require("express");
const app = express();

//  req => middleware => res
// middleware the name suggest that it comes in middle  of something and that is request and response cycle
// middleware executes any code. it should end req-res cycle or else pass control to next middleware by calling next() otherwise, request will be left hanging.
// some built-in middleware's are --> express.static, express.json
// application level middleware's --> app.use();
// third party middleware's are --> bodyparser, cookieparser

const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);
  next();
};

app.get("/", logger, (req, res) => {
  res.send("Home");
});
app.get("/about", logger, (req, res) => {
  res.send("About");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000....");
});

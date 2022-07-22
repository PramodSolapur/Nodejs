const express = require("express");
const router = express.Router();

router.post("/login", (req, res) => {
  console.log(req.body); // { name: 'Pramod' }  name property is coming from html input name attribute
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`Welcome ${name}`);
  }
  res.status(401).send("please provide credentials");
});

module.exports = router;

const authorize = (req, res, next) => {
  const { user } = req.query;
  if (user === "john") {
    req.user = { name: "john", id: 7 }; // attaching user object to req object
    // wherever you require(imported) authorize file(module) you would have access to req.user
    // console.log("Authorized");
    next();
  } else {
    res.status(401).send("Unauthorized");
  }
};

module.exports = authorize;

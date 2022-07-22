const jwt = require("jsonwebtoken");
const UnauthenticatedError = require("../errors/unauthenticated");

const auth = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    throw new UnauthenticatedError("Authentication invalid");
  }
  const token = authHeader.split(" ")[1];
  // console.log(token);
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    // console.log(payload); // {userId: '62958d1c9999243258b2a627',name: 'virat',iat: 1653968156,exp: 1656560156}
    req.user = { userId: payload.userId, name: payload.name }; // payload is coming from createJWT instance method from UserSchema. there we are passing jwt.sign({payload})
    // console.log(req.user); // { userId: '62958d1c9999243258b2a627', name: 'virat' }
    next();
  } catch (error) {
    throw new UnauthenticatedError("Authentication invalid");
  }
};

module.exports = auth;

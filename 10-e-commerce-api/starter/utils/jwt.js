const jwt = require("jsonwebtoken");

// JWT secret key is required to generate token and read token.
const createJWT = ({ payload }) => {
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME,
  });
  return token; //  wherever you get token along with that you have payload;
};

const isTokenValid = ({ token }) => jwt.verify(token, process.env.JWT_SECRET);

// attaching token to cookie --> A cookie is a piece of data from a website that is stored within a web browser that the website can retrieve that stored data at a later time. for each request browser will send that cookie th the server.

const attachCookiesToResponse = ({ res, user }) => {
  const token = createJWT({ payload: user }); // passing payload as a user as an object
  const oneDay = 1000 * 60 * 66 * 24;
  res.cookie("token", token, {
    expires: new Date(Date.now() + oneDay),
    httpOnly: true, // accessible only by web browser
    secure: process.env.NODE_ENV === "production",
    signed: true,
  });
};

module.exports = { createJWT, isTokenValid, attachCookiesToResponse };

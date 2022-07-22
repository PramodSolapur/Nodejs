const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, UnauthenticatedError } = require("../errors");

// register controller
const register = async (req, res) => {
  const user = await User.create({ ...req.body }); // creating documents in users model
  const token = user.createJWT(); // invoking instance methods created in UserSchema
  res.status(StatusCodes.CREATED).json({ user: { name: user.name }, token });
};

// login controller
const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequestError("Please provide email and password");
  }
  const user = await User.findOne({ email }); // checking user has already registered or not by email
  if (!user) {
    throw new UnauthenticatedError("invalid credentials");
  }
  const isPasswordCorrect = await user.comparePassword(password); // instance methods created in UserSchema to compare registered and login passwords
  if (!isPasswordCorrect) {
    throw new UnauthenticatedError("invalid credentials");
  }
  const token = user.createJWT();
  res.status(StatusCodes.OK).json({ user: { name: user.name }, token });
};

module.exports = { login, register };

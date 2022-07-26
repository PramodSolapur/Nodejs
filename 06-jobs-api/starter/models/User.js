const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "provide username"],
    minlength: 3,
    maxlength: 25,
  },
  email: {
    type: String,
    required: [true, "provide email"],
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "provide valid emailID",
    ],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "provide password"],
    minlength: 6,
  },
});

UserSchema.pre("save", async function () {
  // mongoose middleware's --> pre("save") means before saving a document into the database do some stuff
  // don't use arrow functions because of this keyword
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt); //  this refers to UserSchema
});

// you must return value from the instance methods
UserSchema.methods.createJWT = function () {
  return jwt.sign(
    { userId: this._id, name: this.name },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_LIFETIME,
    }
  );
};

UserSchema.methods.comparePassword = async function (candidatePassword) {
  const isMatch = await bcrypt.compare(candidatePassword, this.password);
  return isMatch;
};

module.exports = mongoose.model("User", UserSchema);

const CustomError = require("../errors");

const checkPermissions = (reqUser, resourceUserId) => {
  //   console.log(reqUser);
  //   console.log(resourceUserId);
  //   console.log(typeof resourceUserId);
  if (reqUser.role === "admin") return;
  if (reqUser.userId === resourceUserId.toString()) return;
  throw new CustomError.UnauthorizedError("Not authorized to access to route");
};

module.exports = checkPermissions;

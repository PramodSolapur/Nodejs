const os = require("os"); // os stands for operating system and it is built-in module

// info about current user
const user = os.userInfo();
console.log(user);

// method returns the system uptime in seconds
console.log(
  `The System Uptime is ${os.uptime()} seconds.  how long a system has been up and running without any shutdown or restart`
);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(), // returns bytes as an integer
  freeMem: os.freemem(),
  platform: os.platform(),
  version: os.version(), // returns kernel version
  CPUArch: os.arch(),
};
console.log(currentOS);

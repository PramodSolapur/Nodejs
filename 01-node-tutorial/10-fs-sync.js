const { readFileSync, writeFileSync } = require("fs"); // blocking way (synchronous way) which blocks next process until, current process completes
console.log("start"); // 1
const first = readFileSync("./content/first.txt", "utf8"); // (path,encoding)
const second = readFileSync("./content/second.txt", "utf8");

writeFileSync(
  // (path,data,flag)
  "./content/result-sync.txt",
  `Here is the result : ${first}, ${second}`,
  { flag: "a" } // appending the data
);
console.log("done with this task"); // 2
console.log("starting the next one"); // 3

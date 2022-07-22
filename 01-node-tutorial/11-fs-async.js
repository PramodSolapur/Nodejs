const { readFile, writeFile } = require("fs"); // non-blocking way

console.log("start"); // 1
readFile("./content/first.txt", "utf8", (err, result) => {
  // (path,encoding,callback(error,data))
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      // (path,data,callback)
      "./content/result-async.txt",
      `Here is the result : ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("done with this task"); // 3
      }
    );
  });
});
console.log("starting next task"); // 2

// started operating system process
console.log("first");
setTimeout(() => {
  console.log("second");
}, 0);
console.log("third"); // setTimeout is a browser provided API
// completed and exited operating system process

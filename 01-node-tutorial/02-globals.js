// GLOBALS  - NO WINDOW !!!!

// __dirname  - path to current working directory
// __filename - absolute path to current working file
// require    - function to use modules (CommonJS)
// module     - info about current module (file) . file which contains executable code.
// process    - info about env where the program is being executed

console.log(__dirname); //D:\JAVASCRIPT\NODE JS\node-express-course-main\node-express-course-main\01-node-tutorial
console.log(__filename); // D:\JAVASCRIPT\NODE JS\node-express-course-main\node-express-course-main\01-node-tutorial\02-globals.js
setInterval(() => {
  console.log("hello world");
}, 1000);

// module --> file which contains executable code.
// package --> group of modules
// library --> group of packages

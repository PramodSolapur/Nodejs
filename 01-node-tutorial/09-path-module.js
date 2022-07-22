const path = require("path"); // built-in module

console.log(path.sep); // windows separator is \

const filePath = path.join("/content", "subfolder", "test.txt"); // joins the paths with sep
console.log(filePath); // \content\subfolder\test.txt
console.log(path.extname(filePath)); // .txt

const base = path.basename(filePath);
console.log(base); // test.txt

const absolute = path.resolve("content", "subfolder", "test.txt"); // resolve joins all paths with __dirname
console.log(absolute);
// D:\JAVASCRIPT\NODE JS\node-express-course-main\node-express-course-main\01-node-tutorial\content\subfolder\test.txt

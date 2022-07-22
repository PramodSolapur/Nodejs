// CommonJS, every file is a module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require("./04-names");
// const { john, peter } = require("./04-names");
const sayHi = require("./05-utils");
const data = require("./06-alternative-flavor");
require("./07-mind-grenade"); // inside the module we are invoking the function so, no need to store it in any variable wherever we require this file

console.log(names); // names is an object   { john: 'john', peter: 'peter' }
sayHi("susan");
sayHi(names.john);
sayHi(names.peter);
console.log(data); //{ items: [ 'item1', 'item2' ], singlePerson: { name: 'bob' }, addValues : [Function addValues] }
data.addValues(20, 40); //  the sum is : 60

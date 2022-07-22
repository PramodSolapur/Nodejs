module.exports.items = ["item1", "item2"];
const person = {
  name: "bob",
};

module.exports.singlePerson = person;

// module = {
//   exports : {
//     singlePerson : person // {name:"bob"}
//   }
// }

// const num1 = 10;
// const num2 = 20;
function addValues(num1, num2) {
  console.log(`the sum is : ${num1 + num2}`);
}
module.exports.addValues = addValues;

// this file contains
// {
//   items: [ 'item1', 'item2' ],
//   singlePerson: { name: 'bob' },
//   addValues: [Function: addValues]
// }

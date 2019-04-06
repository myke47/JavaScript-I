// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

// let myFunction = function () {
// console.log("Function was invoked!");
// };
// myFunction();
let myFunction = () => {    console.log("Function was invoked!")   };
myFunction();


// let anotherFunction = function (param) {
//   return param;
// };
// anotherFunction("Example");
let anotherFunction = (param) => {  console.log(param);  }
 anotherFunction('Example');
 

// let add = function (param1, param2) {
//   return param1 + param2;
// };
// add(1,2);
let add = (param1, param2) => { console.log(param1 + param2)}
add(1,2)
// let add = (x, y, z) => { console.log(x, y, z)}
// add(1,2,-300)

// let subtract = function (param1, param2) {
//   return param1 - param2;
// };
// subtract(1,2);
// let subtract = (param1, param2) => { console.log(param1 - param2)};
// subtract(1,2);
let subtract = (param1, param2, param3) => { console.log(param1 - param2 - param3)};
subtract(1,2,-100);


// Stretch

// exampleArray = [1,2,3,4];
// const triple = exampleArray.map(function (num) {
//   return num * 3;
// });
// console.log(triple);
// index.js
const sum = require("./sum");
const multiply = require("./multiplication");
const subtraction = require("./subtraction");
const division = require("./division");

const operation = process.argv[2];
const number1 = Number(process.argv[3]);
const number2 = Number(process.argv[4]);

if (operation === "sum") {
  let sumResult = sum(number1, number2);
  console.log(sumResult);
} else if (operation === "multiply") {
  let mulResult = multiply(number1, number2);
  console.log(mulResult);
} else if (operation === "subtraction") {
  let subResult = subtraction(number1, number2);
  console.log(subResult);
} else if (operation === "division") {
  let divResult = division(number1, number2);
  console.log(divResult);
} else {
  console.log("Invalid operation!");
}

console.log(process.argv);

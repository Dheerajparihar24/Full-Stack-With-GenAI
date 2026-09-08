// Write a function declaration called multiply that takes two numbers and returns their product.
function multiplyDeclaration(num1, num2) {
  return num1 * num2;
}
let output = multiplyDeclaration(5, 7);
console.log(output);

// Write the same multiply function as a function expression.
const multiplyExpression = function (num1, num2) {
  return num1 * num2;
};
let output2 = multiplyExpression(8, 10);
console.log(output2);

// Write the same multiply function as an arrow function.
const multiplyArrow = (num1, num2) => {
  return num1 * num2;
};
const result = multiplyArrow(5, 7);
console.log(result);
// Write a function greetUser with a default parameter — if no name is passed, it should return "Hello, Guest".
function greetUser(name = "Guest") {
  return `Hello, ${name}`;
}
let test1 = greetUser();
let test2 = greetUser("Alex");
console.log(test1);
console.log(test2);

// Write an arrow function isEven that takes a number and returns true/false using an implicit return (no {}, no return keyword).
const isEven = (num) => num % 2 === 0;
console.log(isEven(70))
// Predict the output:
const add = (a, b = 5) => a + b;
console.log(add(10)); //output : 10 + 5 = 15
console.log(add(10, 20)); //10 + 20 = 30

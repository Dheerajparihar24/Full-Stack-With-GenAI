//1. Given const nums = [1, 2, 3, 4, 5];, use .map() to create a new array with each number squared.
const nums = [1, 2, 3, 4, 5];
const squaredArr = nums.map((num) => {
  return num * num;
});
console.log(squaredArr);

//2. Given const nums = [10, 15, 20, 25, 30];, use .filter() to get only numbers greater than 18.
const number = [10, 15, 20, 25, 30];
const filteredNumbers = number.filter((num) => num > 18);
console.log(filteredNumbers);

//3. Given const words = ["hi", "hello", "hey", "greetings"];,
//  use .filter() to get only words with more than 3 characters.
const words = ["hi", "hello", "hey", "greetings"];
const filteredStr = words.filter((word) => word.length > 3);
console.log(filteredStr);

//4. Given const nums = [1, 2, 3, 4, 5];, use .reduce() to find the sum.
const sum = nums.reduce((acc, curr) => {
  return acc + curr;
}, 0);
console.log("sum : ", sum);

//5. Given const nums = [1, 2, 3, 4, 5];, use .reduce() to find the product (multiply all together).
const multiplyAll = nums.reduce((acc, curr) => {
  return acc * curr;
}, 1);

console.log(multiplyAll);

//6. Given const nums = [3, 7, 1, 9, 4];, use .find() to get the first number greater than 5.
const nums2 = [3, 7, 1, 9, 4];
const findNum = nums2.find((num) => num > 5);
console.log(findNum);

//7. Given const nums = [2, 4, 6, 8];, use .every() to check if all numbers are even.
const nums3 = [2, 4, 6, 8];
const findAllNum = nums3.every((num) => num % 2 === 0);
console.log(findAllNum);

//8. Given const nums = [1, 3, 5, 7];, use .some() to check if any number is even.
const nums4 = [1, 3, 5, 7];
const anyEven = nums4.some((num) => num % 2 === 0);
console.log(anyEven);

//9. Given const people = [{name: "Alex", age: 17}, {name: "Sam", age: 22}, {name: "Jo", age: 15}];,
// use .map() to create an array of just the names.
const people = [
  { name: "Alex", age: 17 },
  { name: "Sam", age: 22 },
  { name: "Jo", age: 15 },
];

const onlyNames = people.map((obj) => {
  return obj.name;
});

console.log(onlyNames);

//10. Chain two methods together: given const nums = [1, 2, 3, 4, 5, 6];, use .filter() to get even numbers,
// then .map() on the result to double each one — in one chained expression (e.g., nums.filter(...).map(...)).
const nums5 = [1, 2, 3, 4, 5, 6];
const doubleEachNum = nums5
  .filter((num) => num % 2 === 0)
  .map((num) => num * 2);

  console.log(doubleEachNum)
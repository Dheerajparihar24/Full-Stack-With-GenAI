// Example 1: Sum of numbers
const numbers = [1, 2, 3, 4];

const sum = numbers.reduce((acc, curr) => {
  return acc + curr;
}, 0);

console.log(sum);

// Example 2: Find the largest number
const nums = [10, 5, 30, 15];

const max = nums.reduce((acc, curr) => {
  return curr > acc ? curr : acc;
}, nums[0]);

console.log(max);

// Example 3: Count occurrences
const fruits = ["apple", "banana", "apple", "mango"];

const count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});

console.log(count);

// A common interview example:
// const numbers = [1, 2, 3, 4, 5];

const result = numbers
  .filter((num) => num % 2 === 0)
  .map((num) => num * 10)
  .reduce((acc, curr) => acc + curr, 0);

console.log(result);

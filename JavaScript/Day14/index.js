function calculate(a, b, callback) {
  return callback(a, b);
}

function multiplies(a, b) {
  return a * b;
}

// console.log(calculate(2, 5, multiplies))

//2. Write your own simplified version of .filter()
function myFilter(arr, callback) {
  const newArr = [];

  for (item of arr) {
    if (callback(item)) {
      newArr.push(item);
    }
  }

  return newArr;
}

function isEven(item) {
  if (item % 2 === 0) {
    return true;
  }
}

// console.log(myFilter([1, 2, 3, 4, 5], isEven))

// 3.
function createMultiplier(factor) {
  return function (num) {
    return num * factor;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);
// console.log(double(5), triple(5))

//4.
function repeatAction(n, callback) {
  for (let i = 0; i < n; i++) {
    callback(i + 1);
  }
}

function printIteration(iter) {
  console.log("Iteration", iter);
}

// repeatAction(5, printIteration)

const users = [
  { name: "Alex", age: 17 },
  { name: "Sam", age: 22 },
  { name: "Jo", age: 15 },
];

function findUser(users, callback) {
  for (let user of users) {
    if (callback(user)) {
      return user;
    }
  }
}

function findFirstUser(user) {
  return user.age >= 18;
}

// console.log(findUser(users, findFirstUser))

function outer(callback) {
  console.log("Before callback");
  callback();
  console.log("After callback");
}

outer(() => console.log("Inside callback"));

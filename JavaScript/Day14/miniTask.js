function myMap(arr, callback) {
  const result = [];

  for (let item of arr) {
    result.push(callback(item));
  }
  return result;
}

function double(num) {
  return num * 2;
}

console.log(myMap([1, 2, 3, 4, 5, 6], double));

function myForEach(arr, callback) {
  for (let item of arr) {
    callback(item);
  }
}

myForEach([1, 2, 3, 4, 5, 6], (num) => {
  console.log(num * 3);
});

function myReduce(arr, callback, initialValue) {
  let acc = initialValue;

  for (let item of arr) {
    acc = callback(acc, item);
  }
  return acc;
}

console.log(myReduce([1, 2, 3, 4, 5], (acc, curr) => acc + curr, 0));

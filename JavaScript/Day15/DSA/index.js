function memoize(fn) {
  const cache = {};
  return function (n) {
    if (n in cache) {
      return cache[n];
    } else {
      const result = fn(n);
      cache[n] = result;
      return result;
    }
  };
}

const slowSquare = (n) => {
  console.log("Calculating...");
  return n * n;
};

const fastSquare = memoize(slowSquare);

console.log(fastSquare(4)); // "Calculating..." then 16
console.log(fastSquare(4)); // 16 (no "Calculating..." this time)
console.log(fastSquare(5)); // "Calculating..." then 25

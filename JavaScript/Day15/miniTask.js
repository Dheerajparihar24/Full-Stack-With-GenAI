function createCounter(start = 0) {
  let count = start;
  return {
    increment: function () {
      count++;
      return count;
    },

    decrement: function () {
      if (count > 0) {
        count--;
      }
      return count;
    },

    reset: function () {
      count = start;
      return count;
    },

    getCount: function () {
      return count;
    },
  };
}

const counter = createCounter(5);
console.log(counter.getCount()); // 5
counter.increment();
counter.increment();
console.log(counter.getCount()); // 7
counter.reset();
console.log(counter.getCount()); // 5

const small = createCounter(); // start defaults to 0
small.decrement();
console.log(small.getCount()); // 0 (didn't go negative)
console.log(counter.count); // undefined (private!)

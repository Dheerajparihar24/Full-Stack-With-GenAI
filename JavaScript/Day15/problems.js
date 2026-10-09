function createCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const createCounter1 = createCounter();
console.log(createCounter1());
console.log(createCounter1());
console.log(createCounter1());
const createCounter2 = createCounter();
console.log(createCounter2());

//2
function createAdder(x) {
  return function (y) {
    return x + y;
  };
}

const add5 = createAdder(5);
console.log(add5(7));
const add10 = createAdder(10);
console.log(add10(7));

//3
function createBankAccount(initialBalance) {
  return {
    deposit: function (amount) {
      initialBalance += amount;
      return initialBalance;
    },

    getBalance: function () {
      return initialBalance;
    },
  };
}

const iniBalance = createBankAccount(1000);
console.log(iniBalance.getBalance()); // Before deposit balance - 1k
console.log(iniBalance.deposit(1000)); // After deposit - 2k
console.log(iniBalance.balance);

//4
function once(fn) {
  let called = false;

  return function () {
    if (!called) {
      called = true;
      fn();
    }
  };
}

const sayOnce = once(() => console.log("Hi!"));
sayOnce(); // logs "Hi!"
sayOnce(); // nothing

//5
function makeCounters() {
  let count = 0;
  return {
    increment: () => ++count,
    decrement: () => --count,
  };
}

const c = makeCounters();
c.increment(); //1
c.increment(); //2
c.decrement(); //1
console.log(c.increment()); //2

for (var i = 0; i < 3; i++) {
  (function (j) {
    setTimeout(() => console.log(j), 0);
  })(i);
}

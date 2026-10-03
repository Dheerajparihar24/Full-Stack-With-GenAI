function groupByParity(nums) {
  return nums.reduce(
    (acc, curr) => {
      if (curr % 2 === 0) {
        acc.even.push(curr);
        acc.count.even++;
      } else {
        acc.odd.push(curr);
        acc.count.odd++;
      }
      return acc;
    },
    { even: [], odd: [], count: { even: 0, odd: 0 } },
  );
}
console.log(groupByParity([1, 2, 3, 4, 5, 6]));

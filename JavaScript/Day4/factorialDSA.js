function factorial(n) {
  let fac = 1;
  for (let i = n; i > 0; i--) {
    fac = fac * i;
  }
  return fac;
}

const result = factorial(5); // 120  (5×4×3×2×1)
const result2 = factorial(0); // 1
console.log(result, result2);

function sumDigits(number) {
  const numStr = String(number);
  let sum = 0;

  for (let i = 0; i < numStr.length; i++) {
    sum += +numStr[i];
  }
  return sum;
}

let result = sumDigits(12345);
console.log(result);

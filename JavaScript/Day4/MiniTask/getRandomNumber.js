function randomInt(min, max){
  const randomNum = Math.random() * (max-min + 1) + min;
  return Math.floor(randomNum)
}

let result = randomInt(5, 10)
console.log(result)
//1. Use a for loop to print numbers 1 to 10.
for(let i = 1; i <= 10; i++){
  console.log(i)
}

//2. Use a while loop to print numbers 10 down to 1 (countdown).
let num = 10
while(num > 0){
  console.log(num)
  num--
}

//3. Use a do...while loop that runs at least once, printing "Hello" 3 times.
let time = 3
do{
  console.log("Hello");
  time--
}while(time > 0)
//4. Use for...of to print each character of the string "Claude" on its own line.
const str = "Calude"
for(const char of str ){
  console.log(char)
}

//5. Use for...in to print each key and value of this object:
const person = { name: "Alex", age: 30, city: "Delhi" };
for(const key in person){
  console.log(key, person[key]) // i stuck in this part when print value then i chek in my note book then i know this way we can access value form object .
}

//6. Use a for loop to calculate the sum of numbers from 1 to 100.
let sum = 0; 

for(let i = 0; i <= 100; i++){
  sum = sum + i
}
console.log("sum :",sum)

//7. Use a for loop to reverse an array without using .reverse() — e.g., [1,2,3,4] → [4,3,2,1].
let arr = [1, 2, 3, 4]
let revArr = []
for(let i = arr.length-1; i >= 0; i--){
    revArr.push(arr[i])
}
console.log(revArr)
//8. Predict the output (tricky one — think carefully about scope):
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}
//output : 0 1 2
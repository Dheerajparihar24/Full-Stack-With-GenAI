// FizzBuzz: The classic Question. Loop from 1 to 20. For each number:

// If divisible by 3 and 5 → print "FizzBuzz"
// If divisible by 3 only → print "Fizz"
// If divisible by 5 only → print "Buzz"
// Otherwise → print the number itself

function fizzBuzz(num){
    if(num % 3 === 0 && num % 5 === 0){
        return "FizzBuzz"
    }else if(num % 3 === 0){
        return "Fizz"
    }else if(num % 5 === 0){
        return "Buzz"
    }else{
        return num
    }
}

let result = fizzBuzz(15)
console.log(result)
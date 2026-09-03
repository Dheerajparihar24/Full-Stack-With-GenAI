// 1. Write an if/else that logs "positive", "negative", or "zero" for a given number n.

function checkNumber(num){
    if(num > 0){
        console.log("positive")
    }else if(num < 0){
        console.log("negative")
    }else{
        console.log("zero")
    }
}

checkNumber(0)
checkNumber(5)
checkNumber(-1)

//2.  Write a ternary that returns "even" or "odd" for a number n.
function evenOdd(num){
    const result = num % 2 === 0 ? "even" : "odd";
    console.log(result)
}

evenOdd(5)
evenOdd(4)

// 3. Write a switch statement that takes a grade ("A", "B", "C", "D", "F") and logs a message for each
//  (e.g., "Excellent", "Good", etc.), with a default for invalid input.

function gradeMessagePrint(grade){
    switch(grade){
        case "A" :
            console.log("Excellent");
             break;
        case "B" :
            console.log("Very Good");
            break;
        case "C":
            console.log("Good");
            break;
        case "D": 
            console.log("Normal");
            break;
        default:
            console.log("Invalid Input")

    }
}

gradeMessagePrint("A")

// 4. 
let a = 0;
if (a) {
  console.log("truthy");
} else {
  console.log("falsy");
}

// output - falsy-- because 0 is falsy value 

// 5. Write an if/else chain that categorizes a number score into "A" (90+), "B" (80-89), 
// "C" (70-79), or "F" (below 70).

function categorizesScore(score){
    if(score >= 90 ){
        console.log("A")
    }else if(score >= 80 && score <=89){
        console.log("B")
    }else if(score >= 70 && score <= 79){
        console.log("C")
    }else{
        console.log("F")
    }
}

 categorizesScore(5)

 // 6. predict output
 console.log(null == undefined); // true
console.log(null === undefined); // false - Because type of different different

// 7. Given let isLoggedIn = true;, write one line using a ternary inside a template literal:
let isLoggedIn = true;
console.log(`${isLoggedIn ? "Welcome back" : "Please log in."}`);

//#8 — Predict:
let x = "0";
if (x) {
  console.log("truthy");
} else {
  console.log("falsy");
}
//Output is truthy becaue "o" this is not empty string.
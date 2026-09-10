//Functions

// 1. var leaking out of a block
// let flag = true;

// if(flag){
//     var i = 10;
// }

// console.log(i)

//Fix version

// if(flag){
//     let varI = 10
// }
// console.log(varI)

//2. Accessing a variable outside the function it was declared in
// function fncScope(){
//     var name = "Alex"
// }

// fncScope()
// console.log(name)



// Buggy version:
function tdzFn(name){
    console.log(name);
    let name = "Alex"
}
tdzFn("Sam")

// What happens: I'ts show error for let name variable because it's already declared in parameter it's also function part.
// Why: we can remove the let name variable or change the name, then it's show no bug

// Fixed version:
function tdzFn(name){
    console.log(name); // output : "Sam"
}
tdzFn("Sam")
//Functions

// 1. var leaking out of a block
let flag = true;

if(flag){
    var i = 10;
}

console.log(i)

//Fix version

if(flag){
    let varI = 10
}
console.log(varI) //Error

//2. Accessing a variable outside the function it was declared in
function fncScope(){
    var name = "Alex"
}

console.log(name)// error because we are calling function after console.log name;
fncScope()
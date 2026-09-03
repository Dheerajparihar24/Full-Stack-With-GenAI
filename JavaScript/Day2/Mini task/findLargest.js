// Problem: Find the largest number
// Write a function findLargest(arr) that takes an array of numbers and returns the largest one, 
// without using Math.max(). Use a loop and conditionals (both of which you now know).

function findLargest(arr){
    let largest = arr[0]
    
    for(let i = 0; i < arr.length; i++){
        if(largest < arr[i]){
            largest = arr[i]
        }
    }
    return largest
}

let biggest = findLargest([3, 7, 2, 9, 4]);
console.log(biggest + 1);              // should return 5
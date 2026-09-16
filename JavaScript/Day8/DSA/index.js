// Problem: Merge two objects
// Write a function mergeObjects(obj1, obj2) that merges two objects into one new object, 
// without mutating either original. If both objects have the same key, obj2's value should win (override obj1's). 
// Use the spread operator (which you already used today in updateQuantity!) rather than manually copying each property.

// mergeObjects({ a: 1, b: 2 }, { b: 3, c: 4 })
// { a: 1, b: 3, c: 4 }

function mergeObjects(obj1, obj2){
    return {...obj1, ...obj2}
}
console.log(mergeObjects({ a: 1, b: 2 }, { b: 3, c: 4 }))
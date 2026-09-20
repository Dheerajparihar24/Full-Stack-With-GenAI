// Problem: Check if two strings are anagrams
// Write a function isAnagram(str1, str2) that returns true if the two strings are anagrams of each other
//  (contain exactly the same letters, just rearranged — ignore case and spaces),
//  false otherwise.

// Hint: think about what makes two words anagrams — if you sort the letters of both words alphabetically, 
// anagrams would produce the exact same sorted sequence. You'll need to look up .sort(),
//  a new array method (sorts an array's elements — by default, alphabetically for strings). 
// Combine it with .split("") and .join(""), similar to today's reverse pattern.

function isAnagram(text1, text2){
   const output1 =  text1.toLowerCase().split("").sort().join("").trim()
  const output2 = text2.toLowerCase().split("").sort().join("").trim()
  return output1 === output2
}
console.log(isAnagram("listen", "silent"))// true
console.log(isAnagram("hello", "world"))   // false
console.log(isAnagram("Dormitory", "Dirty Room")) // true (ignore case and spaces)
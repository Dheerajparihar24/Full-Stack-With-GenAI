// Build a text-analyzer (word count, palindrome check, reverse)

// Build a small text-analyzer with these functions, using the string methods from today (plus whatever array methods you already know):

//1. wordCount(text) — returns the number of words in a given string (split by spaces).
//2. charCount(text) — returns the number of characters, excluding spaces.
//3. reverseString(str) — returns the string reversed (letter by letter, not word by word —
// you'll need a similar split/reverse/join pattern as #7, but joining with "" instead of " ").
//4. isPalindrome(str) — you already wrote a working version of this on Day 4! Rewrite it now using what you know today —
// .split(""), .reverse(), .join("") — which should be much shorter than your original loop-based version. Compare the two approaches once done.
//5. countWordOccurrences(text, word) — counts how many times a specific word appears in a string (case-insensitive).
// Hint: split into words, lowercase everything, then use an array method to count matches.

function wordCount(text) {
  return text.split(" ").length;
}
console.log(wordCount("The quick brown fox"));

function charCount(text) {
  return text
    .trim()
    .split("")
    .filter((char) => char !== " ").length;
}
console.log(charCount("The quick brown fox"));

function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("The quick brown fox"));

function isPalindrome(str) {
  str = str.toLowerCase();
  return str === str.split("").reverse().join("");
}
console.log(isPalindrome("hello"));
console.log(isPalindrome("madam"));

function countWordOccurrences(text, word) {
  word = word.toLowerCase();
  text = text.toLowerCase();
  return text.split(" ").filter((str) => str === word).length;
}
console.log(countWordOccurrences("the cat sat on the mat the end", "the")); // 3
countWordOccurrences("Hello world hello", "hello");

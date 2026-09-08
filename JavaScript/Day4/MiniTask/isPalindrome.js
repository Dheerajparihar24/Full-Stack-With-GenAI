function isPalindrome(str) {
  str = str.toLowerCase();
  let revStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    revStr += str[i];
  }
  return revStr === str;
}
let result = isPalindrome("racecar");
if (result) {
  console.log("It's a palindrome!");
}

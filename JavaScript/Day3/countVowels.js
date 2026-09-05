function countVowels(str) {
  str = str.toLowerCase();
  const vowels = ["a", "e", "i", "p", "u"];
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count += 1;
    }
  }
  return count
}
console.log(countVowels("Hello World")); // should return 3 (e, o, o)


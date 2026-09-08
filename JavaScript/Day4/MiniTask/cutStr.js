// truncate(str, maxLength) — if str is longer than maxLength,
// cut it down and add "..." at the end; otherwise return it unchanged.
function truncate(str, maxLength) {
  if (str.length > maxLength) {
    return str.slice(0, maxLength) + "...";
  } else {
    return str;
  }
}

let result = truncate("asdgdgdgdg", 5);
console.log(result);

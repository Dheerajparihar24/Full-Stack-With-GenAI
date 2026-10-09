// 1
const user = { name: "Sam", profile: { bio: "Developer" } };
console.log(user?.profile?.bio);
console.log(user?.settings?.theme);

// 2
const config = { timeout: 0, retries: null, name: "" };

console.log(config.timeout ?? "N/A");

console.log(config.retries ?? "N/A");

console.log(config.name ?? "N/A");

//3
function getUser(id) {
  const users = { 1: { name: "Alex" }, 2: { name: "Sam" } };
  return users[id];
}
console.log(getUser(1)?.name); // "Alex" — getUser(1) returns a real object, .name works fine
console.log(getUser(99)?.name); // undefined — getUser(99) returns undefined, but ?. prevents a crash

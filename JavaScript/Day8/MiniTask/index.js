let shoppingList = [
  { name: "Milk", quantity: 2 },
  { name: "Eggs", quantity: 12 },
  { name: "Bread", quantity: 1 },
];

// 1. addItem(name, quantity) — adds a new item object to the list.
function addItem(name, quantity) {
  shoppingList.push({ name, quantity });
}
addItem("Fruits", 25);
console.log(shoppingList);

//2. removeItem(name) — removes the item with the matching name (hint: use
// .filter() to create a new list excluding that item, and reassign shoppingList
// to the result — since shoppingList is let, you can reassign it).

function removeItem(name) {
  shoppingList = shoppingList.filter((list) => list.name !== name);
}
removeItem("Milk");
console.log(shoppingList);

//3. updateQuantity(name, newQuantity) — finds the item by name and updates its quantity.
// (Hint: use .map() — return a new object with the updated quantity if the name matches,
// or return the item unchanged if it doesn't; then reassign shoppingList to this new mapped array,
//  same pattern as removeItem.)

function updateQuantity(name, newQuantity) {
  shoppingList = shoppingList.map((item) =>
    item.name === name ? { ...item, quantity: newQuantity } : { ...item },
  );
}

updateQuantity("Eggs", 30);
console.log(shoppingList);

//4. printList() — logs the list in a readable format using .map() and destructuring, e.g.,
//  shoppingList.map(({ name, quantity }) => ${name}: ${quantity}).

function printList() {
  shoppingList.forEach((item) => {
    console.log(`${item.name} : ${item.quantity}`);
  });
}

printList()

// #6 — getTotalItems() — uses .reduce() to sum up all quantity values across the list.
function getTotalItems(){
  const total = shoppingList.reduce((acc, curr) => {
    return curr.quantity + acc
  },0)
  console.log(total)
}
getTotalItems()
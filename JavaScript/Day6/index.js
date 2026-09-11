let shoppingList = ["Milk", "Eggs", "Bread"];

function addItem(item){
  shoppingList.push(item)
}

function removeLastItem(){
  shoppingList.pop()
}

function removeFirstItem(){
  shoppingList.shift()
}

function addItemToFront(item){
  shoppingList.unshift(item)
}

function editItem(index, newItem){
  shoppingList.splice(index, 1, newItem)
}

function printList(){
  console.log(shoppingList)
}

printList();               // initial state
addItem("Butter");
printList();
addItemToFront("Juice");
printList();
removeLastItem();
printList();
editItem(1, "Cheese");
printList();

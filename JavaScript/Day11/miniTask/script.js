const fruitList = document.getElementById("fruitList");
const numberList = document.getElementById("numberList");
const fruits = ["Apple", "Banana", "Mango", "Orange"];

fruits.forEach((fruit) => {
  const li = document.createElement("li");
  li.textContent = fruit;
  fruitList.appendChild(li);
});

const numbers = [2, 4, 6, 8, 10];
numbers.forEach((num) => {
  const li = document.createElement("li");
  li.textContent = num * 2;
  numberList.appendChild(li);
});

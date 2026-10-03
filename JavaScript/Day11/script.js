const heading = document.getElementById("heading");
heading.textContent = "Hello, DOM!";

const info = document.querySelector(".info");
info.style.color = "red";

const list = document.querySelector("#list");
const li = document.createElement("li");
li.textContent = "Item 3";
list.appendChild(li);

const liAll = document.querySelectorAll("li");
console.log(liAll.length);

const box = document.getElementById("box");
box.classList.add("highlight");
console.log(box.classList);

const btn = document.getElementById("myButton");
// btn.addEventListener("click", (e) => {
//   e.preventDefault();
//   btn.textContent = "Clicked!";
// });
btn.textContent = "Clicked!";

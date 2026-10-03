const addBtn = document.querySelector("#addBtn");
const todoInput = document.querySelector("#todoInput");
const todoList = document.querySelector("#todoList");

// Add todo create li/delete btn
addBtn.addEventListener("click", () => {
  addTodo();
});

function addTodo() {
  if (!todoInput.value.trim()) {
    alert("Please add valid todo!");
    return;
  }

  const li = document.createElement("li");
  li.textContent = todoInput.value.trim();

  const deleteSpan = document.createElement("span");
  deleteSpan.innerHTML = "\u00d7";
  deleteSpan.classList.add("delete");

  deleteSpan.addEventListener("click", () => {
    deleteTodo(li);
  });

  li.appendChild(deleteSpan);
  todoList.appendChild(li);

  todoInput.value = "";
}

//Delete todo
function deleteTodo(li) {
  li.remove();
}

todoInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addTodo();
  }
});

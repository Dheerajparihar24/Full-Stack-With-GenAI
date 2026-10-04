const addBtn = document.querySelector("#addBtn");
const todoInput = document.querySelector("#todoInput");
const todoList = document.querySelector("#todoList");
const countTask = document.querySelector("#countTask");

let count = 0;

// Add todo create li/delete btn
addBtn.addEventListener("click", () => {
  addTodo();
});

function addTodo(priority) {
  const newTodo = todoInput.value.trim();
  if (!newTodo) {
    alert("Please add valid todo!");
    return;
  }
  //Duplicate check
  // console.log(todoList.children);
  const isDuplicate = [...todoList.children].some((li) => {
    return (
      li.firstChild.textContent.trim().toLowerCase() === newTodo.toLowerCase()
    );
  });

  if (isDuplicate) {
    alert("This task is already added!");
    return;
  }

  const finalPriority = priority ?? "Normal";
  const li = document.createElement("li");
  li.textContent = `${newTodo} [${finalPriority}]`;

  const deleteSpan = document.createElement("span");
  deleteSpan.innerHTML = "\u00d7";
  deleteSpan.classList.add("delete");

  deleteSpan.addEventListener("click", () => {
    deleteTodo(li);
  });

  li.appendChild(deleteSpan);
  todoList.appendChild(li);

  count++;
  updateCount();

  todoInput.value = "";
}

//Delete todo
function deleteTodo(li) {
  li.remove();
  count--;
  updateCount();
}

todoInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addTodo();
  }
});

function updateCount() {
  countTask.innerText = `Count: ${count}`;
}
updateCount();

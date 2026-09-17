let state = {
  user: { name: "Alex", age: 25 },
  todos: [
    { id: 1, text: "Learn JS", done: false },
    { id: 2, text: "Build project", done: false },
  ],
  theme: "light",
};


function updateTheme(newTheme){
    return {...state, theme:newTheme}
}
// console.log(state)
// console.log(updateTheme("neon"))


function updateUserAge(newAge){
    return{...state, user:{...state.user, age:newAge}}
}

// console.log(updateUserAge(30))

function addTodo(text){
    return{...state, todos:[...state.todos,{id:state.todos.length+1, text, done:false} ]}
}

// console.log(addTodo("new todo"))

    function toggleTodo(id){
        return{
            ...state,
            todos: state.todos.map((todo)=>
            todo.id === id ? {...todo, done: !todo.done} : todo
            )
        }
    }
    console.log(toggleTodo(1))
//Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOptions = document.querySelector(".filter-todo");

//Event Listeners
document.addEventListener('DOMContentLoaded', getTodos);
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOptions.addEventListener("click", filterTodo);

//FUNCTIONS

//Function - onClick todoButton -> create todo-item(li) with two buttons inside -> todoDiv
function addTodo(event) {
  // Prevent form from submiting on click
  event.preventDefault();
  // Button test
  // console.log('You clicked the button');
  //
  //Create Todo DIV with the class .todo
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  //
  //Create LI with the class .todo-item, text inside todo-item = const todoInput, add todo-item inside todoDiv
  const newTodo = document.createElement("li");
  newTodo.classList.add("todo-item");
  newTodo.innerHTML = todoInput.value;
  todoDiv.appendChild(newTodo);
  //
  //ADD todo to local storage
  saveLocalTodos(todoInput.value);
  //
  //Create button "complete-task", with the favicon inside, add class .complete-btn insert a button inside todoDiv
  const completeButton = document.createElement("button");
  completeButton.innerHTML = '<i class="fas fa-check"></i>';
  completeButton.classList.add("complete-btn");
  todoDiv.appendChild(completeButton);
  //
  //Create button "trash-task", with the favicon inside, add class .trash-btn insert a button inside todoDiv
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);
  //APPEND TO LIST
  todoList.appendChild(todoDiv);
  //CLEAR Todo INPUT VALUE after submit
  todoInput.value = "";
}

function deleteCheck(element) {
  //Check if the onClick is working F12 console -->
  // console.log(e.target);
  const item = element.target;
  //Delete Todo item when clicked on trash-btn
  if (item.classList[0] === "trash-btn") {
    //because todo in not decleared globaly, we need to declear here
    // .trash-btn parent element = .todo element
    const todo = item.parentElement;
    //adding animation on .trash-animation on click
    todo.classList.add("trash-animation");
    //even listener that going to wait for the animation to finish before removing todo element
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }
  //Check completed Todo item
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    //toggle class .completed on click
    todo.classList.toggle("completed");
  }
}

function filterTodo(element) {
  //selecting todos <options>
  const todos = todoList.childNodes;
  // console.log(todos);
  //looping finction
  todos.forEach(function (todo) {
    //selecting <options> by the its value
    switch (element.target.value) {
      //<option value="all">all</option>
      case "all":
        //when selected display .todo flex
        todo.style.display = "flex";
        //break statement is used when you want to exit a switch statement
        break;
      //<option value="completed">
      case "completed":
        //if the todo element containt class .completed display: flex>
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          //if the todo element DO NOT containt class .completed display: none>
          todo.style.display = "none";
        }
        break;
      //<option value="uncompleted"
      case "uncompleted":
        // by having ! in front of todo (!todo) = contains("completed") turns in to  ("incompleted")>
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}

function saveLocalTodos(todo) {
  //checks if there is any exsisting todos
  let todos;
  //if todo does not exist , create empy array
  if (localStorage.getItem("todos") === null) {
    //empty array
    todos = [];
  } else {
    //if I have any exsisting todo, I will parse in to array (continue adding)
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todo);
  //pushing back and save it to the local storage
  localStorage.setItem("todos", JSON.stringify(todos));
}


function getTodos() {
  //checks if there is any exsisting todos
  let todos;
  //if todo does not exist , create empy array
  if (localStorage.getItem("todos") === null) {
    //empty array
    todos = [];
  } else {
    //if I have any exsisting todo, I will parse in to array (continue adding)
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  //looping trough the array with annonymus function
  todos.forEach(function (todo) {
    //Create Todo DIV with the class .todo
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //
    //Create LI with the class .todo-item, text inside todo-item = const todoInput, add todo-item inside todoDiv
    const newTodo = document.createElement("li");
    newTodo.classList.add("todo-item");
    newTodo.innerHTML = todo;
    todoDiv.appendChild(newTodo);

    //
    //Create button "complete-task", with the favicon inside, add class .complete-btn insert a button inside todoDiv
    const completeButton = document.createElement("button");
    completeButton.innerHTML = '<i class="fas fa-check"></i>';
    completeButton.classList.add("complete-btn");
    todoDiv.appendChild(completeButton);
    //
    //Create button "trash-task", with the favicon inside, add class .trash-btn insert a button inside todoDiv
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    //APPEND TO LIST
    todoList.appendChild(todoDiv);
  });
}

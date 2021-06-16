//Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//Event Listeners
todoButton.addEventListener('click', addTodo);


//Functions - onClick todoButton -> create todo-item(li) with two buttons inside -> todoDiv
function addTodo(event){
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
    // newTodo.innerText = "labas";
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
    //CLEAR Todo INPUT VALUE after submit
    todoInput.value = "";
}
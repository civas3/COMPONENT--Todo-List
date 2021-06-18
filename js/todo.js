//Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);


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

function deleteCheck(element){
    //Check if the onClick is working F12 console --> 
    // console.log(e.target);
    const item = element.target;
    //Delete Todo item when clicked on trash-btn
    if(item.classList[0] === "trash-btn"){
        //because todo in not decleared globaly, we need to declear here
        // .trash-btn parent element = .todo element
        const todo = item.parentElement;
        //adding animation on .trash-animation on click
        todo.classList.add("trash-animation");
        //even listener that going to wait for the animation to finish before removing todo element
        todo.addEventListener("transitionend", function(){
            todo.remove();
        });
        
    }
    //Check completed Todo item
    if(item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        //toggle class .completed on click
        todo.classList.toggle('completed');
    }
}


// Query Selectors

const input = document.querySelector("#new-todo");
const button = document.querySelector("#enter");
const toDoList = document.querySelector("#list");



button.addEventListener("click", (event) => {

    const newToDo = document.createElement("li");
    newToDo.innerText = input.value;
    toDoList.appendChild(newToDo);

    console.log(newToDo);
});
// Query Selectors

const input = document.querySelector("#new-todo");
const button = document.querySelector("#enter");
const toDoList = document.querySelector("#list");

button.addEventListener("click", (event) => {

    const newToDo = document.createElement("li");
    newToDo.innerText = input.value;

    // Delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.setAttribute("style", "margin-left: 0.5em");

    toDoList.appendChild(newToDo);
    newToDo.appendChild(deleteButton);

// Defining a function inside a function
// Could abstract line 26/27
    deleteButton.addEventListener("click", (event) => {
        console.log("delete button pressed");
        toDoList.removeChild(deleteButton.parentNode);
    });

    console.log(newToDo);
    console.log(toDoList);
});
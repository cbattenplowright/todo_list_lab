// Query Selectors

const input = document.querySelector("#new-todo");
const button = document.querySelector("#enter");
const toDoList = document.querySelector("#list");
const dateButton = document.querySelector("#date");
const dateDisplay = document.querySelector("#date-display");

// deletes parent node element
const deleteParentNode = (element) => {
    console.log("parent node deleted");
    toDoList.removeChild(element.parentNode);
};

// creates delete button and adds event listener
const createDeleteButton = () => {

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.setAttribute("style", "margin-left: 0.5em");

    deleteButton.addEventListener("click", (event) => {
        // deletes list item when delete button is clicked 
        console.log("delete button pressed");
        deleteParentNode(deleteButton);
    });

    return deleteButton;  
}

// creates new list item when enter button is clicked
button.addEventListener("click", (event) => {

    const newToDo = document.createElement("li");
    newToDo.innerText = input.value;
    newToDo.appendChild(createDeleteButton());
    
    toDoList.appendChild(newToDo);
});

// displays date when button clicked
dateButton.addEventListener("click", (event) => {

    dateDisplay.innerText = Date();
    dateDisplay.setAttribute("style", "margin: 16px 0");

})
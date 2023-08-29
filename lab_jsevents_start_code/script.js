// Query Selectors

const input = document.querySelector("#new-todo");
const button = document.querySelector("#enter");
const toDoList = document.querySelector("#to-do-list");
const completedList = document.querySelector("#completed-list");
const dateButton = document.querySelector("#date");
const dateDisplay = document.querySelector("#date-display");

// deletes parent node element
const deleteParentNode = (element) => {
    console.log("parent node deleted");
    // removes from list depending on which list it is in
    switch (element.parentNode.parentNode) {
        case toDoList:
            toDoList.removeChild(element.parentNode);
            break;
        case completedList:
            completedList.removeChild(element.parentNode);
        default:
            break;
    }
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
};

// creates a complete checkbox and adds event listener
const createCompleteButton = () => {
    const completeButton = document.createElement("input");
    completeButton.type = "checkbox";
    completeButton.setAttribute("style", "margin-left: 0.5em");

    completeButton.addEventListener("click", (event) => {
        // moves the list item to completed list
        console.log("complete button pressed");
        completedList.appendChild(completeButton.parentNode);
        completeButton.parentNode.setAttribute("style", "color: grey");
    });

    return completeButton;
};

// creates new list item when enter button is clicked
button.addEventListener("click", (event) => {

    const newToDo = document.createElement("li");
    newToDo.innerText = input.value;
    newToDo.appendChild(createDeleteButton());
    newToDo.appendChild(createCompleteButton());
    
    toDoList.appendChild(newToDo);
});

// displays date when button clicked
dateButton.addEventListener("click", (event) => {

    dateDisplay.innerText = Date();
    dateDisplay.setAttribute("style", "margin: 16px 0");

})
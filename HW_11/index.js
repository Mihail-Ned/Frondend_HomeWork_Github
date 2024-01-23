//console.log("Hello")
let todoList = [];

function displayTodoList() {
    const todoListElement = document.getElementById("todo-list");
    todoListElement.innerHTML = "";

    todoList.forEach((task, index) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `<input type="checkbox" onchange="toggleCompleted(${index})" ${task.completed ? 'checked' : ''}>
                             <span class="${task.completed ? 'completed' : ''}">${task.description}</span>`;
        todoListElement.appendChild(listItem);
    });
}

function addTodo() {
    const newTaskInput = document.getElementById("new-task");
    const newTaskDescription = newTaskInput.value.trim();

    if (newTaskDescription !== "") {
        todoList.push({ description: newTaskDescription, completed: false });
        newTaskInput.value = "";
        displayTodoList();
    }
}

function markAsCompleted() {
    todoList = todoList.filter(task => !task.completed);
    displayTodoList();
}

function toggleCompleted(index) {
    todoList[index].completed = !todoList[index].completed;
    displayTodoList();
}

displayTodoList();

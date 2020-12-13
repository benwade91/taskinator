var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function() {
    event.preventDefault();
    
    var listItemEl = document.createElement("li");
    listItemEl.textContent = "Hello";
    listItemEl.className = "task-item";
    tasksToDoEl.appendChild(listItemEl);
}
formEl.addEventListener("submit", createTaskHandler);


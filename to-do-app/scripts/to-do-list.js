'use strict'

let toDo = getToDoList();

const filters = {
    searchText: "",
    hideCompleted: false
}

renderTodo(toDo, filters);

//Event handlers
document.getElementById('txt-filter').addEventListener('input', (e) => {
    filters.searchText = e.target.value;
    renderTodo(toDo, filters);
})

document.getElementById('add-task-form').addEventListener('submit', (e) => addTask(e))

document.getElementById('hide-comp-check').addEventListener('change', (e) => {
    filters.hideCompleted = e.target.checked;
    renderTodo(toDo, filters);
})
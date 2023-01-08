let toDo = [{
    task: 'Walk the dog',
    completed: true
}, {
    task: 'Play games',
    completed: false
}, {
    task: 'Study JS',
    completed: true
}, {
    task: 'Work',
    completed: false
}, {
    task: 'Sleep',
    completed: true
}]

const filters = {
    searchText: "",
    hideCompleted: false
}

renderTodo(toDo, filters);


function renderTodo(list, filters) {
    const todoDiv = document.getElementById('to-do-list');

    let filteredList = list.filter((task) => {
        const textMatchFilter = task.task.toLocaleLowerCase().includes(filters.searchText.toLocaleLowerCase());
        const hideCompletedFilter = !filters.hideCompleted || !task.completed;
        return textMatchFilter && hideCompletedFilter;
    })
    todoDiv.innerHTML = "";

    const summary = document.createElement('p');
    summary.textContent = `Total number of tasks to do is ${filteredList.length}`
    todoDiv.appendChild(summary);

    filteredList.forEach((task, index) => {
        const newP = document.createElement('p');
        newP.textContent = `Task ${index + 1}: ${task.task}`;
        todoDiv.appendChild(newP);
    })
}


//Event handlers

document.getElementById('txt-filter').addEventListener('input', (e) => {
    filters.searchText = e.target.value;
    renderTodo(toDo, filters);
})

document.getElementById('add-task-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const inpVal = e.target.elements.addTaskInp.value;
    toDo.push({
        task: inpVal,
        completed: false
    })
    const todoDiv = document.getElementById('to-do-list');
    const newP = document.createElement('p');
    newP.textContent = `Task ${toDo.length}: ${inpVal}`;
    todoDiv.appendChild(newP);
    e.target.elements.addTaskInp.value = '';
})

document.getElementById('hide-comp-check').addEventListener('change', (e) => {
    filters.hideCompleted = e.target.checked;
    renderTodo(toDo, filters);
})
//Check notes in the local storage

function getToDoList() {
    const toDoJSON = localStorage.getItem('toDoList');
    if (toDoJSON !== null) {
        return JSON.parse(toDoJSON)
    } else {
        return []
    }
}

//Save to do list in the local storage

function saveToDoList(list) {
    localStorage.setItem('toDoList', JSON.stringify(list));
}

//remove task from the list
function removeTask(id) {
    const taskIndex = toDo.findIndex(function (task) {
        return task._id === id
    })
    if (taskIndex > -1) {
        toDo.splice(taskIndex, 1);
    }
}

//Render the to do list
function renderTodo(list, filters) {
    const todoDiv = document.getElementById('to-do-list');
    const incompleteTasks = list.filter((task) => { return !task.completed });

    let filteredList = list.filter((task) => {
        const textMatchFilter = task.task.toLocaleLowerCase().includes(filters.searchText.toLocaleLowerCase());
        const hideCompletedFilter = !filters.hideCompleted || !task.completed;
        return textMatchFilter && hideCompletedFilter;
    })

    todoDiv.innerHTML = "";

    todoDiv.appendChild(generateSummaryDOM(incompleteTasks));

    filteredList.forEach((task, index) => {
        todoDiv.appendChild(generateTaskDOM(task, index));
    })
}

//Generate the to do list task DOM

function generateTaskDOM(task, index) {
    //create elemets: div, checkbox, text and button
    const taskDiv = document.createElement('div');
    const checkbox = document.createElement('input');
    const newP = document.createElement('span');
    const button = document.createElement('button');

    //Working with checkbox
    checkbox.setAttribute('type', 'checkbox');
    checkbox.checked = task.completed;
    checkbox.addEventListener('change', (e) => {
        task.completed = e.target.checked;
        saveToDoList(toDo);
        renderTodo(toDo, filters);
    })

    //working with text
    newP.textContent = `Task ${index + 1}: ${task.task}`;

    //working with button
    button.textContent = 'x';
    button.addEventListener('click', function () {
        removeTask(task._id);
        saveToDoList(toDo);
        renderTodo(toDo, filters);
    })

    //append elements to the created div
    taskDiv.appendChild(checkbox);
    taskDiv.appendChild(newP);
    taskDiv.appendChild(button);

    return taskDiv
}

//Generate the to do list summary DOM
function generateSummaryDOM(list) {
    const summary = document.createElement('p');
    summary.textContent = `Total number of tasks to do is ${list.length}`
    return summary
}

//Add a task to the to do list
function addTask(e) {
    e.preventDefault();
    const inpVal = e.target.elements.addTaskInp.value;
    toDo.push({
        _id: uuidv4(),
        task: inpVal,
        completed: false
    })
    saveToDoList(toDo)
    renderTodo(toDo, filters);
    e.target.elements.addTaskInp.value = '';
}
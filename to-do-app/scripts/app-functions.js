'use strict'

//Check notes in the local storage

const getToDoList = () => {
    const toDoJSON = localStorage.getItem('toDoList');
    try {
        return toDoJSON ? JSON.parse(toDoJSON) : [];
    } catch {
        return []
    }
}

//Save to do list in the local storage

const saveToDoList = (list) => {
    localStorage.setItem('toDoList', JSON.stringify(list));
}

//remove task from the list
const removeTask = (id) => {
    const taskIndex = toDo.findIndex((task) => task._id === id);
    if (taskIndex > -1) {
        toDo.splice(taskIndex, 1);
    }
}

//Render the to do list
const renderTodo = (list, filters) => {
    const todoDiv = document.getElementById('to-do-list');
    const incompleteTasks = list.filter((task) => !task.completed);

    let filteredList = list.filter((task) => {
        const textMatchFilter = task.task.toLocaleLowerCase().includes(filters.searchText.toLocaleLowerCase());
        const hideCompletedFilter = !filters.hideCompleted || !task.completed;
        return textMatchFilter && hideCompletedFilter;
    })

    todoDiv.innerHTML = "";
    if (filteredList.length > 0) {
        todoDiv.appendChild(generateSummaryDOM(incompleteTasks));
        filteredList.forEach((task, index) => {
            todoDiv.appendChild(generateTaskDOM(task, index));
        })
    } else {
        const emptyMsg = document.createElement('p');
        emptyMsg.classList.add('empty-message');
        emptyMsg.textContent = 'No tasks to do';
        todoDiv.appendChild(emptyMsg);
    }
}

//Generate the to do list task DOM

const generateTaskDOM = (task, index) => {
    //create elemets: div, checkbox, text and button
    const taskEl = document.createElement('label');
    taskEl.classList.add('list-item');
    const containerEl = document.createElement('div');
    containerEl.classList.add('list-item__container');
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
    button.textContent = 'Remove';
    button.classList.add('button', 'button--text')
    button.addEventListener('click', () => {
        removeTask(task._id);
        saveToDoList(toDo);
        renderTodo(toDo, filters);
    })

    //append elements
    taskEl.appendChild(containerEl)
    containerEl.appendChild(checkbox);
    containerEl.appendChild(newP);
    taskEl.appendChild(button);

    return taskEl
}

//Generate the to do list summary DOM
const generateSummaryDOM = (list) => {
    const summary = document.createElement('p');
    summary.classList.add('list-title');
    const ending = list.length === 1 ? '' : 's'

    summary.textContent = `You have ${list.length} task${ending} to do`

    return summary
}

//Add a task to the to do list
const addTask = (e) => {
    e.preventDefault();
    const inpVal = e.target.elements.addTaskInp.value.trim();
    if (inpVal.length > 0) {
        toDo.push({
            _id: uuidv4(),
            task: inpVal,
            completed: false
        })
        saveToDoList(toDo)
        renderTodo(toDo, filters);
        e.target.elements.addTaskInp.value = '';
    }
}
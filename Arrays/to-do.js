//Covert array to array of objects (props => text, completed)
//Remove an item by text value


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

function deleteTask(list, taskName) {
    let taskIndex = list.findIndex((task) => {
        return task.task.toUpperCase() === taskName.toUpperCase()
    })
    if (taskIndex > -1) {
        list.splice(taskIndex, 1);
    }
}

console.log(toDo);
// deleteTask(toDo, 'play games');

function thingToDo(tasks) {
    return tasks.filter((task) => {
        return !task.completed
    })
}

function sortToDo(tasks) {
    tasks.sort(function (a, b) {
        return b.completed - a.completed
    })
}

sortToDo(toDo)

console.log(toDo);
const notes = [{
    title: 'Note 2',
    body: 'Go to Spain'
}, {
    title: 'Note 1',
    body: 'Go to Ukraine'
}, {
    title: 'Note 3',
    body: 'Go to USA'
}];

// notes.push('Note 4');


// notes.unshift('My first note')

// console.log(notes.pop());
// console.log(notes.shift());

// notes.splice(1, 1, 'New second note')

// notes[0] = 'This is now the new note 1';

// notes.forEach((item, index) => {
//     console.log(index, item)
// })

// console.log(notes.length);
// console.log(notes);

// for (let count = 1; count <= 3; count++) {
//     console.log(count);
// }

// for (let count = notes.length - 1; count >= 0; count--){
//     console.log(notes[count])
// }

// let index = notes.findIndex(function (note, index) {
//     return note.title === 'Note 1'
// })
// console.log(index)

// const findNote = function (notes, noteTitle) {
//     const index = notes.findIndex(function (note, index) {
//         return note.title.toLowerCase() === noteTitle.toLowerCase()
//     })
//     return notes[index]
// }
// const findNote = function (notes, noteTitle) {
//     return notes.find(function (note, index) {
//         return note.title.toLowerCase() === noteTitle.toLowerCase()
//     })
// }

// function findNotes(notes, query) {
//     return notes.filter((note, index) => {
//         const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase());
//         const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase());
//         return isTitleMatch || isBodyMatch
//     })
// }

function sortNotes(notes) {
    notes.sort(function (a, b) {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1
        } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
            return 1
        } else {
            return 0
        }
    })
}
sortNotes(notes);
console.log(notes);
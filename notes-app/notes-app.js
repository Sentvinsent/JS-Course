'use strict'

let notes = getSavedNotes();

const filters = {
    searchText: '',
    sortBy: 'byEdited'
}

//Add new element
const addNote = () => {
    const id = uuidv4()
    const timestamp = new Date().getTime();
    notes.push({
        id: id,
        title: '',
        body: '',
        created: timestamp,
        updated: timestamp
    })
    saveNotes(notes);
    location.assign(`note.html#${id}`);
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', addNote);

document.querySelector('#search-txt').addEventListener('input', (e) => {
    filters.searchText = e.target.value;
    renderNotes(notes, filters)
})

document.getElementById('filter-by').addEventListener('change', (e) => {
    filters.sortBy = e.target.value;
    renderNotes(notes, filters)
})

window.addEventListener('storage', (e) => {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue);
        renderNotes(notes, filters)
    }
})

//Unix Epoch - January 1st 1970 00:00:00
// timestamp number calculate from it in ms

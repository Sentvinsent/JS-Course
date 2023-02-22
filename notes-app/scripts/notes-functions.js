'use strict'
//Read existing note from local storage
const getSavedNotes = () => {
    const notesJSON = localStorage.getItem('notes');
    try {
        return notesJSON ? JSON.parse(notesJSON) : [];
    } catch (e) {
        return []
    }
}

//Save notes to local storage
const saveNotes = (notes) => {
    localStorage.setItem('notes', JSON.stringify(notes));
}

//last edited info
const lastEdited = (timestamp) => (`Last Updated:  ${moment(timestamp).fromNow()}`);

//remove a note from a list
const removeNote = (id) => {
    const noteIndex = notes.findIndex((note) => note.id === id);

    if (noteIndex > -1) {
        notes.splice(noteIndex, 1)
    }
    saveNotes(notes);
}

//Generate DOM for a note
const generateNoteDOM = (note) => {
    const noteEl = document.createElement('a');
    const textEl = document.createElement('p');
    const statusEl = document.createElement('p');


    //setup note title text
    if (note.title.length > 0) {
        textEl.textContent = note.title;
    } else {
        textEl.textContent = 'Unnamed note';
    }
    textEl.classList.add('list-item__title');
    noteEl.appendChild(textEl);

    //Setup the link
    noteEl.setAttribute('href', `note.html#${note.id}`)
    noteEl.classList.add('list-item')

    //setup create and updated dates
    statusEl.textContent = lastEdited(note.updated);
    statusEl.classList.add('list-item__subtitle')
    noteEl.appendChild(statusEl);

    return noteEl
}

//Sort notes by one of 3 ways
const sortNotes = (notes, sortBy) => {
    if (sortBy === 'byEdited') {
        return notes.sort((a, b) => {
            if (a.updated > b.updated) {
                return -1
            } else if
                (a.updated < b.updated) {
                return 1
            } else {
                return 0
            }
        })
    } else if (sortBy === 'byCreated') {
        return notes.sort((a, b) => {
            if (a.created > b.created) {
                return -1
            } else if
                (a.created < b.created) {
                return 1
            } else {
                return 0
            }
        })
    } else if ('byAbc') {
        return notes.sort((a, b) => {
            if (a.title.toLowerCase() < b.title.toLowerCase()) {
                return -1
            } else if
                (a.title.toLowerCase() > b.title.toLowerCase()) {
                return 1
            } else {
                return 0
            }
        })
    }
}

//render application notes
const renderNotes = (notes, filters) => {
    const notesEl = document.getElementById('notes');
    notes = sortNotes(notes, filters.sortBy)
    const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(filters.searchText.toLowerCase()));

    notesEl.innerHTML = '';

    if (filteredNotes.length > 0) {
        filteredNotes.forEach((note) => {
            const noteEl = generateNoteDOM(note);
            notesEl.appendChild(noteEl);
        })
    } else {
        const emptyMsg = document.createElement('p');
        emptyMsg.textContent = 'No notes to added';
        emptyMsg.classList.add('empty-message');
        notesEl.appendChild(emptyMsg);
    }
}
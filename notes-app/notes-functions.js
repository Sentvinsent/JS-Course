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
    const noteDiv = document.createElement('div');
    const textEl = document.createElement('a');
    const button = document.createElement('button');
    const anotherTextEl = document.createElement('span');

    //setuo the remove note button
    button.textContent = 'x';
    noteDiv.appendChild(button);
    button.addEventListener('click', () => {
        removeNote(note.id);
        saveNotes(notes);
        renderNotes(notes, filters);
    })

    //setup note title text
    if (note.title.length > 0) {
        textEl.textContent = note.title;
    } else {
        textEl.textContent = 'Unnamed note';
    }
    textEl.setAttribute('href', `note.html#${note.id}`)
    noteDiv.appendChild(textEl);

    //setup create and updated dates
    anotherTextEl.textContent = lastEdited(note.updated);
    noteDiv.appendChild(anotherTextEl);

    return noteDiv
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
    notes = sortNotes(notes, filters.sortBy)
    const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(filters.searchText.toLowerCase()));

    document.getElementById('notes').innerHTML = '';

    filteredNotes.forEach((note) => {
        const noteEl = generateNoteDOM(note);
        document.getElementById('notes').appendChild(noteEl);
    })
}
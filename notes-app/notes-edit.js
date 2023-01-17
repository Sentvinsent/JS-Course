const noteId = location.hash.substring(1);


let notes = getSavedNotes();
let note = notes.find(function (note) {
    return note.id === noteId
})

if (note === undefined) {
    location.assign('index.html')
}

const titleEl = document.getElementById('note-title');
const bodyEl = document.getElementById('note-body');
const removeBtn = document.getElementById('remove-note');
const datesTxt = document.getElementById('dates-txt');

titleEl.value = note.title;
bodyEl.value = note.body;
datesTxt.textContent = lastEdited(note.updated);

titleEl.addEventListener('input', (e) => {
    note.title = e.target.value;
    note.updated = new Date().getTime();
    datesTxt.textContent = lastEdited(note.updated);
    saveNotes(notes);
})
bodyEl.addEventListener('input', (e) => {
    note.body = e.target.value;
    note.updated = new Date().getTime();
    datesTxt.textContent = lastEdited(note.updated);
    saveNotes(notes);
})
removeBtn.addEventListener('click', () => {
    removeNote(noteId);
    location.assign('index.html');
})

window.addEventListener('storage', function (e) {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue);
        note = notes.find(function (note) {
            return note.id === noteId
        })

        if (note === undefined) {
            location.assign('index.html')
        }
        titleEl.value = note.title;
        bodyEl.value = note.body;
        datesTxt.textContent = lastEdited(note.updated);
    }
})


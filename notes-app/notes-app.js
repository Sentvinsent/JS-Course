// DOM -Document Object Model

//query and remove 1st paragraph
// const p = document.querySelector('p');
// p.remove();

//query and manipulate all paragraphs
const ps = document.querySelectorAll('p');
ps.forEach((o) => {
    //o.remove();
    //console.log(o.textContent);
    o.textContent = 'Test'
})

let notes = [{
    title: 'Test 1',
    body: 'test 1 body'
},
{
    title: 'Test 2',
    body: 'test 2 body'
}]

//Add new element
function addElement() {
    const newP = document.createElement('p');
    newP.textContent = 'Dynamic p element value added with JS';
    document.querySelector('body').appendChild(newP);
}

const filters = {
    searchText: ''
}

const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.getElementById('notes').innerHTML = '';

    filteredNotes.forEach(function (note) {
        const noteEl = document.createElement('p');
        noteEl.textContent = note.title;
        document.getElementById('notes').appendChild(noteEl);
    })
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', addElement);


// -- Single --
//p
//#replace
//.item

// -- Multiple -- 
//p#order
//button.inventory
//h1#title.application
//h1.application#title

document.querySelector('#search-txt').addEventListener('input', (e) => {
    filters.searchText = e.target.value;
    renderNotes(notes, filters)
})

document.getElementById('filter-by').addEventListener('change', (e) => {
    console.log(e.target.value)
})
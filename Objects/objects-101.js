let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

console.log(`${myBook.title} by ${myBook.author}`)

myBook.title = 'Animal Farm'

console.log(`${myBook.title} by ${myBook.author}`)

//Challenge

//name, age, location

let person = {
    name: 'Aleks',
    age: 27,
    location: 'Ukraine'
}

console.log(`My name is ${person.name}, I'm ${person.age} years old and I'm from ${person.location}.`)

person.age = person.age + 1;

console.log(`My name is ${person.name}, I'm ${person.age} years old and I'm from ${person.location}.`)
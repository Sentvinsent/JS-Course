const square = (num) => num * num;

const squareLong = (num) => {
    return num * num
}

console.log(square(5))

const people = [{
    name: 'Test',
    age: 20
}, {
    name: 'Test2',
    age: 25
}, {
    name: 'Test3',
    age: 45
}]

const under30 = people.filter((person) => person.age < 30);
console.log(under30)

const twenty = people.filter((person) => person.age === 20);
console.log(twenty)
const add = () => {
    return arguments[0] + arguments[1]
}

console.log(add(11, 22, 33, 44));

const car = {
    color: 'Red',
    getSummary() {
        return this.color
    }
}

console.log(car.getSummary())

//Don't bind argument
//Don't bind this
//Have shorthand syntax
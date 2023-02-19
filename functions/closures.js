//Closure is the way to access a variable in a function defined outside this function (e.g. access message variable inside printMsg inside myFunc)
//Combination of function and lexical scope it was defined in

const message = 'Test'

const myFunc = () => {
    const printMsg = () => {
        console.log(message)
    }
    return printMsg
}
const printMessage = myFunc()
printMessage()

const createCounter = () => {
    let count = 0

    return {
        increment() {
            count++
        },
        decrement() {
            count--
        },
        get() {
            return count
        }
    }
}

const counter = createCounter()
counter.increment()
counter.decrement()
counter.decrement()
console.log(counter.get())

//Adder

const createAdder = (a) => {
    return (b) => {
        return a + b
    }
}

const add10 = createAdder(10)
console.log(add10(-2))
console.log(add10(20))

//Curring - transforming function with multiple arguments to multiple fucnctions with a subset of thos arguments


//Tipper challenge

const tipper = (percents) => {
    return (amount) => {
        return amount * percents
    }
}

const fivePercents = tipper(.05)
console.log(fivePercents(100))
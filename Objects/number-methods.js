let num = 101.946;


//toFixed
console.log(num.toFixed(2))

//math round
console.log(Math.round(num)) //automatic
console.log(Math.floor(num)) //round down
console.log(Math.ceil(num)) //round up

//Math random
let min = 10
let max = 20
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNum)

//Challenge (Make a guess)
// 1 - 5 turue if correct false if not

function guessTheNumber(guess) {
    let min = 1
    let max = 5
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log (guess, randomNum)
    return guess === randomNum
}

console.log(guessTheNumber (5))
//Function - input (arguments), code, output (return value)

let greetUser = function (name) {
    console.log(`Welcome ${name}`)
}

greetUser('Aleks');

let square = function (number) {
    let res = number * number;
    return res
}

let value = square(3);
let otherValue = square(10);
console.log(value, otherValue);

//Challenge

let tempConverter = function (far) {
    let cel = (far - 32) / 1.8;
    return cel
}

let temp1 = tempConverter(32);
let temp2 = tempConverter(68);

console.log(`Temp 1 = ${temp1} and temp 2 = ${temp2}`);
let temp = 150;

// && true if both conditions are true
// || true if any of the conditions is true

if (temp >= 60 && temp <= 90) {
    console.log(`It's nice outside`);
}

if (temp <= 0 || temp >= 120) {
    console.log(`It's too hot outside`);
}

let person1Vegan = true;
let person2Vegan = false;

if (person1Vegan && person2Vegan) {
    console.log('Only vegan food')
} else if (person1Vegan || person2Vegan) {
    console.log('Offer some vegan food')
} else {
    console.log('Offer any food on the menu')
}
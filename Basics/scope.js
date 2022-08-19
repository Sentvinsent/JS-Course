//Lexical/static scoping

let varOne = 'varOne';

if (true) {
    console.log(varOne)
    // let varTwo = 'varTwo';
}
//console.log(varTwo);

//Variable shadowing

let name = 'ALeks'

if (true) {
    let name = 'Sentvisnent'
    console.log(name);
}
console.log(name);

//leaked variable

if (true) {
    lasyName = 'Sentvisnent'
    console.log(lasyName);
}
console.log(lasyName);
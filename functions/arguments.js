//multiple arguments

let add = function (a, b, c) {
    return a + b + c
}

let result = add(10, 1, 5);
console.log(result);

//default agruments
let getScoreText = function (namer = 'Anonymous', score = 0) {
  return `Name: ${namer}, score: ${score}`
}

let res1 = getScoreText('Aleks', 100);
let res2 = getScoreText();
let res3 = getScoreText(undefined, 99);

console.log(res1, res2, res3);

//Challenge

let tip = function (bill, percent = .1) {
let total = bill * percent;
return total
}

let totalTip = tip(100, undefined);
console.log(`Tip: ${totalTip}`);
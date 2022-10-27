let myAccount = {
    myName: 'Aleks',
    expenses: 0,
    income: 0
}

let addExpense = function (account, amount) {
    // account = {} doesn't change myAccount var
    account.expenses = account.expenses + amount; //changes myAccount var
}

//add Income
//reset account
//get account salary

function addIncome(account, amount) {
    account.income = account.income + amount;
}

function resetAccount(account) {
    account.expenses = 0;
    account.income = 0;
}

function getSummary(account) {
    let salary = account.income - account.expenses;
    console.log(`Account for ${account.myName} has $${salary} salary. $${account.income} in income and $${account.expenses} in expenses.`)
}

getSummary(myAccount);
addIncome(myAccount, 50);
getSummary(myAccount);
addExpense(myAccount, 25);
getSummary(myAccount);
resetAccount(myAccount);
getSummary(myAccount);
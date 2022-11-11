const account = {
    userName: 'Aleks Fylymonchuk',
    expenses: [],
    income: [],
    addExpense: function (amount, desctiption) {
        this.expenses.push(
            {
                amount: amount,
                desctiption: desctiption
            }
        )
    },
    addIncome: function (amount, desctiption) {
        this.income.push(
            {
                amount: amount,
                desctiption: desctiption
            }
        )
    },
    getAccountSummary: function () {
        let totalExpenses = this.expenses.reduce((accumulator, expense) => {
            return accumulator + expense.amount;
        }, 0);
        let totalIncome = this.income.reduce((accumulator, income) => {
            return accumulator + income.amount;
        }, 0);
        let balance = totalIncome - totalExpenses;
        return `Total account balance for ${this.userName} = $${balance}, with $${totalIncome} income and $${totalExpenses} expenses`
    }
}

//expense --> description, amount
//addExpense --> desctiption, amount
//getAccountSummary --> message for total of all expnses

//addIcome --> amount, description
//UPD account Summary


account.addExpense(10, 'Test 1')
account.addIncome(20, 'Work')

console.log(account.getAccountSummary())
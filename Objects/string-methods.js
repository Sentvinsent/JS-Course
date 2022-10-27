let myName = ' Aleks Fylymonchuk ';

//length property
console.log(myName.length)

//convert to appercase method
console.log(myName.toUpperCase());  

//convert to lowercase method
console.log(myName.toLowerCase());  

//includes

let password = 'abcPassword123';

console.log(password.includes('Password'))

//trim
console.log(myName.trim())

//Challenge

//Password validation
//length > 8, doesn't contain password

function validatePassword (password) {
   return password.length > 8 && !password.includes('Password')
}

console.log(validatePassword(password))
console.log(validatePassword('123'))
console.log(validatePassword('dshgfsdkjfgdsg'))
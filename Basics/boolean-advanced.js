let isAccountLocked = false;
let userRole = 'Admin';

if (isAccountLocked) {
    console.log('Account is locked');
} else if (userRole === 'Admin') {
    console.log('Welcome admin!');
} else {
    console.log('Welcome')
}


let temp = 30;

if (temp <= 31) {
    console.log('It\'s cold outside');
} else if (temp <= 45) {
    console.log(`It's nice to go outside`);
} else {
    console.log(`It's too hot outside`);
}
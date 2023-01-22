const getTip = (amount) => {
    if (typeof (amount) === 'number') {
        return amount * .25
    } else {
        throw Error('Argument must be a number')
    }

}

try {
    const res = getTip(true);
    console.log(res)
} catch (e) {
    console.log('Catch block is running')
}


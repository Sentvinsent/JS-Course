//callback
const getDataCallback = (callback) => {
    setTimeout(() => {
        callback(undefined, 'This is delayed txt')
    }, 2000)
}

getDataCallback((err, data) => {
    if (err) {

    } else {
        console.log(data)
    }
})

//promise

const getDataPromise = (num) => new Promise((resolve, reject) => {
    setTimeout(() => {
        typeof (num === 'number') ? resolve(num * 2) : reject('Number must be provided')
    }, 2000)
})


getDataPromise(123).then((data) => {
    getDataPromise(data).then((data) => {
        console.log(data)
    }), (err) => {
        console.log(err)
    }
}), (err) => {
    console.log(err)
}


getDataPromise(10).then((data) => {
    return getDataPromise(data)
}).then((data) => {
    return getDataPromise(data)
}).then((data) => {
    console.log(data)
}).catch((err) => {
    console.log(err)
})


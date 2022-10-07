//Global scope (tempConverter, temp1, temp2)
    //Local scope (far, cel)
        //Local scope (isFreezing)

let tempConverter = function (far) {
    let cel = (far - 32) / 1.8;
    if (cel <= 0) {
        let isFreezing = true
    }
    return cel
}

let temp1 = tempConverter(32);
let temp2 = tempConverter(68);
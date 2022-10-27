//Stud score, total possible
//15/20 -> You got a C (75%)!


function getRes(studScore, totalScore) {

    const percentage = (studScore / totalScore) * 100;
    let result;

    if (percentage < 60) {
        result = 'F'
    } else if (percentage < 70) {
        result = 'D'
    }
    else if (percentage < 80) {
        result = 'C'
    }
    else if (percentage < 90) {
        result = 'B'
    }
    else if (percentage >= 90) {
        result = 'A'
    }

    return `You final grade is ${result} (${percentage}%)`

}

const gradeResult = getRes(8, 10);
console.log(gradeResult);


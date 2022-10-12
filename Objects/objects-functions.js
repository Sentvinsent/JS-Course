let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

let otherBook = {
    title: 'A peoples history',
    author: 'Howard Zinn',
    pageCount: 723
}

function getSummary(book) {

    return {
        summary: `${book.title} by ${book.author}`,
        pageCOuntSummary: `${book.title} is ${book.pageCount} pages long`
    }

}

let bookSummary = getSummary(myBook);
let otherBookSummary = getSummary(otherBook);

console.log(bookSummary.pageCOuntSummary)

//Challenge

//Take far and return cel, far and cal temp

function temConverter(far) {
    let cel = (far - 32) / 1.8;
    let kal = (far + 459.67) * 5 / 9;

    return {
        far: far,
        cel: cel,
        kal: kal
    }
}

let temperature = temConverter(50);

console.log(`Current temp is ${temperature.far} far, ${temperature.cel} cel, ${temperature.kal} kel.`)
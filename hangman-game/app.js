const gameText = document.getElementById('game-txt');
let game;


window.addEventListener('keydown', e => {
    const guess = e.key;
    if (guess.match(/^[A-Za-z]$/)) {
        game.makeGuess(e.key);
        game.checkStatus();
        render()
    }
})

getPuzzle('2').then((puzzle) => {
    console.log('Fetched puzzle: ', puzzle)
}).catch((error) => {
    console.log(error)
})

// getCurrentCountry().then((countryData) => {
//     console.log(countryData)
// }).catch((err) => {
//     console.log(err)
// })

const render = () => {
    gameText.textContent = game.displayPuzzle;
}

const startGame = async () => {
    const puzzle = await getPuzzle('2');
    game = new Hangman(puzzle, 5)
    render()
}

document.getElementById('reset-btn').addEventListener('click', startGame)

startGame()
import Hangman from './hangman';
import getPuzzle from './requests';

const gameText = document.getElementById('game-txt');
const gameResTxt = document.getElementById('game-res-txt')
let game;

const render = () => {
    gameText.innerHTML = ''
    if (game.status === 'playing') {
        const wordArray = game.displayPuzzle.gameTxt.split('');
        const newWordArray = wordArray.map(element => {
            return element = `<span>${element}</span>`
        });
        const newWordTxt = newWordArray.join('');
        gameText.innerHTML = `The word to guess is: ${newWordTxt}`;
        gameResTxt.textContent = game.displayPuzzle.gameResTxt;
    } else {
        gameResTxt.textContent = game.displayPuzzle;
    }
}

const startGame = async () => {
    const puzzle = await getPuzzle('2');
    game = new Hangman(puzzle)
    render()
}

document.getElementById('reset-btn').addEventListener('click', startGame);

window.addEventListener('keydown', e => {
    const guess = e.key;
    if (guess.match(/^[A-Za-z]$/)) {
        game.makeGuess(e.key);
        game.checkStatus();
        render()
    }
})

startGame();
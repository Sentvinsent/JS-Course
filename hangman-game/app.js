const gameText = document.getElementById('game-txt');

const word1 = new Hangman('Silly Billy', 3);


window.addEventListener('keydown', e => {
    const guess = e.key;
    if (guess.match(/^[A-Za-z]$/)) {
        word1.makeGuess(e.key);
        word1.checkStatus();
        gameText.textContent = word1.displayPuzzle;
    }
})
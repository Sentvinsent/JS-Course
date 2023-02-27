class Hangman {
    constructor(word) {
        this.word = word.toLowerCase().split('');
        this.attempts = Math.round(word.length / 2);
        this.guessed = [];
        this.status = 'playing';
    }
    get generatePuzzle() {
        let puzzle = '';

        this.word.forEach((letter) => {
            if (this.guessed.includes(letter) || letter === ' ') {
                puzzle += letter
            } else {
                puzzle += '*'
            }
        });
        return puzzle
    }
    makeGuess(guess) {
        if (this.status === 'playing') {
            guess = guess.toLowerCase();
            const isUnique = !this.guessed.includes(guess);
            const wrongGuess = !this.word.includes(guess);

            if (isUnique) {
                this.guessed.push(guess)
            }
            if (isUnique && wrongGuess) {
                this.attempts--
            }
        }
    }
    checkStatus() {
        let hasGuessed = this.word.every((letter) => this.guessed.includes(letter) || letter === ' ')
        if (this.attempts < 1) {
            this.status = 'failed';
        } else if (hasGuessed) {
            this.status = 'finished';
        }
    }
    get displayPuzzle() {
        let gameData;
        if (this.status === 'playing') {
            gameData = {
                gameTxt: this.generatePuzzle,
                gameResTxt: `You have ${this.attempts} attempts left. Click a letter on the keyboard to make a guess`
            }
            return gameData
        } else if (this.status === 'finished') {
            return `Congratulations! You've guessed the word: ${this.word.join('')}.`
        } else {
            return `Oops... You've failed to guess the word: ${this.word.join('')}. Please try again.`
        }
    }
}

export { Hangman as default }
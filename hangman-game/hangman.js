class Hangman {
    constructor(word, attempts) {
        this.word = word.toLowerCase().split('');
        this.attempts = attempts;
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
        let hasGuessed = true;
        if (game.generatePuzzle.includes('*')) { hasGuessed = false }
        if (game.attempts < 1) {
            this.status = 'failed';
        } else if (hasGuessed) {
            this.status = 'finished';
        }
    }
    get displayPuzzle() {
        if (this.status === 'playing') {
            return `The word to guess is: ${this.generatePuzzle}. You have ${this.attempts} attempts left.`;
        } else if (game.status === 'finished') {
            return `Congratulations! You've guessed the word ${this.word.join('')}.`
        } else {
            return `Oops... You've failed to guess the word ${this.word.join('')}. Please try again.`
        }
    }
}
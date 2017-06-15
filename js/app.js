
const data = require('./data.js');

class WordsToNumberApp {
    constructor() {
        this.numbers = data.numbers;
        this.multiples = data.multiples;
    }

    convert(wordString) {
        let tokens = this.wordSplit(wordString);

        if (this.validateInput(tokens))
            return this.calcNumber(tokens);
        else
            return this.showInputError(wordString);
    }

    validateInput(tokens) {
        let valid = true;

        tokens.forEach((item) => {
            if (this.numbers[item]) {
            } else if (this.multiples[item]) {
            } else if (item === 'and') {
            } else {
                valid = false;
            }
        });

        return valid;
    }

    showInputError(wordString) {
        alert('Invalid input string "'+ wordString +'"');
    }

    wordSplit(wordString) {
        return wordString.toLowerCase().split(' ');
    }

    calcNumber(tokens) {
        let result;

        // loop through tokens and perform arithmetic
        result = tokens;

        this.showResult(result);
    }

    showResult(result) {
        // display the result on the web page
        console.log(result);
    }
}

window.addEventListener('load', () => window.wtna = new WordsToNumberApp());

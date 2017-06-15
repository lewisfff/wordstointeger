
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
    }

    validateInput(tokens) {
        let valid = true;

        tokens.forEach((item) => {
            if (this.numbers[item]) {
            } else if (this.multiples[item]) {
            } else if (item === 'and') {
            } else {
                this.showInputError(item);
                valid = false;
            }
        });

        return valid;
    }

    showInputError(item) {
        alert(item + ' not accounted for');
    }

    wordSplit(wordString) {
        return wordString.toLowerCase().split(' ');
    }

    calcNumber(tokens) {
        let result;

        // loop through and perform arithmetic
        result = tokens;

        this.showResult(result);
    }

    showResult(result) {
        // display the result on the web page
        console.log(result);
    }
}

window.addEventListener('load', () => window.wtna = new WordsToNumberApp());

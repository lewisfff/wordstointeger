
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

        for (var i = 0; i < tokens.length; i++) {
            if (i > 0) {
                // check for invalid words after first word
                if (tokens[i] === 'zero' ||
                    tokens[i] === 'minus') {
                    valid = false;
                }
            }

            if (this.numbers[tokens[i]] != null) {
            } else if (this.multiples[tokens[i]] != null) {
            } else if (tokens[i] === 'and') {
                tokens.splice(i, 1);
            } else {
                valid = false;
            }
        }

        return valid;
    }

    showInputError(wordString) {
        alert('Invalid input string "'+ wordString +'"');
    }

    wordSplit(wordString) {
        return wordString.toLowerCase().split(' ');
    }

    calcNumber(tokens) {
        let result = 0;
        let tempSum = 0;

        tokens.forEach((token) => {
            if (this.numbers[token] != null) {
                result += this.numbers[token];
            // handles 'hundred thousand'
            // todo: handle 'thousand million' and so on
            } else if (token == 'hundred') {
                result *= 100;
            } else {
                tempSum += result * this.multiples[token];
                result = tempSum;
            }
        });

        this.showResult(result);
    }

    showResult(result) {
        console.log(result);
    }
}

window.addEventListener('load', () => window.wtna = new WordsToNumberApp());

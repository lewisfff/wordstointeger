
const data = require('./data.js');

class WordsToNumberApp {
    constructor() {
        this.numbers = data.numbers;
        this.multiples = data.multiples;
        this.inputZone = document.getElementById('input-zone');
        this.outputZone = document.getElementById('output-zone');
        this.actionButton = document.getElementById('action-btn');
        this.eventListeners();
    }

    eventListeners() {
        this.actionButton.addEventListener('click', () => {
            this.convert(this.inputZone.value);
        });
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
            if (this.numbers[tokens[i]] != null) {
            } else if (this.multiples[tokens[i]] != null) {
            } else if (tokens[i] === 'and') {
                tokens.splice(i, 1);
            } else if (tokens[i] === 'zero' || tokens[i] === 'minus') {
                // these words only make sense as the first word
                if (i > 0) {
                    valid = false;
                }
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
        let invalid = false;
        let tempSum = 0;
        let result = 0;
        let lastToken;
        let isNegative;

        // todo: split the tokens into groups

        tokens.forEach((token) => {
            if (this.numbers[token] != null) {
                result += this.numbers[token];
            } else if (this.multiples[token] != null) {
                if (this.multiples[lastToken] != null) {
                    // if input is entered as 'thousand thousand' or
                    // 'million hundred' for example, make it invalid
                    if(this.multiples[lastToken] >= this.multiples[token])
                        invalid = true;
                }
                result *= this.multiples[token];
            } else if (token === 'minus') {
                isNegative = true;
            } else {
                invalid = true;
            }

            lastToken = token;
        });

        if(isNegative)
            result = -Math.abs(result);

        if(!invalid)
            this.showResult(result);
        else
            this.showInputError('Invalid number syntax');
    }

    showResult(result) {
        this.outputZone.innerText = result;
    }
}

window.addEventListener('load', () => window.wtna = new WordsToNumberApp());

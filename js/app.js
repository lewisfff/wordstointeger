
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
        let sum = 0;
        let results = [];
        let result = 0;
        let lastToken;
        let isNegative;

        tokens.forEach((token) => {
            if (this.numbers[token] != null) {
                if(sum)
                    results.push(sum);
                sum = this.numbers[token];
            } else if (this.multiples[token] != null) {
                if (this.multiples[lastToken] != null) {
                    if(this.multiples[lastToken] >= this.multiples[token])
                        invalid = true;
                }
                sum *= this.multiples[token];
            } else if (token === 'minus') {
                isNegative = true;
            } else {
                invalid = true;
            }

            lastToken = token;
        });
        results.push(sum);

        sum = 0;
        let mag;
        for (var i = results.length - 1; i >= 0; i--) {
            let cur = results[i];
            if (i === results.length - 1) {
                sum += cur;
            } else {
                if(cur > sum){
                    sum += cur;
                } else {
                    mag = this.magnitude(sum) - (this.magnitude(cur) - 1);
                    sum += cur * (10 ** mag);
                }
            }
        }
        result = sum;

        if(isNegative)
            result = -Math.abs(result);

        if(!invalid)
            this.showResult(result);
        else
            this.showInputError('Invalid number syntax');
    }

    magnitude(number) {
        return number.toString().length;
    }

    showResult(result) {
        this.outputZone.innerText = result;
    }
}

window.addEventListener('load', () => window.wtna = new WordsToNumberApp());

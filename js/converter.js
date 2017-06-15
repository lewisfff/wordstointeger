
const data = require('./data.js');

class WordsToNumberConverter {
    constructor() {
        this.numbers = data.numbers;
        this.multiples = data.multiples;
    }

    convert(wordString) {
        let tokens = this.wordSplit(wordString);
        this.isNegative = false;
        this.invalid = false;

        if (this.validateInput(tokens))
            return this.calcNumber(tokens);
        else
            return undefined;
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

    wordSplit(wordString) {
        return wordString.toLowerCase().split(' ');
    }

    calcNumber(tokens) {
        let results = this.sumTokens(tokens);
        let result = this.sumResults(results);

        if(this.isNegative === true)
            result = -Math.abs(result);

        if(!this.invalid)
            return result;
        else
            return undefined;
    }

    sumTokens(tokens) {
        let sum = 0;
        let results = [];
        let result = 0;
        let lastToken;

        tokens.forEach((token) => {
            if (this.numbers[token] != null) {
                if(sum)
                    results.push(sum);
                sum = this.numbers[token];
            } else if (this.multiples[token] != null) {
                if (this.multiples[lastToken] != null) {
                    if(this.multiples[lastToken] >= this.multiples[token])
                        this.invalid = true;
                }
                sum *= this.multiples[token];
            } else if (token === 'minus') {
                this.isNegative = true;
            } else {
                this.invalid = true;
            }
            lastToken = token;
        });
        results.push(sum);

        return results;
    }

    sumResults(results) {
        let sum = 0;
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

        return sum;
    }

    magnitude(number) {
        return number.toString().length;
    }

}

export { WordsToNumberConverter }

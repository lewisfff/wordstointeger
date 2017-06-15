
const converter = require('./converter.js');

class App {
    constructor() {
        this.converter = new converter.WordsToNumberConverter();
        this.inputZone = document.getElementById('input-zone');
        this.outputZone = document.getElementById('output-zone');
        this.actionButton = document.getElementById('action-btn');
        this.eventListeners();
    }

    eventListeners() {
        this.actionButton.addEventListener('click', () => {
            let result = this.converter.convert(this.inputZone.value);

            if (result === undefined)
                this.showInputError();
            else
                this.showResult(result);
        });
    }

    showResult(result) {
        this.outputZone.innerText = result;
    }

    showInputError() {
        alert('Invalid input detected');
    }

}

window.addEventListener('load', () => window.wtnc = new App());

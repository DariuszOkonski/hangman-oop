import { Quote } from './Quote.js';

class Game {
    quotes = [
        {text: 'pan tadeusz', category: 'Utwor literacki'},
        {text: 'janko muzykant', category: 'Utwor literacki'},
        {text: 'akademia pana kleksa', category: 'Film'},
        {text: 'ogniem i mieczem', category: 'Film'},
    ]

    constructor({ lettersWrapper, categoryWrapper, wordWrapper, outputWrapper}) {
        this.lettersWrapper = lettersWrapper;
        this.categoryWrapper = categoryWrapper;
        this.wordWrapper = wordWrapper;
        this.outputWrapper = outputWrapper;

        const {text, category} = this.quotes[Math.floor(Math.random() * this.quotes.length)];
        this.categoryWrapper.innerHTML = category;
        this.quote = new Quote(text);
    }
    
    start() {
        this.drawLetters();

        this.drawQuote();
    }    

    drawQuote() {
        const content = this.quote.getContent();
        this.wordWrapper.innerHTML = content;
    }

    drawLetters() {
        for (let i = 0; i < 26; i++) {
            const label = (i + 10).toString(36);
            const button = document.createElement('button');
            button.innerHTML = label;
            button.addEventListener('click', () => this.guess(label));
            this.lettersWrapper.appendChild(button);
        }
    }

    guess(letter) {
        this.quote.guess(letter);
        this.drawQuote();
    }
}

// ================================
const game = new Game ({
    lettersWrapper: document.getElementById('letters'),
    categoryWrapper: document.getElementById('category'),
    wordWrapper: document.getElementById('word'),
    outputWrapper: document.getElementById('output'),
});
// console.log(game);
game.start();
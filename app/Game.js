class Game {
    constructor({ lettersWrapper, categoryWrapper, wordWrapper, outputWrapper}) {
        this.lettersWrapper = lettersWrapper;
        this.categoryWrapper = categoryWrapper;
        this.wordWrapper = wordWrapper;
        this.outputWrapper = outputWrapper;
    }
    
    start() {
        console.log('Lets play a game!')
    }    
}
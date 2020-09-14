export class Quote {
    constructor(text) {
        this.text = text;
    }

    getText() {
        return this.text;
    }

    getContent() {
        let content = "";
        for (const char of this.text) {
            if(char !== ' ') {
                content += '_';
            } else {
                content += " ";
            }
        }

        return content;
    }

    guess(letter) {
        return "sentence";
    }
}
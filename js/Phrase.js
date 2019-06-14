// handles the creation of phrases

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.phrase.toLowerCase();
    }

    //method that builds out the HTML of the phrase for the website
    addPhraseToDisplay() {
        let phraseHTML = `<ul>`
        for (let i = 0; i < this.phrase.length; i++) {
            if (this.phrase[i] === ' ') {
                phraseHTML += `<li class="space"> </li>`
            } else {
                phraseHTML += `<li class="hide letter ${this.phrase[i]}">${this.phrase[i]}</li>`
            }
        }
        phraseHTML += `</ul>`
        document.getElementById('phrase').innerHTML = phraseHTML
    }

    //Checks to see if the letter selected by the player matches a letter in the phrase
    checkLetter(target){
        for (let i = 0; i < this.phrase.length; i++) {
            if (this.phrase[i] === target) {
                return true;
            }
        }
        return false;
    }

    //Reveals the letter(s) on the board that matches the selection
    //Replace 'hide' class with 'show' in CSS
    showMatchedLetter(letter){
        let array = document.getElementsByClassName(letter);
        for(let i = 0; i < array.length; i++) {
            array[i].classList.remove('hide');
            array[i].classList.add('show');
        }
    }
}
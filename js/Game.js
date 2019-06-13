/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
// starts and ends game, handles interactions, gets a random phrase, checks for win, removes a life from the scoreboard
class Game {
    constructor(){
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    };

    createPhrases(){
        let phrase = [
            {phrase: `nine lives`},
            {phrase: `bail out`},
            {phrase: `top off`},
            {phrase: `in the works`},
            {phrase: `hang on`}
        ];
        return phrase;
    };

    getRandomPhrase(){
        //generates random phrase from the phrases array
        let randnum = Math.floor(Math.random() * this.phrases.length);
        let randPhrase = this.phrases[randnum];
        return randPhrase;
    };

    startGame(){
        // hides the div with id overlay
        document.getElementById('overlay').style.display = "none";
        // calls the getRandomPhase method
        const phrase1 = this.getRandomPhrase()
        // calls the addPhraseToDisplay method
        let newPhrase = new Phrase(phrase1)
        newPhrase.addPhraseToDisplay();
        // store the selected phase in the 'activePhase' property
        this.activePhrase = newPhrase
        console.log(this.activePhrase)
    };

    checkForWin(){
        //checks to see if the player has revealed all letters
        if (document.getElementsByClassName('hide').length === 0) {
            this.gameOver(`Congratulations! You're a winner!!`, 'win')
        } else {
            return false;
        }
    };

    removeLife(){
        //Removes a life from the scoreboard. Replace the liveHeart.png with lostHeart.png
        document.querySelector('.tries img').setAttribute('src', 'images/lostHeart.png');
        document.querySelector('.tries').classList.remove('tries');
        //Increment the 'missed' property
        this.missed += 1;
        //Call the gameOver method if they've missed 5
        if (this.missed === 5) {
            this.gameOver(`Sorry, you didn't guess the phrase. Better luck next time!`, 'lose');
        };
    };

    gameOver(message, cn){
        //Display the original start screen overlay
        document.getElementById('overlay').style.display = "block";
        //Update h1 element in overlay with a win or loss message
        document.getElementById('game-over-message').textContent = message;
        //Replace the overlay's 'start' CSS class with either the 'win' or 'lose' CSS class
        document.getElementById('overlay').classList.remove('start');
        document.getElementById('overlay').classList.add(cn);
    };

    handleInteraction(target){
        //capture the clicked or chosen letter
        // check selected letter against phrase for match
        if (this.activePhrase.phrase.checkLetter(target)) {
            // if match, letter must be displayed on the screen instead of the placeholder
            this.activePhrase.showMatchedLetter(target);
        } else {
            // if no match, remove a life from the scoreboard
            this.removeLife();
        }
        // check if the player has won the game or lost because out of lives
        // if game is won or lost, message should be displayed
        this.checkForWin();
        
    }
}
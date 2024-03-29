//Handles the major functionality of the game

class Game {
    constructor(){
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    };

    createPhrases(){
        //generatres the phrase array
        let phrase = [
            {phrase: `alligator`},
            {phrase: `ant`},
            {phrase: `bear`},
            {phrase: `bee`},
            {phrase: `bird`},
            {phrase: `camel`},
            {phrase: `cat`},
            {phrase: `cheetah`},
            {phrase: `chicken`},
            {phrase: `chimpanzee`},
            {phrase: `cow`},
            {phrase: `crocodile`},
            {phrase: `deer`},
            {phrase: `rat`},
            {phrase: `scorpion`},
            {phrase: `seal`},
            {phrase: `shark`},
            {phrase: `sheep`},
            {phrase: `snail`},
            {phrase: `snake`},
            {phrase: `spider`},
            {phrase: `squirrel`},
            {phrase: `tiger`},
            {phrase: `turtle`},
            {phrase: `wolf`},
            {phrase: `zebra`},
            {phrase: `dog`},
            {phrase: `dolphin`},
            {phrase: `duck`},
            {phrase: `eagle`},
            {phrase: `elephant`},
            {phrase: `fish`},
            {phrase: `fly`},
            {phrase: `fox`},
            {phrase: `frog`},
            {phrase: `giraffe`},
            {phrase: `goat`},
            {phrase: `goldfish`},
            {phrase: `hamster`},
            {phrase: `hippopotamus`},
            {phrase: `horse`},
            {phrase: `kangaroo`},
            {phrase: `kitten`},
            {phrase: `lion`},
            {phrase: `lobster`},
            {phrase: `monkey`},
            {phrase: `octopus`},
            {phrase: `owl`},
            {phrase: `panda`},
            {phrase: `pig`},
            {phrase: `puppy`},
            {phrase: `rabbit`}
        ];
        return phrase;
    };
    //generates random number and selects a random phrase from the array
    getRandomPhrase(){
        let randnum = Math.floor(Math.random() * this.phrases.length);
        let randPhrase = this.phrases[randnum];
        return randPhrase;
    };

    //initiates the game each time a new game is started
    startGame(){
        document.getElementById('overlay').style.display = "none";
        const phrase1 = this.getRandomPhrase();
        let newPhrase = new Phrase(phrase1);
        newPhrase.addPhraseToDisplay();
        this.activePhrase = newPhrase;
        //resets preferences for a new game
        this.missed = 0;
        //reset hearts
        let hearts = document.querySelectorAll('.tries img');
        for (let i = 0; i < hearts.length; i++) {
            hearts[i].parentNode.classList.add('active');
            hearts[i].setAttribute('src', 'images/liveHeart.png')
        }
        //reset buttons
        let keys = document.querySelectorAll('.key');
        for (let i = 0; i < keys.length; i++) {
            keys[i].classList.remove('chosen');
            keys[i].classList.remove('wrong');
            keys[i].disabled = false;
        }
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
        //Increment the 'missed' property
        this.missed += 1;
        //Call the gameOver method if they've missed 5
        if (this.missed === 5) {
            this.gameOver(`Sorry, you didn't guess the phrase. Better luck next time!`, 'lose');
        } else {
            document.querySelector('.active img').setAttribute('src', 'images/lostHeart.png');
            document.querySelector('.active').classList.remove('active');
        }
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

    handleInteraction(e){
        //capture the clicked or chosen letter
        let target = e.textContent;
        e.disabled = true;
        // check selected letter against phrase for match
        console.log(target)
        if (this.activePhrase.checkLetter(target)) {
            e.classList.add('chosen');
            // if match, letter must be displayed on the screen instead of the placeholder
            this.activePhrase.showMatchedLetter(target);
        } else {
            e.classList.add('wrong');
            // if no match, remove a life from the scoreboard
            this.removeLife();
        }
        // check if the player has won the game or lost because out of lives
        // if game is won or lost, message should be displayed
        this.checkForWin();
    }  
}
/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

 //Creates new instance of game, adds event listeners for start button and onscreen keyboard buttons


//  My getRandomPhase method returns an object literal with a phase property, so this code worked on step 6
//  const game = new Game(); 
//  const randomPhrase = game.getRandomPhrase(); 
//  const phrase = new Phrase(randomPhrase.phrase); 
//  phrase.addPhraseToDisplay(); 

let game;
document.getElementById('btn__reset').addEventListener('click', () => {
    game = new Game();
    game.startGame();
})

document.getElementById('qwerty').addEventListener('click', (e) => {
    if (e.target.nodeName == "BUTTON"){
       game.handleInteraction(e.target);
    }
})
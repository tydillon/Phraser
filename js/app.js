 // Creates new instance of game
let game;

//Gives functionality to reset button
document.getElementById('btn__reset').addEventListener('click', () => {
    game = new Game();
    game.startGame();
})

//Gives functionality to keyboard buttons on web app
document.getElementById('qwerty').addEventListener('click', (e) => {
    if (e.target.nodeName == "BUTTON"){
        console.log(e.target)
       game.handleInteraction(e.target);
    }
})

//Give functionality to user's keyboard
document.addEventListener("keypress", (e) => {
    let qwerty = document.getElementsByClassName('key');
    //event listener for enter key. Only works if the 'start game' button and screen is displayed
    if (e.keyCode === 13 && document.getElementById('overlay').style.display !== "none") {
        game = new Game();
        game.startGame();
    }
    //event listener for the letters on the keys. Only works for actual letters represented on the screen
    for (let i = 0; i < qwerty.length; i++) {
        e.key === qwerty[i].textContent ? game.handleInteraction(qwerty[i]) : false;
    }
});
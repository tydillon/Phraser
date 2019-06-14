/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */ 

let game;
document.getElementById('btn__reset').addEventListener('click', () => {
    game = new Game();
    game.startGame();
})

document.getElementById('qwerty').addEventListener('click', (e) => {
    if (e.target.nodeName == "BUTTON"){
        console.log(e.target)
       game.handleInteraction(e.target);
    }
})

document.addEventListener("keypress", (e) => {
    let qwerty = document.getElementsByClassName('key');
    if (e.keyCode === 13 && document.getElementById('overlay').style.display !== "none") {
        game = new Game();
        game.startGame();
    }
    for (let i = 0; i < qwerty.length; i++) {
        if (e.key === qwerty[i].textContent) {
            game.handleInteraction(qwerty[i]);
        } 
    }
});
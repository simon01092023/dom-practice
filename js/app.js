const game = {
    score: 10,
    players: ['Jim', 'Liz']
};

const ulEl = document.querySelector('ul');

game.players.forEach(function(player){
    const liEl = document.createElement('li');
    liEl.innerText = player
    liEl.setAttribute('class', 'player')
    console.log(liEl)
    ulEl.appendChild(liEl)
});

const scoreEl = document.querySelector('#score')
console.log(scoreEl)
scoreEl.innerText = printScore(100);

const newE = document.querySelector('#newElement')
newE.innerText = "New Element!";


function printScore(){
    return("the game score is " + game.score);
} 


game.players.forEach(function printPlayer(player){
    console.log(`${player}`)
});
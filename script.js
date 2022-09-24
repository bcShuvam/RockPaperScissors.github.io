'use strict';

let btnclicked;
let isgameover = false;
let botmove;
let winner = '';
let player = document.querySelector('.playername0').innerHTML;
let bot = document.querySelector('.playername1').innerHTML;
const movesAvailable = ['&#129704;','&#128240;','&#9986;'];
const classbBtns0 = document.querySelector('.btns0');
const classbBtns1 = document.querySelector('.btns1');
const classbBtns2 = document.querySelector('.btns2');
const displayMoves = document.querySelector('.display-move');
const displayMovePlayer = document.querySelector('.display-player');
let displayMoveBot = document.querySelector('.display-bot');
const actualPlayerName = document.querySelector('.playername0').innerText;
const gif = document.querySelector('.gif');

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

async function test() {
    for(let i = 3; i > -1; i--){
        await delay(1000);
        if(i===3){
            document.querySelector('.count-down').textContent = '🪨';
        }
        if(i===2){
            document.querySelector('.count-down').textContent = '📰';
        }
        if(i===1){
            document.querySelector('.count-down').textContent = '✂';
        }
        if(i===0){
            document.querySelector('.count-down').textContent = 'Show';
        }
    }    
}

function display(){
    if(botmove===0){
        displayMoveBot.textContent = '🪨';
    }
    else if(botmove===1){
        displayMoveBot.textContent = '📰';
    }
    else{
        displayMoveBot.textContent = '✂';
    }

    displayMoves.classList.remove('hidden');
    gif.classList.remove('hidden');
    document.querySelector('.winner').classList.remove('hidden');
    document.querySelector('.winner').innerHTML = `${winner}`;
    document.querySelector('.btn--reset').classList.remove('hidden');
}

const playerName = document.querySelector('.btn--check').addEventListener('click',function(){
    const name = document.querySelector('.player-name').value;
    if(name !== ''){
        document.querySelector('.playername0').textContent = name;
        document.querySelector('.player-name').classList.add('hidden');
        document.querySelector('.player').classList.add('hidden');
        document.querySelector('.btn--check').classList.add('hidden');

        document.querySelector('.playername0').classList.remove('hidden');
        document.querySelector('.playername1').classList.remove('hidden');
        document.querySelector('.welcome').classList.remove('hidden');
        document.querySelector('.line').classList.remove('hidden');
        document.querySelector('.btn--start').classList.remove('hidden');
        document.querySelector('.vs').classList.remove('hidden');
    }
});

//////////////////////////////////////// Start Game ////////////////////////////////////////
const startGame = document.querySelector('.btn--start').addEventListener('click',function(){
    document.querySelector('.count-down').classList.remove('hidden');
    document.querySelector('.ul').classList.remove('hidden');
    document.querySelector('.btn--start').classList.add('hidden');
    document.querySelector('.line').classList.remove('hidden');
    document.querySelector('.playername0').classList.remove('hidden');
    document.querySelector('.playername1').classList.remove('hidden');
    document.querySelector('.vs').classList.remove('hidden');
    document.querySelector('.count-down').classList.remove('hidden');

    test();
    // document.querySelector('.count-down').textContent = 'Show';
})

//////////////////////////// Getting Clicked button Index //////////////////////////
const btns0 = classbBtns0.addEventListener('click',function(){    
    btnclicked = 0;
    checkWinner();
    classbBtns0.classList.add('clicked');
    classbBtns1.disabled = true;
    classbBtns1.classList.add('disabled');
    classbBtns2.disabled = true;
    classbBtns2.classList.add('disabled');
    displayMoveBot.classList.remove('hidden');
    displayMovePlayer.classList.remove('hidden');

    displayMovePlayer.textContent = `🪨`;
    display();
});


const btns1 = classbBtns1.addEventListener('click',function(){

    btnclicked = 1;
    checkWinner();
    classbBtns1.classList.add('clicked');
    classbBtns0.disabled = true;
    classbBtns0.classList.add('disabled');
    classbBtns2.disabled = true;
    classbBtns2.classList.add('disabled');
    displayMoveBot.classList.remove('hidden');
    displayMovePlayer.classList.remove('hidden');

    displayMovePlayer.textContent = `📰`;
    display();
});

const btns2 = classbBtns2.addEventListener('click',function(){

    btnclicked = 2;
    checkWinner();
    classbBtns2.classList.add('clicked');
    classbBtns1.disabled = true;
    classbBtns1.classList.add('disabled');
    classbBtns0.disabled = true;
    classbBtns0.classList.add('disabled');
    displayMoveBot.classList.remove('hidden');
    displayMovePlayer.classList.remove('hidden');

    displayMovePlayer.textContent = `✂`;
    display();
});

////////////////////////////////////////// winning conditions //////////////////////////////////////////
const checkWinner = function(){
    botmove = Math.floor(Math.random() * 3);
    if(botmove === btnclicked){
        console.log(`Draw player:${movesAvailable[btnclicked]} bot:${movesAvailable[botmove]}`);
        winner = 'Draw';
    }
    else if(btnclicked === 0 && botmove === 2 || btnclicked === 1 && botmove === 0 || btnclicked === 2 && botmove === 1){
        console.log(`Player wins player:${movesAvailable[btnclicked]} bot:${movesAvailable[botmove]}`);
        winner = document.querySelector('.playername0').innerHTML + ' Wins';
    }
    else{
        console.log(`Bot wins player:${movesAvailable[btnclicked]} bot:${movesAvailable[botmove]}`)
        winner = 'BOT Wins';
    }
}

////////////////////////////////////////// Resetting the Game //////////////////////////////////////////
const reset = document.querySelector('.btn--reset').addEventListener('click',function(){
    document.querySelector('.btn--reset').classList.add('hidden');
    document.querySelector('.gif').classList.add('hidden');
    document.querySelector('.winner').classList.add('hidden');
    document.querySelector('.ul').classList.add('hidden');
    document.querySelector('.line').classList.add('hidden');
    document.querySelector('.display-bot').classList.add('hidden');
    document.querySelector('.display-player').classList.add('hidden');
    document.querySelector('.playername0').classList.add('hidden');
    document.querySelector('.playername1').classList.add('hidden');
    document.querySelector('.vs').classList.add('hidden');
    document.querySelector('.count-down').classList.add('hidden');
    document.querySelector('.btn--start').classList.remove('hidden');
    // document.querySelector('.welcome').classList.add('hidden');

    // document.querySelector('.player').classList.remove('hidden');
    // document.querySelector('.player-name').classList.remove('hidden');
    // document.querySelector('.btn--check').classList.remove('hidden');
    // document.querySelector('.player-name').value = '';
    classbBtns1.disabled = false;
    classbBtns2.disabled = false;
    classbBtns0.disabled = false;
    classbBtns0.classList.remove('clicked');
    classbBtns1.classList.remove('clicked');
    classbBtns2.classList.remove('clicked');
    classbBtns0.classList.remove('disabled');
    classbBtns1.classList.remove('disabled');
    classbBtns2.classList.remove('disabled');
})

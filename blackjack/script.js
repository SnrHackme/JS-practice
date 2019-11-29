let container = document.querySelector('.container');
let card;
let img;
let userScore = document.querySelector('#userScore');
let aiScore = document.querySelector('#aiScore');
let count = 0;
let cardOff = [];
userScore.innerText = 0;
aiScore.innerText = 0;
let arr = [];

function ready() {
    overlay(0.7,'body');
    container.classList.add('blur');
    document.querySelector('.start-form').style.display = 'block';
    init();
    card.addEventListener('mouseup',getCard);
    document.querySelector('.pass').addEventListener('click',pass);
}
function init(){
    for(let i = 1;i <= 52;i++) {
        card = document.createElement('div');
        card.className = 'card';
        card.id = i.toString();
        card.style.zIndex = 0;
        img = document.createElement('img');
        img.className = 'cardBack';
        img.src = 'img/0.png';
        card.appendChild(img);
        card.style.left = `${(700 + i)}px`;
        card.style.top = `${(200 + i*0.5)}px`;
        container.appendChild(card)
    }
}

document.addEventListener("DOMContentLoaded", ready);

document.querySelector('.start').addEventListener('click', () => {
    document.querySelector('.start-form').style.animation = 'dropUp 1s ease-in-out';
    setTimeout(() => {
        document.querySelector('.start-form').style.display = 'none';
    },1000);
    overlay(0,'body');
    container.classList.remove('blur');
});

function getScore(id) {
    switch (true) {
        case id <= 4: { return 11;}
        case id <= 8: { return 6;}
        case id <= 12: { return 7;}
        case id <= 16: { return 8;}
        case id <= 20: { return 9;}
        case id <= 36: { return 10;}
        case id <= 40: { return 2;}
        case id <= 44: { return 3;}
        case id <= 48: { return 4;}
        case id <= 52: { return 5;}
    }
}

function random(){
    return Math.floor(Math.random() * (52 - 1 + 1)) + 1;
}

function getCard() {
    let rand = random();
    if(cardOff.includes(rand)){
        rand = random();
    }
    cardOff.push(rand);
    let id = document.getElementById(rand.toString());
    id.className = 'cardFlopped';
    img = document.createElement('img');
    img.className = 'cardImg';
    img.src = `img/png/${id.id}.png`;
    id.appendChild(img);
    id.firstChild.style.display = "none";
    if(count > 0) {
        id.style.transform = `translate(${-630 + 60 * count}px,160px) rotate(${-15 + 10 * count}deg)`;
        id.style.zIndex = count;
        count++;
    } else {
        id.style.transform = `translate(-630px,160px) rotate(-15deg)`;
        id.style.zIndex = count;
        count++;
    }
    let buf = parseInt(userScore.innerText);
    userScore.innerText = buf + getScore(id.id);

    if(userScore.textContent > 21) {
        message('You lose');
    }
}
function getCardAi(){
    let rand = random();
    if(cardOff.includes(rand)){
        rand = random();
    }
    cardOff.push(rand);
    let id = document.getElementById(rand.toString());
    id.className = 'cardFlopped';
    img = document.createElement('img');
    img.className = 'cardImg';
    img.src = `img/png/${id.id}.png`;
    id.appendChild(img);
    id.firstChild.style.display = "none";
    if(count > 0) {
        id.style.transform = `translate(${-630 + 60 * count}px,-160px) rotate(${15 + 10 * count}deg)`;
        id.style.zIndex = count;
        count++;
    } else {
        id.style.transform = `translate(-630px,-160px) rotate(15deg)`;
        id.style.zIndex = count;
        count++;
    }
    let buf = parseInt(aiScore.innerText);
    aiScore.innerText = buf + getScore(id.id);

    if(aiScore.textContent > 21) {
        message('You win');
    }
}

function message(str,win) {    
    let fail = document.createElement('div');
    fail.className='fail';
    fail.innerHTML = `<h1>${str}</h1><div id="button" class="failButton"><p>OK</p></div>`;
    overlay(0.5);
    fail.style.display = 'block';
    document.body.appendChild(fail);
    document.querySelector('.failButton').style.display = 'block';
    document.querySelector('.failButton').onclick = () => newGame();
}
function overlay(opacity,classToAppend = '.container') {
    let classAdd =  document.querySelector(classToAppend);
    if (opacity == 0) {
        classAdd.removeChild(document.querySelector('.overlay'));
        return;
    }
    let overlay = document.createElement('div');
    overlay.className='overlay';
    classAdd.appendChild(overlay);
    overlay.style.opacity = opacity;
}
function newGame() {
    overlay(0);
    document.querySelector('.fail').style.animation = `hide 1s ease-in-out`;
    setTimeout(() => document.body.removeChild(document.querySelector('.fail')), 900);
    aiScore.innerText = 0;
    userScore.innerText = 0;
    document.querySelectorAll('.cardFlopped').forEach((elem) => {
        elem.className = 'card';
        console.dir(elem);
        elem.firstElementChild.style.display = 'block';
        elem.removeChild(document.querySelector('.cardImg'));
        elem.style.transform = '';
        elem.style.zIndex = 0;
    });
    card.addEventListener('mouseup',getCard);
    document.querySelector('.pass').addEventListener('click',pass);
    cardOff = [];
    count = 0;
}
function check() {
    if(userScore.innerText  > aiScore.innerText) {
        message('You win');
    } else {
        message('You lose');
    }
}
function pass() {
    card.removeEventListener('mouseup',getCard);
    let timerId = setInterval(() => {
        getCardAi();
    }, 1500);
    setTimeout(() => { clearInterval(timerId);
                        document.querySelector('.pass').removeEventListener('click',pass);
                        check();
                    }
                        , 3000);
    count = 0;
}
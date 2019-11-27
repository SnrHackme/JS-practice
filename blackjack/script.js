let container = document.querySelector('.container');
console.dir(container);
let card;
let img;
let userScore = document.querySelector('#userScore');
let aiScore = document.querySelector('#aiScore');
let count = 0;
// test
let arr = [];
class Card {
    constructor(id,num) {
        this.id = id;
        this.num = num;
    }
}

console.dir(container);

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
    //test
    arr.push(new Card(i,getScore(i)));
}

card.addEventListener('mouseup',() => getCard());

userScore.innerText = 0;
aiScore.innerText = 0;

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

function getCard() {
    let rand = Math.floor(Math.random() * (52 - 1 + 1)) + 1;
    let id = document.getElementById(rand.toString());
    id.className = 'cardFlopped';
    img = document.createElement('img');
    img.className = 'cardImg';
    img.src = `img/PNG/${id.id}.png`;
    id.appendChild(img);
    id.firstChild.style.display = "none";
    if(count > 0) {
        // id.style.left = (120 + 60 * count) + 'px';
        // id.style.transform = `rotate(${-15 + 10 * count}deg)`;
        id.style.transform = `translate(${-600 + 60 * count}px,200px) rotate(${-15 + 10 * count}deg)`;
        id.style.zIndex = count;
        count++;
    } else {
        // id.style.left = 120 + 'px';
        // id.style.transform = `rotate(-15deg)`;
        id.style.transform = `translate(-600px,200px) rotate(-15deg)`;
        id.style.zIndex = count;
        count++;
    }
    let buf = parseInt(userScore.innerText);
    userScore.innerText = buf + arr[rand-1].num;

    console.dir(id);

    if(userScore.textContent > 21) {
        message('You lost');
    }
}

function message(str,win) {
    // $('.fail').remove();
    // fail=document.createElement('div');
    // fail.className='fail';
    // $('body').append(fail);
    // $('.fail').append('<h1>' + text + '</h1>').append('<div id="button" class="failButton"><p>OK</p></div>');


    // $('.fail').delay(2000).show('puff',400,  function(){
    //     black_fon(0.5);
    //     $('.failButton').fadeTo(60,1);
    //     clearTimeout(intervalID);
    //     $('.failButton').click(function(){
    //         if (win == 'ai') {
    //             aiWins();
    //         } else if (win == 'user') {
    //             userWins();
    //         }
    //         newGame();
    //     });
    // });
    
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
    console.dir(document.querySelector('.fail'));
    document.querySelector('.fail').style.animation = `hide 1s ease-in-out`;
    setTimeout(() => document.body.removeChild(document.querySelector('.fail')), 900);
}

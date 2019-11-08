let A = ['A1','A2','A3','A4','A5','A6','A7','A8','A9','A10','A11'];
let B = ['B1','B2','B3','B4','B5','B6','B7','B8','B9','B10','B11'];

function logRound(A,B) {
    let rand =  Math.floor(Math.random() * ((arguments.length) - 0) + 0);
    let randCard = Math.floor(Math.random() * (2 - 0) + 0);
    if(randCard == 0) {
        addYellow(arguments[rand]);
    } else {
        addRed(arguments[rand]);
    }
    for(let i = 0; i < B.length ; i++) {
        if(B[i].search('R') >= 0) {
            B.splice(i,1);
        }
        if(B[i].search('YY') >= 0) {
            B.splice(i,1);
        }
    }
    for(let i = 0; i < A.length ; i++) {
        if(A[i].search('R') >= 0) {
            A.splice(i,1);
        }
        if(A[i].search('YY') >= 0) {
            A.splice(i,1);
        }
    }
    return [A.length,B.length];
}
function addRed(team) {
    let rand = Math.floor(Math.random() * ((team.length-1) - 0) + 0);
    team[rand] += "R";
    console.log(`Игрок команды ${team[rand][0]} #${rand} Получил красную Карту!!`);
}
function addYellow(team) {
    let rand = Math.floor(Math.random() * ((team.length-1) - 0) + 0);
    if(team[rand].search('Y') == -1){
        console.log(`Игрок команды ${team[rand][0]} #${rand} Получил Первую желтую Карту!!`);
    } else {
        console.log(`Игрок команды ${team[rand][0]} #${rand} Получил Вторую желтую Карту!!`);
    }
    team[rand] += "Y";
}

function game() {
    let flag = true;
    while(flag){
        if(logRound(A,B)[0] < 7){
            console.log(`Победила команда B!`);
            flag = false;
        } else if(logRound(A,B)[1] < 7){
            console.log(`Победила команда A!`);
            flag = false;
        }
    }
    console.log(A,B);
}

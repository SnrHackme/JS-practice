class Fighter {
    constructor(name,health = 0,damagePerAttack = 0){
        this.name = name;
        if(health <= 0) {
            this.health = 1;
        } else {
            this.health = health;
        }
        if(damagePerAttack <= 0) {
            this.damagePerAttack = 1;
        }
        else {
            this.damagePerAttack = damagePerAttack;
        }
        this.toString = () => this.name;
    }
}
function declareWinner(fighter1, fighter2, firstAttacker) {
    while(fighter1.health >= 0 || fighter1.health >= 0) {
        if(firstAttacker == fighter1.toString()){
            fighter2.health -= fighter1.damagePerAttack;
            firstAttacker = fighter2.toString();
            console.log(`${fighter1.toString()} нанес ${fighter1.damagePerAttack} уронa ${fighter2.toString()}\n
            у бойца ${fighter2.toString()} осталось здорвоья ${fighter2.health}`);
        } else if(firstAttacker == fighter2.toString()) {
            fighter1.health -= fighter2.damagePerAttack;
            firstAttacker = fighter1.toString();
            console.log(`${fighter2.toString()} нанес ${fighter2.damagePerAttack} уронa ${fighter1.toString()}\n
            у бойца ${fighter1.toString()} осталось здорвоья ${fighter1.health}`);
        }
    }
    if(fighter1.health <= 0){
        console.log(`Победитель ${fighter2.toString()}`);
    } 
    else { 
        console.log(`Победитель ${fighter1.toString()}`);
    }

}
let fighter1 = new Fighter('Anton',100,5);
let fighter2 = new Fighter('Seregan',80,10);
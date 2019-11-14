class Marker{
    constructor(color = '',numberInk = 0){
        this.color = color;
        if(numberInk > 100){
            this.numberInk = 100;
        } else if(numberInk < 0){
            this.numberInk = 0;
        } else {
            this.numberInk = numberInk;
        } 
    }
    paint(str = ''){
        let buf = '';
        for(let i = 0; i < str.length; i++){
            if(this.numberInk > 0){
                buf += str[i]
                if(str[i] != ' ')
                this.numberInk = this.numberInk - 0.5;
                console.log(this.numberInk);
            }
        }
        let elem = document.getElementsByClassName('text');
        elem[0].textContent = buf;
        elem[0].style.color = this.color;
    }
}
class reMarker extends Marker{
    recharge(num = 0){
        if(this.numberInk + num > 100){
            this.numberInk = 100;
        } else{
            this.numberInk += num;
        }
    }
}
let mark = new reMarker('red', 100);
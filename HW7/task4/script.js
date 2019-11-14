class Figure {
    constructor(a = 0,b = 0,c = 0) {
        this.a = a;
        if(b > 0){
            this.b = b;
        }
        if(c > 0){
            this.c = c;
        }
        this.name = this.__proto__.constructor.name;
    }
    info() {
        if(this.b == undefined && this.c == undefined){
            return `a = ${this.a}`;
        } else if(this.c == undefined){
            return `a = ${this.a}\n b = ${this.b}`;
        }
        return `a = ${this.a}\n b = ${this.b}\n c = ${this.c}`;
    }
    square() {
        if(this.b == undefined && this.c == undefined){
            return Math.pow(this.a,2);
        } else if(this.c == undefined){
            return this.a * this.b;
        }
        let p = (this.a + this.b + this.c) / 2;
        return Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(2);
    }
    perim() {
        if(this.b == undefined && this.c == undefined){
            return this.square();
        } else if(this.c == undefined){
            return this.a * 2 + this.b * 2;
        }
        return this.square() * 2;
    }
}

class Square extends Figure {
    square() {
        return Math.pow(this.a,2);
    }
    perim() {
        return this.square();
    }
    info() {
        return `${this.name}\na = ${this.a}`;
    }
}

class Rectangle extends Figure {
    square() {
        return this.a * this.b;
    }
    perim() {
        return this.a * 2 + this.b * 2;
    }
    info() {
        return `${this.name}\na = ${this.a}\nb = ${this.b}`;
    }
}

class Triangle extends Figure {
    square() {
        let p = (this.a + this.b + this.c) / 2;
        return Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(2);
    }
    perim() {
        return this.square() * 2;
    }
    info() {
        return `${this.name}\na = ${this.a}\nb = ${this.b}\nc = ${this.c}`;
    }
    
}
let a = new Square(4);
let b = new Rectangle(4,5);
let c = new Triangle(4,5,6);
let mass = [a,b,c];
for(let i = 0; i < 3; i++) {
    console.log(mass[i].square());
    console.log(mass[i].perim());
    console.log(mass[i].info());
}
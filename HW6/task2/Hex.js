class Hex {
    constructor(num){
        this.num = num;
    }
    toString() {
        return '0x' + this.num.toString(16).toUpperCase();
    }
    toJSON() {
        return '0x' + this.num.toString(16).toUpperCase();
    }
    valueOf() {
        return this.num;
    }
    plus(num) {
        return new Hex(this.num + num);
    }
    minus(num) {
        return new Hex(this.num - num);
    }
    static parse(str) {
        return parseInt(str,16);
    }
}
let FF = new Hex(255);
console.log(`FF.toString() == "0xFF" ${FF.toString() === "0xFF"}`);
console.log(`FF.toJSON() == "0xFF" ${FF.toJSON() === "0xFF"}`);
console.log(`FF.valueOf() + 1 == 256 ${FF.valueOf() + 1 === 256}`);

var a = new Hex(10);
var b = new Hex(5);
console.log(`a.plus(b).toJSON() == "0xF" ${a.plus(b).toJSON() == "0xF"}`);
console.log(`Hex.parse("0xFF") == 255 ${Hex.parse("0xFF") == 255}`);
console.log(`Hex.parse("FF") == 255 ${Hex.parse("FF") == 255}`);
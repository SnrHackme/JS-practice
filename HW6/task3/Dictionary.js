class Dictionary {
    constructor(){
        this.map = new Map();
    }
    newEntry(key,value) {
        this.map.set(key,value);
    }
    look(key) {
        if(this.map.has(key)){
            return this.map.get(key);
        } else {
            return `Can't find entry for ${key}`;
        }
    }
}
let d = new Dictionary();
d.newEntry("Apple", "A fruit that grows on trees");
console.log(d.look("Apple") === "A fruit that grows on trees");
console.log(d.look("Apple"));
console.log(d.look("Banana"));
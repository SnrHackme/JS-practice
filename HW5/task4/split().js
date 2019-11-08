let myString = 'Hello World';
function mySplit(a,b) {
    let res = [];
    let words = [];
    let word = '';
    if(arguments[1] != ''){
        for(let i = 0;i <= a.length;i++) {
            
            if(b != a[i] & i != a.length) {
               word += a[i];
            } else if(i == a.length) {
                words.push(word);
            } else {
                words.push(word);
                word = '';
            }
            res = words;
        }
    } else {
        for(let i = 0; i < a.length;i++) {
            if(b == a[i]){
                continue;
            } else {
                res.push(a[i]);
            }
        }
    }
    
    return res;
}

console.log(`mySplit(myString) === myString.split() - ${mySplit(myString).toString() === myString.split().toString()}`);
console.log(`mySplit(myString,'') === myString.split('') - ${mySplit(myString,'').toString() === myString.split('').toString()}`);
console.log(`mySplit(myString,' ') === myString.split(' ') - ${mySplit(myString,' ').toString() === myString.split(' ').toString()}`);
console.log(`mySplit(myString,'1') === myString.split('1') - ${mySplit(myString,'1').toString() === myString.split('1').toString()}`);
console.log(`mySplit(myString,',') === myString.split(',') - ${mySplit(myString,',').toString() === myString.split(',').toString()}`);
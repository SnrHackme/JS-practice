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
console.log(mySplit('Hello World!') === 'Hello World!');
console.log(mySplit() === '');
console.log(mySplit('   jojo    ') === 'jojo');
console.log(mySplit(2) === '2');
console.log(mySplit(true) === 'true');
console.log(mySplit([]) === '[Hello World!]');
console.log(mySplit({}) === '{Hello World!}');
console.log(mySplit(undefined) === 'undefined');
console.log(mySplit(null) === 'null');
console.log(mySplit(NaN) === 'NaN');
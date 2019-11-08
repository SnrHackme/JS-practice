function myRepeat(a,b){
    let result ='';
    for(let i = 0; i < b; i++){
        result +=a;
    }
    return result;
}
console.log(myRepeat('Hello World!') === 'Hello World!');
console.log(myRepeat() === '');
console.log(myRepeat('   jojo    ') === 'jojo');
console.log(myRepeat(2) === '2');
console.log(myRepeat(true) === 'true');
console.log(myRepeat([]) === '[Hello World!]');
console.log(myRepeat({}) === '{Hello World!}');
console.log(myRepeat(undefined) === 'undefined');
console.log(myRepeat(null) === 'null');
console.log(myRepeat(NaN) === 'NaN');
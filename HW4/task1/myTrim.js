function myTrim(a) {
    let res = '';
    let start = 0;
    let end = 0;
    for(let i  = 0; i < a.length; i++) {
        if(a[i] != ' ') {
            start = i
            break;
        }
    }
    for(let i = a.length; i > 0; i--) {
        if(a[i] != ' ' && a[i] != undefined) {
            end = i
            break;
        }
    }
    for(let i = start; i <= end;i++){
            res += a[i];
    }
    return res;
}
console.log(myTrim('Hello World!') === 'Hello World!');
console.log(myTrim() === '');
console.log(myTrim('   jojo    ') === 'jojo');
console.log(myTrim(2) === '2');
console.log(myTrim(true) === 'true');
console.log(myTrim([]) === '[Hello World!]');
console.log(myTrim({}) === '{Hello World!}');
console.log(myTrim(undefined) === 'undefined');
console.log(myTrim(null) === 'null');
console.log(myTrim(NaN) === 'NaN');
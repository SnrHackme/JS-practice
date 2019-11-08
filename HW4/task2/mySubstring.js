function mySubstring(a,b,c) {
    let res = '';
    if( b > c) {
        for(let i = c;i < b; i++) {
            res += a[i];
        }    
    } else {
        for(let i = b;i < c; i++) {
            res += a[i];
        }
    }
    return res;
}
console.log(mySubstring('Hello World!') === 'Hello World!');
console.log(mySubstring() === '');
console.log(mySubstring('   jojo    ') === 'jojo');
console.log(mySubstring(2) === '2');
console.log(mySubstring(true) === 'true');
console.log(mySubstring([]) === '[Hello World!]');
console.log(mySubstring({}) === '{Hello World!}');
console.log(mySubstring(undefined) === 'undefined');
console.log(mySubstring(null) === 'null');
console.log(mySubstring(NaN) === 'NaN');
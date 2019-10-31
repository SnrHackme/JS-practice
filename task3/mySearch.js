function mySearch(a,b){
    for(let i = 0; i < a.length; i++){
        if(b[0] == a[i]){
            return i;
        }
    }
}
console.log(mySearch('Hello World!') === 'Hello World!');
console.log(mySearch() === '');
console.log(mySearch('   jojo    ') === 'jojo');
console.log(mySearch(2) === '2');
console.log(mySearch(true) === 'true');
console.log(mySearch([]) === '[Hello World!]');
console.log(mySearch({}) === '{Hello World!}');
console.log(mySearch(undefined) === 'undefined');
console.log(mySearch(null) === 'null');
console.log(mySearch(NaN) === 'NaN');
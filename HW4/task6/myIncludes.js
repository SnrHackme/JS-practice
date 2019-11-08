function myIncludes(str,pos) {
    let buf = '';
    if(pos == undefined){
        return false;
    }
    if(pos == ''){
        return true;
    }
    for(let i = 0; i < str.length; i++){
        if(pos[0] == str[i]){
            if(pos.length > 1){
                for(let j = i; j < i+ pos.length; j++) {
                    if(str[j] != str[j+1]){
                        buf += str[j+1];
                    } else {
                        buf += str[j];
                    }   
                }
                if(buf == pos) {
                    return true;
                }
            }
            return true;
        }
    }
    return false;
}
console.log(myIncludes('Hello World!') === 'Hello World!');
console.log(myIncludes() === '');
console.log(myIncludes('   jojo    ') === 'jojo');
console.log(myIncludes(2) === '2');
console.log(myIncludes(true) === 'true');
console.log(myIncludes([]) === '[Hello World!]');
console.log(myIncludes({}) === '{Hello World!}');
console.log(myIncludes(undefined) === 'undefined');
console.log(myIncludes(null) === 'null');
console.log(myIncludes(NaN) === 'NaN');
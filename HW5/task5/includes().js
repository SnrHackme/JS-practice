let arr = [4,5,6,'h',2,'cat'];
function myIncludes(arr,searchElement,fromIndex = 0) {
    for(let i = fromIndex; i < arr.length;i++) {
        if(arr[i] == searchElement) {
            return true;
        }
    }
    return false;
}

console.log(`myIncludes(arr,2) == arr.includes(2) - ${myIncludes(arr,2) == arr.includes(2)}`);
console.log(`myIncludes(arr,'h') == arr.includes('h') - ${myIncludes(arr,'h') == arr.includes('h')}`);
console.log(`myIncludes(arr,'cat') == arr.includes('cat') - ${myIncludes(arr,'cat') == arr.includes('cat')}`);
console.log(`myIncludes(arr,'Cat') == arr.includes('Cat') - ${myIncludes(arr,'Cat') == arr.includes('Cat')}`);
console.log(`myIncludes(arr,'at') == arr.includes('at') - ${myIncludes(arr,'at') == arr.includes('at')}`);
console.log(`myIncludes(arr,2,3) == arr.includes(2,3) - ${myIncludes(arr,2,3) == arr.includes(2,3)}`);
console.log(`myIncludes(arr,2,6) == arr.includes(2,6) - ${myIncludes(arr,2,6) == arr.includes(2,6)}`);
console.log(`myIncludes(arr,2,10) == arr.includes(2,10) - ${myIncludes(arr,2,10) == arr.includes(2,10)}`);
console.log(`myIncludes(arr,2,-5) == arr.includes(2,-5) - ${myIncludes(arr,2,-5) == arr.includes(2,-5)}`);
console.log(`myIncludes(arr) == arr.includes() - ${myIncludes(arr) == arr.includes()}`);
console.log(`myIncludes(arr,'') == arr.includes('') - ${myIncludes(arr,'') == arr.includes('')}`);
console.log(`myIncludes(arr,NaN) == arr.includes('NaN') - ${myIncludes(arr,NaN) == arr.includes(NaN)}`);
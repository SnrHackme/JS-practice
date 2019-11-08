function myIndexof(arr,searchElement,fromIndex = 0) {
    for(let i = fromIndex; i < arr.length; i++) {
        if(arr[i] === searchElement) {
            return i;
        }
    }
    return -1;
}
let arr = [4,5,6,'h',2];

console.log(`myIndexof(arr,6) == arr.indexOf(6) - ${myIndexof(arr,6) == arr.indexOf(6)}`);
console.log(`myIndexof(arr,3) == arr.indexOf(3) - ${myIndexof(arr,3) == arr.indexOf(3)}`);
console.log(`myIndexof(arr) == arr.indexOf() - ${myIndexof(arr) == arr.indexOf()}`);
console.log(`myIndexof(arr,'') == arr.indexOf('') - ${myIndexof(arr,'') == arr.indexOf('')}`);
console.log(`myIndexof(arr,0) == arr.indexOf(0) - ${myIndexof(arr,0) == arr.indexOf(0)}`);
console.log(`myIndexof(arr,'h') == arr.indexOf('h') - ${myIndexof(arr,'h') == arr.indexOf('h')}`);
console.log(`myIndexof(arr,'z') == arr.indexOf('z') - ${myIndexof(arr,'z') == arr.indexOf('z')}`);
console.log(`myIndexof(arr,6,1) == arr.indexOf(6,1) - ${myIndexof(arr,6,1) == arr.indexOf(6,1)}`);
console.log(`myIndexof(arr,6,2) == arr.indexOf(6,2) - ${myIndexof(arr,6,2) == arr.indexOf(6,2)}`);
console.log(`myIndexof(arr,6,3) == arr.indexOf(6,3) - ${myIndexof(arr,6,3) == arr.indexOf(6,3)}`);
console.log(`myIndexof(arr,6,-3) == arr.indexOf(6,-3) - ${myIndexof(arr,6,-3) == arr.indexOf(6,-3)}`);
console.log(`myIndexof(arr,6,-100) == arr.indexOf(6,-100) - ${myIndexof(arr,6,-100) == arr.indexOf(6,-100)}`);
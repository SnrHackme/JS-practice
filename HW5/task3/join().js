let arr = [4,5,6,'h',2];
let arr2 = [];
let arr3 = [4,5,undefined,'h',null,2];
function myJoin(arr,separator = ',') {
    let buf = '';
    for(let i = 0; i < arr.length; i++) {
        if(i == arr.length - 1) {
            buf += arr[i];
        } else {
            if(arr[i] === undefined || arr[i] === null) {
                buf += '' + separator;
            } else {
                buf += arr[i] + separator;
            }
        }
    }
    return buf;
}
console.log(`myJoin(arr) == arr.join() - ${myJoin(arr) == arr.join()}`);
console.log(`myJoin(arr) == arr.join() - ${myJoin(arr,'') == arr.join('')}`);
console.log(`myJoin(arr) == arr.join() - ${myJoin(arr,' ') == arr.join(' ')}`);
console.log(`myJoin(arr2) == arr2.join() - ${myJoin(arr2) == arr2.join()}`);
console.log(`myJoin(arr2) == arr2.join() - ${myJoin(arr2,' ') == arr2.join(' ')}`);
console.log(`myJoin(arr2) == arr2.join() - ${myJoin(arr2,'') == arr2.join('')}`);
console.log(`myJoin(arr3) == arr3.join() - ${myJoin(arr3) == arr3.join()}`);
console.log(`myJoin(arr3) == arr3.join('') - ${myJoin(arr3,'') == arr3.join('')}`);
console.log(`myJoin(arr3) == arr3.join(' ') - ${myJoin(arr3,' ') == arr3.join(' ')}`);
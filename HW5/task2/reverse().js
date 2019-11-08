let arr = [4,5,6,'h',2];
function myReverse(arr) {
    let buf = [];
    for(let i = arr.length-1; i >= 0; i--) {
        buf.push(arr[i]);
    }
    for(let j = 0; j < arr.length;j++) {
        arr[j] = buf[j];
    }
    return arr;
}

console.log(`myReverse(arr) == arr.reverse() - ${myReverse(arr) == arr.reverse()}`);
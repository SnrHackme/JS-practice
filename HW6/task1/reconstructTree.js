function trans(arr) {
    buf = [];
    for(let i = 0;i < arr.length;i++){
        if(i == 0){
            buf.push(arr[Math.floor(arr.length/2)]);
        } else {
            if(arr[i] == buf[0]){
                buf.push(arr[i-1]);
            } else{
                buf.push(arr[i]);
            }
        }
    }
    for(i = 0; i < buf.length;i++){
        arr[i] = buf[i];
    }
    return arr;
}
function reconstructTree(inOrder,preOrder) {
    if(inOrder.length <= 0) {
        return new Array();
    }
    let bufPreOrderLeft1 = inOrder.slice(0,Math.floor(inOrder.length/2));
    let bufPreOrderRight1 = trans(inOrder.slice(0,Math.floor(inOrder.length/2)));
    let bufPreOrderLeft2 = inOrder.slice(Math.floor(inOrder.length/2) + 1);
    let bufPreOrderRight2 = inOrder.slice(Math.floor(inOrder.length/2) + 1).reverse();
    return new Array(inOrder[Math.floor(inOrder.length / 2)],reconstructTree(bufPreOrderLeft1,bufPreOrderRight1),reconstructTree(bufPreOrderLeft2,bufPreOrderRight2));
}
let inOrder  = [1,2,3,4,5,6];
let preOrder = [4,2,1,3,6,5];
console.log(`reconstructTree([1,2,3,4,5,6],[4,2,1,3,6,5]) == [4,[2,[1,[],[]],[3,[],[]]],[6,[5,[],[]],[]]] ${reconstructTree([1,2,3,4,5,6],[4,2,1,3,6,5]).toString() == [4,[2,[1,[],[]],[3,[],[]]],[6,[5,[],[]],[]]].toString()}`);
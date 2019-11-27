function NumtoBin(num) {
    return num.toString(2);
}

function sort(str) {
    if(str.length == 0){
        return '';
    }
    let newStr = '';
    newStr = str.split(' ');
    let buf = [];
    count = 1;
    for(let i = 0;i < newStr.length;i++){
        if(newStr[i].includes(count)) {
            buf.push(newStr[i]);
            count++;
            i = -1;
        }
    }
    return buf.join(' ');
}
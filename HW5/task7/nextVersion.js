function nextVersion(str) {
    let buf = str.split('.');
    if(buf[0] == 9){
        let flag = false;
        for(let i = 0; i < 9;i++) {
            if(buf.includes(i.toString())){
                flag = true;
                break;
            }
        }
        if(!flag) {
            for(let i = buf.length-1; i >= 1;i--) {
                buf[i] = '0';
            }
            buf[0] = '10';
            return buf.join('.');
        }
    }
    buf = buf.join('');
    buf = Number(buf);
    buf++;
    buf = buf.toString();
    buf = buf.split('');
    buf = buf.join('.');
    return buf;
}
console.log(nextVersion("1.2.3") === "1.2.4");
console.log(nextVersion("0.9.9") === "1.0.0");
console.log(nextVersion("1") === "2");
console.log(nextVersion("1.2.3.4.5.6.7.8") === "1.2.3.4.5.6.7.9");
console.log(nextVersion("9.9") === "10.0");
console.log(nextVersion("9.9.9") === "10.0.0");
console.log(nextVersion("9.3.9") === "9.4.0");
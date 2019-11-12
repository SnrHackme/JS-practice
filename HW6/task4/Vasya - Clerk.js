function tickets(queue) {
    let wallet = new Map();
    wallet.set(25,0);
    wallet.set(50,0);
    wallet.set(100,0);
    const ticketPrice = 25;
    console.log(wallet);
    console.log(queue);
    function payment(wallet,key) {
        if(key == 25) {
            let buf = wallet.get(key) + 1;
            wallet.delete(key);
            wallet.set(key,buf);
        }
        if(key == 50) {
            if(wallet.get(25) >= 1){
                let buf = wallet.get(25) - 1;
                wallet.delete(25);
                wallet.set(25,buf);
                buf = wallet.get(50) + 1;
                wallet.delete(key);
                wallet.set(key,buf);
            }
        }
        if(key == 100) {
            if(wallet.get(25) >= 1 && wallet.get(50) >= 1) {
                let buf = wallet.get(25) - 1;
                wallet.delete(25);
                wallet.set(25,buf);
                buf = wallet.get(50) - 1;
                wallet.delete(50);
                wallet.set(50,buf);
                buf = wallet.get(key) + 1;
                wallet.delete(key);
                wallet.set(key,buf);
            }
            else if(wallet.get(25) >= 3) {
                let buf = wallet.get(25) - 3;
                wallet.delete(25);
                wallet.set(25,buf);
                buf = wallet.get(key) + 1;
                wallet.delete(key);
                wallet.set(key,buf);
            } else {
                return 'NO';
            }
        }
    }

    for(let i = 0; i < queue.length;i++){
        if(queue[0] > ticketPrice) {
            return 'NO';
        }
        if(wallet.has(queue[i])){ 
            if(payment(wallet,queue[i]) == 'NO'){
                return 'NO';
            }
        }
    }
    return 'YES';
}

tickets([25, 25, 50]);
tickets([25, 100]);
tickets([25, 25, 50, 50, 100]);
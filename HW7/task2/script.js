function random() {
    let rand = Math.floor(Math.random() * 101);
    let elem = document.getElementsByClassName('random');
    elem[0].innerHTML = rand;
}
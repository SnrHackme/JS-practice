function addProgress() {
    let elem = document.getElementsByClassName("loader");
    let currentWidth = elem[0].style.width;
    if(currentWidth == ""){
        elem[0].style.width = 5 + '%';
        return;
    }
    let changedNum = currentWidth.split('%');
    if(changedNum[0] < 100){
        changedNum = +changedNum[0] + 5;
        currentWidth = changedNum + '%';
        elem[0].style.width = currentWidth;
    }
}
// let count = 0;
function change() {
    let elem = document.querySelectorAll('.item');
    // if(count == 0) {
    //     elem[2].style.backgroundColor = '';
    //     elem[0].style.backgroundColor = 'red';
    // }
    // if(count == 1) {
    //     elem[0].style.backgroundColor = '';
    //     elem[1].style.backgroundColor = 'yellow';
    // }
    // if(count == 2) {
    //     elem[1].style.backgroundColor = '';
    //     elem[2].style.backgroundColor = 'green';
    // }
    // if(count == 2) {
    //     count = 0;
    // } else {
    //     count++;
    // }
    // console.log(count);
    if(elem[0].style.backgroundColor == '' && elem[1].style.backgroundColor == '' && elem[2].style.backgroundColor == ''){
        elem[0].style.backgroundColor = 'red';
    } else{
        for(let i = 0; i < elem.length;i++){
            if(elem[i].style.backgroundColor == 'red'){
                elem[i].style.backgroundColor = '';
                elem[i].nextElementSibling.style.backgroundColor = 'yellow';
                break;
            }
            if(elem[i].style.backgroundColor == 'yellow'){
                elem[i].style.backgroundColor = '';
                elem[i].nextElementSibling.style.backgroundColor = 'green';
                break;
            }
            if(elem[i].style.backgroundColor == 'green'){
                elem[i].style.backgroundColor = '';
                elem[i].previousElementSibling.previousElementSibling.style.backgroundColor = 'red';
                break;
            }
        }
    }
}
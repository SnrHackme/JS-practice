 class PaginationHelper{
    constructor(arr, page){
        this.arr = arr;
        this.page = page;
    }
    pageCount(){
       return Math.ceil(this.itemCount() / this.page);
    }
    itemCount(){
        return this.arr.length;
    }
    pageItemCount(num) {
        let buf = [];
        let point = 0;
        let a = 0;
        for(let j = 0; j < this.pageCount();j++){
            let newArr = [];
            for(let i = 0; i < this.page; i++){
                if(this.arr[point + i] != undefined){
                    newArr.push(this.arr[point + i]);
                    a++;
                }
            }
            point = a;
            buf.push(newArr);
        }
        if(num < buf.length){
            return buf[num].length;
        } else {
            return -1;
        }
    }
    pageIndex(num) {
        let buf = [];
        let point = 0;
        let a = 0;
        for(let j = 0; j < this.pageCount();j++){
            let newArr = [];
            for(let i = 0; i < this.page; i++){
                if(this.arr[point + i] != undefined){
                    newArr.push(this.arr[point + i]);
                    a++;
                }
            }
            point = a;
            buf.push(newArr);
        }
        for(let k = 0; k < buf.length;k++) {
            if(buf[k].includes(num)){
                return k;
            }
        }
        return -1;
    }
}
var helper = new PaginationHelper(['a','b','c','d','e','f'], 4);
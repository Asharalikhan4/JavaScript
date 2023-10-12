class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.data = 0;
    }
}

const LL = new LinkedList();
console.log(LL);
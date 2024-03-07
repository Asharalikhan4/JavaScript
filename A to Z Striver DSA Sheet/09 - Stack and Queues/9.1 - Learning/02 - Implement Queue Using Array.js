class Queue{
    constructor(){
        this.item = [];
    }

    enqueue(element){
        this.item.push(element);
    }

    dequeue(){
        this.item.shift();
    }

    clear(){
        this.item = [];
    }

    print(){
        console.log(this.item.toString());
    }
}
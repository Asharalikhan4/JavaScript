class stack {
    constructor() {
        this.item = [];
    }

    push(element) {
        this.item.push(element);
    }

    pop() {
        if (this.item.isEmpty()){
            return "Underflow";
        }
        return this.item.pop();
    }

    print(){
        console.log(this.item.toString())
    }

    clear(){
        this.item = [];
    }
}

const myStack = new stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.push(4);
myStack.pop();
myStack.print();
class ArrayStack {
  constructor(size = 1000) {
    this.stackArray = new Array(size);
    this.capacity = size;
    this.topIndex = -1;
  };

  push(value) {
    if (this.topIndex >= this.capacity - 1) {
        console.log("Stack overflow");
        return;
    }
    this.stackArray[++this.topIndex] = value;
  };

  pop() {
    if (this.isEmpty()) {
      console.log("Stack is Empty");
      return;
    }
    return this.stackArray[this.topIndex--];
  };

  top() {
    if (this.isEmpty()) {
      console.log("Stack is Empty");
      return;
    }
    return this.stackArray[this.topIndex];
  };

  isEmpty() {
    return this.topIndex === -1;
  };

  print() {
    for (let item of this.stackArray) {
      console.log(item);
    };
  };
}

const stack = new ArrayStack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.print();
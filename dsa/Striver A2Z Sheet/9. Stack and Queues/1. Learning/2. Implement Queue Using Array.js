class QueueArray {
  constructor() {
    this.arr = new Array(10);
    this.start = -1;
    this.end = -1;
    this.currSize = 0;
    this.maxSize = 10;
  };

  push(x) {
    if (this.currSize === this.maxSize) {
      console.log("Queue is full\nExiting...");
      process.exit(1);
    }

    if (this.end === -1) {
      this.start = 0;
      this.end = 0;
    } else {
      this.end = (this.end + 1) % this.maxSize;
    }

    this.arr[this.end] = x;
    this.currSize++;
  };

  pop() {
    if (this.start === -1) {
      console.log("Queue Empty\nExiting...");
      process.exit(1);
    }
    let popped = this.arr[this.start];
    if (this.currSize === 1) {
      this.start = -1;
      this.end = -1;
    } else {
      this.start = (this.start + 1) % this.maxSize;
    };
    
    this.currSize--;
    return popped;
  };

  peek() {
    if (this.start === -1) {
      console.log("Queue is Empty");
      process.exit(1);
    }
    return this.arr[this.start];
  };

  isEmpty() {
    return this.currSize === 0;
  };
};

const queue = new QueueArray();


/*
Question: What is a deque data structure?
Answer: Deque or Double-ended queue is a generalized version of queue in which data can be added and removed from both the ends. It performs both the combined operations of stack and queue together and can be used as any of them.

Question: Why is deque data structure needed?
Answer: It supports clockwise and anti-clockwise rotations in O(1) time which can be very useful in certain applications and also the problem where elements need to be removed and added from both the ends can be solved easily.

# Example
Input:
let deque = new Deque();
deque.insertBack(5);
deque.insertBack(10);
console.log(deque.getBack());
deque.removeBack();
console.log(deque.getBack());
deque.insertFront(15);
console.log(deque.getFront());
deque.removeFront();
console.log(deque.getFront());

Output:
10
5
15

# List of operations performed on Deque
insertFront(): Inserts an element at the front.
insertBack(): Inserts an element at the back.
removeFront(): Removes an element from the front.
removeBack(): Removes an element from the back.
getFront(): Returns the element at the front.
getBack(): Returns the element at the back.
isEmpty(): Checks if the deque is empty or not.
size(): Returns the size of the deque.
clear(): Clears the deque.
toString(): Returns all the elements concatenated as a string from front to back.
Implement all of them.
*/

class Deque {
  constructor() {
    this.items = {};
    this.frontIndex = 0;
    this.backIndex = 0;
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return this.backIndex - this.frontIndex;
  }

  insertFront(element) {
    if (this.isEmpty()) {
      this.insertBack(element);
    } else {
      this.frontIndex--;
      this.items[this.frontIndex] = element;
    }
  }

  insertBack(element) {
    this.items[this.backIndex] = element;
    this.backIndex++;
  }

  removeFront() {
    if (this.isEmpty()) {
      return undefined;
    }
    const result = this.items[this.frontIndex];
    delete this.items[this.frontIndex];
    this.frontIndex++;
    return result;
  }

  removeBack() {
    if (this.isEmpty()) {
      return undefined;
    }
    this.backIndex--;
    const result = this.items[this.backIndex];
    delete this.items[this.backIndex];
    return result;
  }

  removeBack() {
    if (this.isEmpty()) {
      return undefined;
    }
    this.backIndex--;
    const result = this.items[this.backIndex];
    delete this.items[this.backIndex];
    return result;
  }

  getFront() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.frontIndex];
  }

  getBack() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.backIndex - 1];
  }

  clear() {
    this.items = [];
    this.frontIndex = 0;
    this.backIndex = 0;
  }

  print() {
    const elements = [];
    for (let i = this.frontIndex; i < this.backIndex; i++) {
      elements.push(this.items[i]);
    }
    console.log(elements.join("<-->"))
  }
}


const deque = new Deque();

deque.insertBack(10);
deque.insertBack(20);
deque.insertFront(5);
deque.insertFront(1);

deque.print();

console.log("Peek Front:", deque.getFront());
console.log("Peek Back:", deque.getBack());

console.log("Removed Front:", deque.removeFront());
console.log("Removed Back:", deque.removeBack());

deque.print();
console.log("Size:", deque.size());
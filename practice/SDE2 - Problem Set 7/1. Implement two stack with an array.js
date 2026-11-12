/*
Create a data structure called twoStacks which will be using only a single array to store the data but will act as two different stacks.

Example
Input:
let stack = new twoStacks(10);

//Push data in first stack
stack.push1('Prashant');

//Push data in second stack
stack.push2('Yadav');

//Pop data from first stack
console.log(stack.pop1());

//Pop data from second stack
console.log(stack.pop2());

Output:
"Prashant"
"Yadav"

The twoStacks data structure will perform following operations:

push1(elm): This will add data in the first stack
push2(elm): This will add data in the second stack
pop1(): This will remove the data from the first stack
pop2(): This will remove the data from the second stack
*/

class TwoStacks {
  constructor(size) {
    this.size = size;
    this.top1 = -1;
    this.top2 = size;
    this.arr = [];
  }

  push1(elm) {
    if (this.top1 < this.top2 - 1) {
      this.arr[++this.top1] = elm;
    } else {
      console.log("Stack Overflow");
      return false;
    }
  }

  push2(elm) {
    if (this.top1 < this.top2 - 1) {
      this.arr[--this.top2] = elm;
    } else {
      console.log("Stack overflow");
      return false;
    }
  }

  pop1() {
    if (this.top1 >= 0) {
      let elm = this.arr[this.top1];
      this.top1--;
      return elm;
    } else {
      console.log("stack underflow");
      return false;
    }
  }

  pop2() {
    if (this.top2 < this.size) {
      let elm = this.arr[this.top2];
      this.top2++;
      return elm;
    } else {
      console.log("stack underflow");
      return false;
    }
  }
}


let stack = new TwoStacks(10);
stack.push1("Ashar");
stack.push2("Ali Khan");
console.log(stack.pop1());
console.log(stack.pop2());
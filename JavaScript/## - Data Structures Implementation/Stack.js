// Creating a stack
function Stack() {
  let items = [];
  let top = 0;

  // pushing an item in stack
  this.push = function (element) {
    items[top] = element;
    top++;
  };

  // popping an item from stack
  this.pop = function () {
    if (top === 0) {
      return "Stack is empty";
    } else {
      return items[--top];
    }
  };

  // peeking the top element of stack
  this.peek = function () {
    return items[top - 1];
  };

  // checking if stack is empty
  this.isEmpty = function () {
    return top === 0;
  };

  // clearing the stack
  this.clear = function () {
    items = [];
    top = 0;
  };

  // size of stack
  this.size = function () {
    return top;
  };
}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.isEmpty());
console.log(stack.size());
stack.clear();
console.log(stack.isEmpty());

// We can also implement stack using built-in array methods
function Stack() {
  var items = [];

  //Push an item in the Stack
  this.push = function (element) {
    items.push(element);
  };

  //Pop an item from the Stack
  this.pop = function () {
    return items.pop();
  };

  //Peek top item from the Stack
  this.peek = function () {
    return items[items.length - 1];
  };

  //Is Stack empty
  this.isEmpty = function () {
    return items.length === 0;
  };

  //Clear the Stack
  this.clear = function () {
    items.length = 0;
  };

  //Size of the Stack
  this.size = function () {
    return items.length;
  };
}

// Making the properties and methods private with closure and IIFE (Immediately Invoked Function Expression).
var Stack = (function () {
  return function Stack() {
    var items = [];
    var top = 0;
    //other methods go here
    //Push an item in the Stack
    this.push = function (element) {
      items.push(element);
    };

    //Pop an item from the Stack
    this.pop = function () {
      return items.pop();
    };

    //Peek top item from the Stack
    this.peek = function () {
      return items[items.length - 1];
    };

    //Is Stack empty
    this.isEmpty = function () {
      return items.length === 0;
    };

    //Clear the Stack
    this.clear = function () {
      items.length = 0;
    };

    //Size of the Stack
    this.size = function () {
      return items.length;
    };
  };
})();

// Stack data structure using ES6.
class Stack {
  constructor() {
    this.items = [];
  }

  //other methods go here
  //Push an item in the Stack
  push = function (element) {
    this.items.push(element);
  };

  //Pop an item from the Stack
  pop = function () {
    return this.items.pop();
  };

  //Peek top item from the Stack
  peek = function () {
    return this.items[this.items.length - 1];
  };

  //Is Stack empty
  isEmpty = function () {
    return this.items.length === 0;
  };

  //Clear the Stack
  clear = function () {
    this.items.length = 0;
  };

  //Size of the Stack
  size = function () {
    return this.items.length;
  };
}

// Stack using WeakMap
const items = new WeakMap();
class Stack {
  constructor() {
    items.set(this, []);
  }

  //other methods go here
  //Push an item in the Stack
  push = function (element) {
    let temp = items.get(this);
    temp.push(element);
  };

  //Pop an item from the Stack
  pop = function () {
    let temp = items.get(this);
    return temp.pop();
  };

  //Peek top item from the Stack
  peek = function () {
    let temp = items.get(this);
    return temp[temp.length - 1];
  };

  //Is Stack empty
  isEmpty = function () {
    let temp = items.get(this);
    return temp.length === 0;
  };

  //Clear the Stack
  clear = function () {
    let temp = items.get(this);
    temp.length = 0;
  };

  //Size of the Stack
  size = function () {
    let temp = items.get(this);
    return temp.length;
  };
}

// Making the properties and methods private with closure and IIFE (Immediately Invoked Function Expression) for Stack using ES6 WeakMap.

let Stack = (() => {
  const items = new WeakMap();
  return class Stack {
    constructor() {
      items.set(this, []);
    }

    //other methods go here
    //Push an item in the Stack
    push = function (element) {
      let temp = items.get(this);
      temp.push(element);
    };

    //Pop an item from the Stack
    pop = function () {
      let temp = items.get(this);
      return temp.pop();
    };

    //Peek top item from the Stack
    peek = function () {
      let temp = items.get(this);
      return temp[temp.length - 1];
    };

    //Is Stack empty
    isEmpty = function () {
      let temp = items.get(this);
      return temp.length === 0;
    };

    //Clear the Stack
    clear = function () {
      let temp = items.get(this);
      temp.length = 0;
    };

    //Size of the Stack
    size = function () {
      let temp = items.get(this);
      return temp.length;
    };
  };
})();

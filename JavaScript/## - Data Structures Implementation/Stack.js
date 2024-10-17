// Creating a stack
function Stack() {
    let items = [];
    let top = 0;

    // pushing an item in stack
    this.push = function(element) {
        items[top] = element;
        top++;
    };

    // popping an item from stack
    this.pop = function() {
        if(top === 0) {
            return "Stack is empty";
        } else {
            return items[--top];
        }
    };

    // peeking the top element of stack
    this.peek = function() {
        return items[top - 1];
    };

    // checking if stack is empty
    this.isEmpty = function() {
        return top === 0;
    };

    // clearing the stack
    this.clear = function() {
        items = [];
        top = 0;
    };

    // size of stack
    this.size = function() {
        return top;
    };
};

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
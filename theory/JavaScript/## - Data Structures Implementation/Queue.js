// Creating a Queue
function Queue() {
    let items = [];
    let front = 0;
    let rear = 0;

    // enqueue an element
    this.enqueue = function (element) {
        items[rear] = element;
        rear++;
    };

    // dequeue an element
    this.dequeue = function() {
        if(front === rear) {
            return "Queue is empty";
        } else {
            return items[front++];
        }
    };

    // front element of queue
    this.front = function() {
        return items[front];
    };

    // rear element of queue
    this.rear = function() {
        return items[rear];
    };

    // checking if queue is empty
    this.isEmpty = function() {
        return front === rear;
    };

    // size of queue
    this.size = function() {
        return rear - front;
    };
}
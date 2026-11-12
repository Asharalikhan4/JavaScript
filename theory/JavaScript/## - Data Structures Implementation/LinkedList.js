//Node
class Node {
  constructor(elm, next = null) {
    this.element = elm;
    this.next = next;
  }
}

//LinkedList
class LinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
  }

  //Add new item in the linkedlist
  append = function (elm) {
    let node = new Node(elm),
      current;

    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }

    this.length++;
  };

  //Remove item from any position
  removeAt = function (pos) {
    if (pos > -1 && pos < this.length) {
      let current = this.head,
        previous,
        index = 0;

      if (pos === 0) {
        this.head = current.next;
      } else {
        while (index++ < pos) {
          previous = current;
          current = current.next;
        }

        previous.next = current.next;
      }

      this.length--;
      return current.element;
    } else {
      return null;
    }
  };

  //Add item at any position
  insert = function (pos, elm) {
    if (pos >= 0 && pos <= this.length) {
      let node = new Node(elm),
        current = this.head,
        previous,
        index = 0;

      if (pos === 0) {
        node.next = current;
      }
    }
  };
}

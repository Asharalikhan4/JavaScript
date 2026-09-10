/*
Problem Statement: Write an algorithm to sort a linked list.
*/

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedListClass {
  constructor() {
    this.head = null;
  }

  insertAtTheHeadOfLinkedList(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
  }

  insertAtEndOfLinkedList(value) {
    const newNode = new Node(value);
    let temp = this.head;
    while (temp.next !== null) {
      temp = temp.next;
    }
    temp.next = newNode;
    newNode.next = null;
  }

  printLinkedList() {
    let temp = this.head;
    while (temp !== null) {
      console.log(temp.data);
      temp = temp.next;
    }
  }

  deleteLastNodeOfLinkedList() {
    let temp = this.head;
    if (temp === null || temp.next === null) {
      return null;
    }
    while (temp.next.next !== null) {
      temp = temp.next;
    }
    temp.next = null;
  }

  linkedListLength() {
    let temp = this.head,
      count = 0;
    while (temp !== null) {
      count++;
      temp = temp.next;
    }
    return count;
  }

  existInLinkedList(target) {
    let temp = this.head;
    while (temp !== null) {
      if (temp.data === target) {
        return true;
      }
      temp = temp.next;
    }
    return false;
  }

  sort() {
    let result = null;
    let current = this.head;
    let next;

    while (current != null) {
      next = current.next;
      result = this.sortedInsert(result, current);
      current = next;
    }

    return result;
  }

  sortedInsert(sorted, newNode) {
    let temp = new Node();
    let current = temp;
    temp.next = sorted;

    while (current.next !== null && current.next.element < newNode.element) {
      current = current.next;
    }

    newNode.next = current.next;
    current.next = newNode;

    return temp.next;
  }
}

const LinkedList = new LinkedListClass();
LinkedList.insertAtTheHeadOfLinkedList(40);
LinkedList.insertAtEndOfLinkedList(20);
LinkedList.insertAtEndOfLinkedList(10);
LinkedList.insertAtEndOfLinkedList(30);
console.log("Linked List before deletion");
LinkedList.printLinkedList();
console.log("Linked list after deletion");
LinkedList.deleteLastNodeOfLinkedList();
LinkedList.printLinkedList();
console.log("Linked List Length:", LinkedList.linkedListLength());
console.log("Does 20 exist in Linked List:", LinkedList.existInLinkedList(10));
console.log(
  "Does 100 exist in Linked List:",
  LinkedList.existInLinkedList(100),
);
let sorted = LinkedList.sort();
console.log("Linked List after Sorting");
while (sorted) {
  console.log(sorted.data);
  sorted = sorted.next;
};

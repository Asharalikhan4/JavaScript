/*
Problem Statement: Given a Doubly Linked List, delete the last node of the Doubly Linked List.
*/

class Node {
    constructor(data, next = null, prev = null) {
        this.data = data;
        this.next = next;
        this.prev = prev;
    }
};

class DoublyLinkedListClass {
    constructor() {
        this.head = null;
        this.prev = null;
    };

    insertAtTheStartOfDoublyLinkedList(value) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }

        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
    };

    insertAtTheEndOfDoublyLinkedList(value) {
        let newNode = new Node(value);
        if(!this.head) {
            return newNode;
        }
        let temp = this.head;
        while (temp.next) {
            temp = temp.next;
        }
        temp.next = newNode;
        newNode.prev = temp;
        return this.head;
    };

    deleteTheLastNodeOfDoublyLinkedList() {
        if(this.head.next === null || this.head === null) {
            return null;
        }
        let temp = this.head;
        while(temp.next) {
            temp = temp.next;
        };
        temp.prev.next = null;
        return this.head;
    };

    printDoublyLinkedList() {
        let temp = this.head;
        while (temp !== null) {
            console.log(temp.data);
            temp = temp.next;
        };
    };
};

const DoublyLinkedList = new DoublyLinkedListClass();
DoublyLinkedList.insertAtTheStartOfDoublyLinkedList(10);
DoublyLinkedList.insertAtTheEndOfDoublyLinkedList(20);
DoublyLinkedList.insertAtTheEndOfDoublyLinkedList(30);
console.log("Doubly Linked List Before Deletion:");
DoublyLinkedList.printDoublyLinkedList();
console.log("Doubly Linked List After Deletion:");
DoublyLinkedList.deleteTheLastNodeOfDoublyLinkedList();
DoublyLinkedList.printDoublyLinkedList();
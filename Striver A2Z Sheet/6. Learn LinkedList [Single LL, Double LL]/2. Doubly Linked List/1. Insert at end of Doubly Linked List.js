/*
Problem Statement: Given a doubly linked list, and a value ‘k’, insert a node having value ‘k’ at the end of the doubly linked list.
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
    }

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
    }

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

    printDoublyLinkedList() {
        let temp = this.head;
        while (temp !== null) {
            console.log(temp.data);
            temp = temp.next;
        };
    }
};

const DoublyLinkedList = new DoublyLinkedListClass();
DoublyLinkedList.insertAtTheStartOfDoublyLinkedList(10);
DoublyLinkedList.insertAtTheEndOfDoublyLinkedList(20);
DoublyLinkedList.insertAtTheEndOfDoublyLinkedList(30);
DoublyLinkedList.printDoublyLinkedList();
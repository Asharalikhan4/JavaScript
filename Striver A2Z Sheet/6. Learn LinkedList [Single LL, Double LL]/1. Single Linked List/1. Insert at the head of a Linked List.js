/*
Problem Statement: Given a linked list and an integer value val, insert a new node with that value at the beginning (before the head) of the list and return the updated linked list.
*/

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    };
};

class LinkedListClass {
    constructor() {
        this.head = null;
    };

    insertAtTheHeadOfLinkedList(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
    };

    printLinkedList() {
        let temp = this.head;
        while(temp !== null) {
            console.log(temp.data);
            temp = temp.next;
        }
    }
};


const LinkedList = new LinkedListClass();
LinkedList.insertAtTheHeadOfLinkedList(10);
LinkedList.printLinkedList();

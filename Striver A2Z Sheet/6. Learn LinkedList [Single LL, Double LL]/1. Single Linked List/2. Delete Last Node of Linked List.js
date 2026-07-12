/*
Problem Statement: Given a Linked List, delete the tail of the list and print the updated list.
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

    insertAtEndOfLinkedList(value) {
        const newNode = new Node(value);
        let temp = this.head;
        while(temp.next !== null) {
            temp = temp.next;
        }
        temp.next = newNode;
        newNode.next = null;
    };

    printLinkedList() {
        let temp = this.head;
        while(temp !== null) {
            console.log(temp.data);
            temp = temp.next;
        }
    };

    deleteLastNodeOfLinkedList() {
        let temp = this.head;
        if(temp === null || temp.next === null) {
            return null;
        };
        while(temp.next.next !== null) {
            temp = temp.next;
        };
        temp.next = null;
    }
};

const LinkedList = new LinkedListClass();
LinkedList.insertAtTheHeadOfLinkedList(10);
LinkedList.insertAtEndOfLinkedList(20);
LinkedList.insertAtEndOfLinkedList(30);
LinkedList.insertAtEndOfLinkedList(40);
console.log("Linked List before deletion");
LinkedList.printLinkedList();
console.log("Linked list after deletion");
LinkedList.deleteLastNodeOfLinkedList();
LinkedList.printLinkedList();
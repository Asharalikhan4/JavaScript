/*
Problem Statement: Given the head of a linked list and an integer value, find out whether the integer is present in the linked list or not. Return true if it is present, or else return false.
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

    linkedListLength() {
        let temp = this.head, count = 0;
        while(temp !== null) {
            count++;
            temp = temp.next;
        }
        return count;
    }

    existInLinkedList(target) {
        let temp = this.head;
        while(temp !== null) {
            if(temp.data === target) {
                return true
            };
            temp = temp.next;
        }
        return false;
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
console.log("Linked List Length:", LinkedList.linkedListLength());
console.log("Does 20 exist in Linked List:", LinkedList.existInLinkedList(10));
console.log("Does 100 exist in Linked List:", LinkedList.existInLinkedList(100));
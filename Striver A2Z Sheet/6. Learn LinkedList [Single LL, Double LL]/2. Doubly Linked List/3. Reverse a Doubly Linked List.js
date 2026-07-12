/*
Problem Statement: Given a doubly linked list of size ‘N’ consisting of positive integers, your task is to reverse it and return the head of the modified doubly linked list.
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
        /*
        T.C - O(1)
        S.C - O(1)
        */
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
        /*
        T.C - O(N)
        S.C - O(1)
        */
        let newNode = new Node(value);
        if (!this.head) {
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
        /*
        T.C - O(N)
        S.C - O(1)
        */
        if (this.head.next === null || this.head === null) {
            return null;
        }
        let temp = this.head;
        while (temp.next) {
            temp = temp.next;
        };
        temp.prev.next = null;
        return this.head;
    };

    reverseDoublyLinkedListBruteForceApproach() {
        /*
        T.C - O(N)
        S.C - O(N)
        */
        let temp1 = this.head, temp2 = this.head;
        let valueArray = [];
        while (temp1) {
            valueArray.push(temp1.data);
            temp1 = temp1.next;
        };
        while (temp2) {
            temp2.data = valueArray.pop();
            temp2 = temp2.next;
        }
        return this.head;
    };

    reverseDoublyLinkedListOptimisedApproach() {
        /*
        T.C - O(N)
        S.C - O(1)
        */
        let temp = null, current = this.head;
        while (current !== null) {
            temp = current.prev;
            current.prev = current.next;
            current.next = temp;
            current = current.prev;
        };

        if (temp !== null) {
            this.head = temp.prev;
        }

        return this.head;
    }

    printDoublyLinkedList() {
        /*
        T.C - O(N)
        S.C - O(1)
        */
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
console.log("Reversed Doubly Linked List:");
DoublyLinkedList.reverseDoublyLinkedListBruteForceApproach();
DoublyLinkedList.printDoublyLinkedList();
console.log("Reversing Doubly Linked List again Using Optimised Approach:");
DoublyLinkedList.reverseDoublyLinkedListOptimisedApproach();
DoublyLinkedList.printDoublyLinkedList();
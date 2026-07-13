/*
Problem Statement: Given the head of a linked list of integers, determine the middle node of the linked list. However, if the linked list has an even number of nodes, return the second middle node.
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
        while (temp !== null) {
            console.log(temp.data);
            temp = temp.next;
        }
    }

    middleElementInLinkedListBruteForceApproach() {
        let temp = this.head, length = 0;
        while(temp) {
            length++;
            temp = temp.next;
        }
        let mid = Math.ceil(length/2);
        temp = this.head;
        while(temp !== null) {
            mid = mid - 1;
            if(mid == 0) {
                break;
            }
            temp = temp.next;
        }
        return temp.data;
    };

    middleElementInLinkedListOptimisedApproach() {
        let slow = this.head, fast = this.head;
        while(fast && fast.next && slow) {
            slow = slow.next;
            fast = fast.next.next;
        };
        return slow.data;
    };
};


const LinkedList = new LinkedListClass();
LinkedList.insertAtTheHeadOfLinkedList(30);
LinkedList.insertAtTheHeadOfLinkedList(20);
LinkedList.insertAtTheHeadOfLinkedList(10);
LinkedList.printLinkedList();
console.log("Middle Element in Linked List Using Brute Force Approach:", LinkedList.middleElementInLinkedListBruteForceApproach())
console.log("Middle Element in Linked List Using Optimized Apporach:", LinkedList.middleElementInLinkedListOptimisedApproach())
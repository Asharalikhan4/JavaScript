class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    printLinkedList() {
        // Print the linked list.
        let current = this.head;
        while (current !== null) {
            console.log(current.value);
            current = current.next;
        }
    }

    addElement(value) {
        // Add Element to the end of the linked list.
        const node = new Node(value);
        if (this.head === null) {
            this.head = node;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = node;
        }
    }

    lengthOfLinkedList() {
        // Return the length of the linked list.
        let current = this.head;
        let count = 0;
        while (current !== null) {
            count++;
            current = current.next;
        }
        return count;
    }

    searchElement(value) {
        // Search for the element in the linked list.
        let current = this.head;
        while (current !== null) {
            if (current.value === value) {
                return true;
            }
            current = current.next;
        }
        return false;
    }

    convertArrayToLinkedList(arr) {
        // Convert array into linked list
        for (let i = 0; i < arr.length; i++) {
            this.addElement(arr[i]);
        }
    }

    deleteHeadOfLinkedList() {
        // Delete the first element/Head of linked list.
        if (this.head === null) {
            return null;
        }
        this.head = this.head.next;
    }

    deleteTailOfLinkedList() {
        // Delete the last element/Tail of linked list.
        if (this.head === null || this.head.next === null) {
            return null;
        }
        let current = this.head;
        while (current.next.next !== null) {
            current = current.next;
        }
        current.next = null;
    }

    deleteTheKthElement(value) {
        // Delete the element at the given index.
        // Using 1 based index ( first element index will be 1 )
        if (this.head === null) {
            return null;
        }
        if(value === 1){
            this.head = this.head.next;
        }
        let temp = this.head;
        for(let i = 1; i < value - 1; i++){
            temp = temp.next;
        }
        temp.next = temp.next.next;
    }

    insertAtTheHead(value){
        // Insert value at the Head/Start of the linked list.
        const node = new Node(value);
        if(this.head === null){
            head = node;
        }
        node.next = this.head.next;
        this.head = node;
    }

    inserAtTheTailofLinkedList(value){
        // Insert value the the end/Tail of the linked list.
        if (this.head === null) {
            return new Node(value);
        }
        const node = new Node(value);
        let temp = this.head;
        while(temp.next != null){
            temp = temp.next;
        }
        temp.next = node;
        node.next = null;
    }

    insertBeforeTheKthElementOfLinkedList(value, nodePosition){
        // Insert the element before the given position in linked list.
        if(this.head === null){
            return new Node(value);
        }
        const node = new Node(value);
        if(nodePosition == 1){
            node.next = this.head;
            this.head = node;
            return this.head;
        }
        let temp = this.head;
        for(let i = 1; i < nodePosition - 1; i++){
            temp = temp.next;
        }
        node.next = temp.next;
        temp.next = node;
    }
}

const list = new LinkedList();

list.addElement(1);
list.addElement(2);
list.addElement(3);
list.addElement(4);

console.log("Length of the linked list is : ", list.lengthOfLinkedList());

console.log("Is 3 present in the linked list : ", list.searchElement(3));

list.convertArrayToLinkedList([5, 6, 7, 8, 9]);

list.deleteHeadOfLinkedList();

list.deleteTailOfLinkedList();

list.deleteTheKthElement(3);

list.insertAtTheHead(1);

list.inserAtTheTailofLinkedList(19);

list.insertBeforeTheKthElementOfLinkedList(100, 1);

list.printLinkedList();
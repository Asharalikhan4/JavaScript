class Node {
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
    }

    addElement(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
        } else {
            let temp = this.head;
            while (temp.next != null) {
                temp = temp.next;
            }
            temp.next = node;
            node.prev = temp;
            node.next = null;
        }
        return this.head;
    }

    printDoublyLinkedList() {
        let temp = this.head;
        while (temp != null) {
            console.log(temp.value);
            temp = temp.next;
        }
    }

    convertArrayToDoublyLinkedList(arr) {
        for (let i = 0; i < arr.length; i++) {
            this.addElement(arr[i]);
        }
    }

    deleteHead() {
        if (!this.head || !this.head.next) return null;
        this.head = this.head.next;
        this.head.prev = null;
    }

}

const linkedList = new DoublyLinkedList();

linkedList.addElement(1);
linkedList.addElement(2);
linkedList.addElement(3);
linkedList.addElement(4);

linkedList.convertArrayToDoublyLinkedList([5, 6, 7, 8, 9]);

linkedList.deleteHead();

linkedList.printDoublyLinkedList();

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    isEmpty(){
        // Check whether the linked is empty or not.
        return this.size === 0;
    }

    getSize(){
        // Size of the linked list.
        return this.size;
    }

    insertAtBegining(value){
        // Add a node in the start of the linked list.
        const node = new Node(value);
        // When the list is empty.
        if(this.isEmpty()){
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }

    deleteNode(value){
        let currHead = this.head;
        for(let i = 1; i < value - 1; i++){
            currHead = currHead.next;
        }
        currHead.next = currHead.next.next;
        this.size--;
    }

    print(){
        // Print the Linked List
        if(list.isEmpty()){
            console.log("List is Empty");
        } else {
            let currHead = this.head;
            while(currHead != null){
                console.log(currHead.value);
                currHead = currHead.next;
            }
        }
    }

    insertAtEnd(value){
        // Add a node at the end of the linked list.
        const node = new Node(value);
        if(list.isEmpty()){
            node.next = this.head;
            this.head = node;
        } else {
            let prev = this.head;
            while(prev.next != null){
                prev = prev.next;
            }
            prev.next = node;
        }
        this.size++;
    }

    searchElement(value){
        let currHead = this.head;
        let exist = false;
        while(currHead){
            if(currHead.value === value){
                exist = true;
            }
            currHead = currHead.next;
        }
        exist ? console.log("Element exist in Linked List") : console.log("Element does not exist in Linked List");
    }
}

const list = new LinkedList();
console.log("Is list is empty?", list.isEmpty());
list.insertAtBegining(30);
list.insertAtBegining(20);
list.insertAtBegining(10);
list.insertAtEnd(40);
list.insertAtEnd(50);
console.log("Linked List:");
list.print();
list.deleteNode(2);
console.log("Linked List after deletion:");
list.print();
console.log("Size of the list:", list.getSize());
list.searchElement(10);

// https://practice.geeksforgeeks.org/problems/linked-list-insertion-1587115620/1?page=1&difficulty[]=-2&difficulty[]=-1&category[]=Linked List&sortBy=submissions

class LinkedList{
    insertAtBegining(head, newData){
        const newNode = new Node(newData);
        if(!head){
            head = newNode;
            return head;
        }
        newNode.next = head;
        head = newNode;
        return head;
    }

    insertAtEnd(head, newData){
        const newNode = new Node(newData);
        if (!head) {
            return newNode;
        }

        let current = head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
        return head;
    }
}
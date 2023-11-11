// https://practice.geeksforgeeks.org/problems/delete-a-node-in-single-linked-list/1?page=1&category%5B%5D=Linked%20List&sortBy=submissions

class Solution {
    deleteNode(head, x) {
        //code here
        let currHead = head;
        for (let i = 1; i < x - 1; i++) {
            currHead = currHead.next;
        }
        currHead.next = currHead.next.next;
        return head;
    }
}
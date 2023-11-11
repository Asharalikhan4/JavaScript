// https://practice.geeksforgeeks.org/problems/count-nodes-of-linked-list/1?page=1&difficulty%5B%5D=-2&difficulty%5B%5D=-1&category%5B%5D=Linked%20List&sortBy=submissions

class Solution {
    //Function to count nodes of a linked list.
    getCount(head)
    {
        //your code here
        let count = 0;
        while(head != null){
            count++;
        }
        return count;
    }
}
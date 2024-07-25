//{ Driver Code Starts
// Initial Template for javascript
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString =
        inputString.trim().split('\n').map(string => { return string.trim(); });

    main();
});

function readLine() { return inputString[currentLine++]; }

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function printlist(head) {
    let current = head;
    let s = '';
    while (current !== null) {
        s += current.data + " ";
        current = current.next;
    }
    console.log(s);
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {

        let input_ar1 = readLine().split(' ').map(x => parseInt(x));
        let n = input_ar1.length;
        let head = new Node(input_ar1[0]);
        let tail = head;
        for (let i = 1; i < n; i++) {
            tail.next = new Node(input_ar1[i]);
            tail = tail.next;
        }
        let obj = new Solution();
        head = obj.reverseList(head);
        printlist(head);
    }
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {Node} head
 * @returns {Node}
 */

/*
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
*/

class Stack{
    constructor(){
        this.items=[];
    }
    push(data){
        this.items.push(data);
    }
    pop(){
        return this.items.pop();
    }
}

class Solution {
    // Function to reverse a linked list.
    reverseList(head) {
        if(head==undefined || head.next==undefined){
            return head;
        }
        let temp=head;
        let news=new Stack();
        while(temp){
            news.push(temp.data);
            temp=temp.next;
        }
        temp=head;
        while(temp){
            temp.data=news.pop();
            temp=temp.next;
        }
        return head;
    }
}
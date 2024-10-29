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
        let num1 = new Node(input_ar1[0]);
        let tail1 = num1;
        for (let i = 1; i < input_ar1.length; i++) {
            tail1.next = new Node(input_ar1[i]);
            tail1 = tail1.next;
        }

        let input_ar2 = readLine().split(' ').map(x => parseInt(x));
        let num2 = new Node(input_ar2[0]);
        let tail2 = num2;
        for (let i = 1; i < input_ar2.length; i++) {
            tail2.next = new Node(input_ar2[i]);
            tail2 = tail2.next;
        }

        let obj = new Solution();
        let res = obj.addTwoLists(num1, num2);
        printlist(res);
        console.log("~");
    }
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {Node} first
 * @param {Node} second
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

class Solution {
    reverse(head){
        let prev=null;
        let temp=head;
        while(temp){
            let front=temp.next;
            temp.next=prev;
            prev=temp;
            temp=front;
        }
        return prev;
    }
    // Function to add two numbers represented by linked list.
    addTwoLists(num1, num2) {
        num1=this.reverse(num1);
        num2=this.reverse(num2);
        let dumN=new Node(-1);
        let curr=dumN;
        let carry=0;
        while(num1!=null || num2!=null){
            let sum=carry;
            if(num1) sum+=num1.data;
            if(num2) sum+=num2.data;
            let newN=new Node(sum%10);
            carry=Math.floor(sum/10);
            curr.next=newN;
            curr=curr.next;
            if(num1) num1=num1.next;
            if(num2) num2=num2.next;
        }
        if(carry){
            let newN=new Node(carry);
            curr.next=newN;
        }
        return this.reverse(dumN.next);
    }
}
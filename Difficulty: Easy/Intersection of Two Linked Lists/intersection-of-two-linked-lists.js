//{ Driver Code Starts
// Initial Template for JavaScript

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', () => {
    inputString = inputString.trim().split('\n').map(string => string.trim());
    main();
});

function readLine() { return inputString[currentLine++]; }

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function printList(head) {
    let current = head;
    let result = '';
    while (current !== null) {
        result += current.data + " ";
        current = current.next;
    }
    console.log(result.trim());
}

function main() {
    let t = parseInt(readLine()); // Read the number of test cases
    for (let i = 0; i < t; i++) {
        let input_ar1 = readLine().split(' ').map(Number);
        let head1 = new Node(input_ar1[0]);
        let tail1 = head1;

        // Construct the first linked list
        for (let i = 1; i < input_ar1.length; i++) {
            tail1.next = new Node(input_ar1[i]);
            tail1 = tail1.next;
        }

        let input_ar2 = readLine().split(' ').map(Number);
        let head2 = new Node(input_ar2[0]);
        let tail2 = head2;

        // Construct the second linked list
        for (let i = 1; i < input_ar2.length; i++) {
            tail2.next = new Node(input_ar2[i]);
            tail2 = tail2.next;
        }

        let obj = new Solution();
        let res = obj.findIntersection(head1, head2);
        printList(res); // Print the resulting intersection linked list
    }
}

// } Driver Code Ends


// User function Template for javascript

/**
 * @param {Node} head1
 * @param {Node} head2
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
    // Function to find the intersection of two linked lists.
    findIntersection(head1, head2) {
        if(head1==null && head2==null){
            return null;
        }
        if(head1==null){
            return head2;
        }
        if(head2==null){
            return head1;
        }
        let temp1=head1;
        let temp2=head2;
        let map=new Map();
        while(temp2){
            map.set(temp2.data,1);
            temp2=temp2.next;
        }
        let head;
        let temp=head;
        while(temp1){
            if(map.has(temp1.data)){
                if(!head){
                    temp=temp1;
                    head=temp;   
                }else{
                    temp.next=temp1;
                    temp=temp.next;
                }
            }
            temp1=temp1.next;
        }
        if(!temp) return null;
        temp.next=(temp.next)?null:temp.next;
        return head;
    }
}

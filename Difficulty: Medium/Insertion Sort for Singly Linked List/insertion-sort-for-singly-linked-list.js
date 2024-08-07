//{ Driver Code Starts
// Initial Template for javascript

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => { inputString += inputStdin; });

process.stdin.on("end", (_) => {
    inputString =
        inputString.trim().split("\n").map((string) => { return string.trim(); });

    main();
});

function readLine() { return inputString[currentLine++]; }

class Node {
    constructor(x) {
        this.data = x;
        this.next = null;
    }
}

function printList(head) {
    let temp = head;
    let s = "";
    while (temp !== null) {
        s = s + temp.data + " ";
        temp = temp.next;
    }
    console.log(s);
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let input_ar1 = readLine().split(" ").map((x) => parseInt(x));
        let head = new Node(input_ar1[0]);
        let tail = head;
        for (let i = 1; i < input_ar1.length; i++) {
            tail.next = new Node(input_ar1[i]);
            tail = tail.next;
        }

        let obj = new Solution();

        head = obj.insertionSort(head);
        printList(head);
    }
}
// } Driver Code Ends


// User function Template for javascript
/**
 * @param {Node} head
 * @returns {Node}
 */

class Solution {
    // Function to insertion sort a linked list.
    insertionSort(head) {
        let temp=head;
        let arr=[];
        while(temp){
            arr.push(temp.data);
            temp=temp.next;
        }
        arr=arr.sort((a,b)=>a-b);
        temp=head;
        let i=0;
        while(temp){
            temp.data=arr[i];
            i++;
            temp=temp.next;
        }
        return head;
    }
}
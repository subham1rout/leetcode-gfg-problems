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
    let s = "";
    while (head) {
        s += head.data;
        s += " ";
        head = head.next;
    }
    console.log(s);
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {

        let arr = readLine().trim().split(" ").map((x) => parseInt(x));
        let N = arr.length;
        let list = new Node(arr[0]);
        let tail = list;
        for (let j = 1; j < N; j++) {
            tail.next = new Node(arr[j]);
            tail = tail.next;
        }

        let obj = new Solution();
        let res = obj.divide(list);
        printList(res);
    }
}

// } Driver Code Ends


// User function Template for javascript

/*LINKED LIST NODE
class Node {
  constructor(x){
    this.data = x;
    this.next = null;
  }
}
*/

/**
 * @param {Node} head
 * @return {Node}
 */

class Solution {
    divide(head) {
        if(head==null || head.next==null){
            return head;
        }
        let temp = head;
        let even = [];
        let odd = [];
        while (temp) {
            if (temp.data % 2 == 0) {
                even.push(temp.data);
            } else {
                odd.push(temp.data);
            }
            temp = temp.next;
        }
        let newhead = new Node(even[0]);
        temp = newhead;
        for (let i = 1; i < even.length; i++) {
            let newNode = new Node(even[i]);
            temp.next = newNode;
            temp = temp.next;
        }
        for (let i = 0; i < odd.length; i++) {
            let newNode = new Node(odd[i]);
            temp.next = newNode;
            temp = temp.next;
        }
        return newhead;
    }
}

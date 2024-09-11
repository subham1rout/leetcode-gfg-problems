//{ Driver Code Starts
// Initial Template for javascript

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => string.trim());
    main();
});

function readLine() { return inputString[currentLine++]; }

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
    for (let i = 0; i < t; i++) {
        let arr = readLine().split(' ').map(x => parseInt(x));
        let head = new Node(arr[0]);
        let tail = head;
        for (let j = 1; j < arr.length; j++) {
            tail.next = new Node(arr[j]);
            tail = tail.next;
        }
        let obj = new Solution();
        let newHead = obj.deleteMid(head);
        printlist(newHead);
    }
}

// } Driver Code Ends


// User function Template for javascript

/**
 * @param {Node} node
 * @return {Node} node
 */

/*
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

let head;
This is method only submission.
You only need to complete the below method.
*/

class Solution {
    deleteMid(node) {
        let temp=node;
        let count=0;
        while(temp){
            count++;
            temp=temp.next;
        }
        if(count==1) return null;
        let mid=Math.floor(count/2);
        temp=node;
        while(mid!=1){
            mid--;
            temp=temp.next;
        }
        temp.next=temp.next.next;
        return node;
    }
}
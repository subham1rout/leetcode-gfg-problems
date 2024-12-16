//{ Driver Code Starts
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', () => {
    inputString = inputString.trim().split('\n').map(str => str.trim());
    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    let t = parseInt(readLine().trim());
    for (let i = 0; i < t; i++) {
        let arr = readLine().trim().split(" ").map(x => parseInt(x));
        let stack = new MyStack();
        let result = '';
        let j = 0;

        while (j < arr.length) {
            let QueryType = arr[j++];
            if (QueryType === 1) {
                stack.push(arr[j++]);
            } else if (QueryType === 2) {
                result += stack.pop() + ' ';
            }
        }

        console.log(result.trim());
        console.log("~");
    }
}

class MyStack {
    constructor() {
        this.arr = new Array(1000);
        this.top = -1;
    }

    push(x) {}

    pop() {}
}

// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number} x
 */
// Function to push an integer into the stack.
MyStack.prototype.push =
    function(x) {
        this.top++;
        this.arr[this.top]=x;
}

    /**
     * @returns {number}
     */
    // Function to remove an item from top of the stack.
    MyStack.prototype.pop = function() {
        if(this.top==-1) return -1;
        let popEl=this.arr[this.top];
        this.top--;
        return popEl;
}

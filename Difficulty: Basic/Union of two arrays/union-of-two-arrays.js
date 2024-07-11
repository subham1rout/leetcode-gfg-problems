//{ Driver Code Starts
// Initial Template for javascript

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

function main() {
    let t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        let a = readLine().split(' ').map(x => parseInt(x, 10));
        let b = readLine().split(' ').map(x => parseInt(x, 10));
        let obj = new Solution();

        let ans = obj.doUnion(a, b);
        console.log(ans);
    }
}

// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @returns {number}
 */
class Solution {
    // Function to return the count of number of elements in the union of two arrays.
    doUnion(arr1, arr2) {
        let set=new Set();
        for(let i=0;i<arr1.length;i++){
            set.add(arr1[i]);
        }
        for(let i=0;i<arr2.length;i++){
            set.add(arr2[i]);
        }
        return set.size;
    }
}

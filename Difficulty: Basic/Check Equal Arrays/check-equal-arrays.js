//{ Driver Code Starts
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

    const solution = new Solution();

    while (t-- > 0) {
        let arr1 = readLine().split(' ').map(Number);
        let arr2 = readLine().split(' ').map(Number);

        // Call the function to check if arrays are equal
        console.log(solution.check(arr1, arr2) ? "true" : "false");
    }
}

// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @returns {boolean}
 */
class Solution {
    // Function to check if two arrays are equal or not.
    check(arr1, arr2) {
        for(let j=0;j<arr2.length;j++){
            if(!arr1.includes(arr2[j])){
                return false;
            }
        }
        for(let j=0;j<arr1.length;j++){
            if(!arr2.includes(arr1[j])){
                return false;
            }
        }
        return true;
    }
}

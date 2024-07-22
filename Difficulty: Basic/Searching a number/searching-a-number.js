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
    const t = parseInt(readLine().trim());
    for (let i = 0; i < t; i++) {
        const k = parseInt(readLine().trim());
        const arr = readLine().trim().split(' ').map(x => parseInt(x));
        const obj = new Solution();     // Assuming Solution is defined elsewhere
        const res = obj.search(k, arr); // Assuming search method is defined in Solution
        console.log(res);
    }
}

// } Driver Code Ends



class Solution {
    /**
     * @param number k
     * @param number[] arr
     * @returns number
     */
    search(k, arr) {
        for(let i=0;i<arr.length;i++){
            if(arr[i]==k){
                return i+1;
            }
        }
        return -1;
    }
}

//{ Driver Code Starts
//Initial Template for javascript

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

/* Function to print an array */
function printArray(arr, size)
{
    let i;
    let s='';
    for (i=0; i < size; i++) {
        s += arr[i] + " ";
    }
    console.log(s);
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let input_ar0 = readLine().split(' ').map(x=>parseInt(x));
        let n = input_ar0[0];
        let arr = new Array(n);
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<n;i++)
            arr[i] = input_ar1[i];
        let obj = new Solution();
        obj.sort012(arr, n);
        printArray(arr, arr.length);
    }
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} N
 * @returns {number[]}
*/

class Solution {
    
    sort012(arr, N)
    {
        let countzero = 0;
        let countone = 0;
        let counttwo = 0;
        for (let i = 0; i < N; i++) {
            if (arr[i] == 0) countzero++;
            else if (arr[i] == 1) countone++;
            else counttwo++;
        }
        for (let i = 0; i < countzero; i++) {
            arr[i] = 0;
        }
        for (let i = countzero; i < countzero + countone; i++) {
            arr[i] = 1;
        }
        for (let i = countzero + countone; i < countzero + countone + counttwo; i++) {
            arr[i] = 2;
        }
    }
}
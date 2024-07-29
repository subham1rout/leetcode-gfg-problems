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

function printArray(res, size) {
    for(let i=0;i<size;i++){
        console.log(res[i]);
    }
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let n = parseInt(readLine());
        let arr = new Array(n);
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<n;i++){
            arr[i] = input_ar1[i];
        }
        let obj = new Solution();
        let res = obj.maxArea(arr, n);
        console.log(res);
    }
}

// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {number} 
 */
 
class Solution {
    maxArea(arr, n){
        let maxA=0;
        let left=0;
        let right=n-1;
        while(left<right){
            let min=(arr[left]>arr[right])?arr[right]:arr[left];
            let tempA=min*(right-left);
            if(tempA>maxA){
                maxA=tempA;
            }
            if(arr[left]<=arr[right]){
                left++;
            }else{
                right--;
            }
        }
        return maxA;
    }
}
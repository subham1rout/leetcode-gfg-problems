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

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let n = parseInt(readLine());
        let arr = new Array(n);
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<n;i++)
            arr[i] = input_ar1[i];
        let obj = new Solution();
        console.log(obj.majorityElement(arr, n));
        
    }
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[]} a
 * @param {number} size
 * @returns {number}
*/

class Solution {
    
    majorityElement(a, size)
    {
        let el;
        let count=0;
        for(let i=0;i<size;i++){
            if(count==0){
                el=a[i];
                count=1;
            }else if(el==a[i]) count++;
            else count--;
        }
        let count1=0;
        for(let i=0;i<size;i++){
            if(el==a[i]) count1++;
        }
        if(count1>Math.floor(size/2)){
            return el;
        }
        return -1;
    }
}
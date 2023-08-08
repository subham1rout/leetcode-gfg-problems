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

function printList(res,n){
    let s="";
    for(let i=0;i<n;i++){
        s+=res[i];
        s+=" ";
    }
    console.log(s);
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
        let d = parseInt(readLine());
        let obj = new Solution();
        obj.leftRotate(arr, n, d);
        printList(arr,arr.length);
        
    }
}// } Driver Code Ends





// } Driver Code Ends


//User function Template for javascript


/**
 * @param {number[]} arr
 * @param {number} n
 * @param {number} d
 * @returns {void}
*/

class Solution{
    leftRotate(arr,n,d){
        let temp = [];
        for (let i = 0; i < d; i++) {
            temp.push(arr[i]);
        }
        for (let i = d; i < n; i++) {
            arr[i - d] = arr[i];
        }
        for (let i = 0; i < temp.length; i++) {
            arr[n - d + i] = temp[i];
        }
        return arr;
    }
}

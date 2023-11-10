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
        let n = parseInt(readLine());
        let a = new Array(n);
        let input_ar = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<n;i++)
            a[i] = input_ar[i];
        let obj = new Solution();
        let res = obj.duplicates(a, n);
        if(res === 'undefined') return;
        if(res.length===0){
            console.log(-1);
        }
        else{
            printArray(res, res.length);
        }
    }
}// } Driver Code Ends
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[]} a
 * @param {number} n
 * @returns {number[]}
*/

class Solution {
    
    duplicates(a, n)
    {
        let map=new Map();
        for(let i=0;i<n;i++){
            let value=map.get(a[i]);
            if(value==undefined){
                map.set(a[i],1);
            }else{
                map.set(a[i],value+1);
            }
        }
        let res=[];
        for(let [key,value] of map){
            if(value>1){
                res.push(key);
            }
        }
        return res.sort((a,b)=>a-b);
    }
}
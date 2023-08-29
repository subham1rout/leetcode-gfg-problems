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
        let input_ar0 = readLine().split(' ').map(x=>parseInt(x));
        let n = input_ar0[0];
        let a = new Array(n);
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<n;i++)
            a[i] = input_ar1[i];
        let obj = new Solution();
        let res = obj.search(a,n);
        console.log(res);
    }
}
// } Driver Code Ends


//User function Template for javascript


/**
 * @param {number[]} a
 * @param {number} N
 * @returns {number}
*/

class Solution {
    
    search(a,N)
    {
        let map=new Map();
        for(let i=0;i<N;i++){
            let value=map.get(a[i]);
            if(!value){
                map.set(a[i],1);
            }else{
                map.set(a[i],value+1);
            }
        }
        for(const [key,value] of map){
            if(value==1) return key;
        }
    }
}
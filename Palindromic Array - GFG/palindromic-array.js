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
        let arr = readLine().trim().split(" ").map((x) => parseInt(x));
        let obj = new Solution();
        let res=obj.PalinArray(arr,n);
        console.log(res);
    
    }
}

// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @return {number}
*/

class Solution {
    
    reverse(num){
        let revno=0;
        while(num>0){
            let rem=num%10;
            num=Math.floor(num/10);
            revno=revno*10+rem;
        }
        return revno;
    }
    
    PalinArray(arr,n){
        for(let i=0;i<n;i++){
             let num=this.reverse(arr[i]);
             if(arr[i]!==num){
                 return 0;
             }
        }
        return 1;
    }
}
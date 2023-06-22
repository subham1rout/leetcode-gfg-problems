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
        let obj = new Solution();
        let res = obj.reversedBits(n);
        console.log(res);
    }
}

// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number} X
 * @return {number}
*/

class Solution {
    reversedBits(X){
        let string='';
        let decimal=0;
        let n=X;
        while(n>0){
            let r=n%2;
            string+=r;
            n=Math.floor(n/2);
        }
        let templength=32-string.length;
        for(let i=0;i<templength;i++){
            string+='0';
        }
        for(let i=0;i<string.length;i++){
            let index=string.length-i-1;
            decimal=decimal+parseInt(string[i])*Math.pow(2,index);
        }
        return decimal;
    }
}

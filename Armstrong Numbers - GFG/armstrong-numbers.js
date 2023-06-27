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
        let obj = new Solution();
        let res = obj.armstrongNumber(n);
        console.log(res);
        
    }
}// } Driver Code Ends




// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number} n
 * @returns {string}
*/

class Solution{
    armstrongNumber(n){
        let x=n;
        let arr=[];
        let length=0;
        while(x>0){
            arr.push(x%10);
            length++;
            x=Math.floor(x/10);
        }
        let newno=0;
        for(let i of arr){
            newno+=Math.pow(i,length);
        }
        if(n==newno) return "Yes";
        else return "No";
    }
}

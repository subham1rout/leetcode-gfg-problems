//{ Driver Code Starts
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
    if(res.length === 0){
        console.log("Not Found");
    }
    else{
        let s="";
        for(let i=0;i<n;i++){
            s+=res[i];
            s+=" ";
        }
        console.log(s);
    }
}


function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        let n = input_ar1[0];
        let arr = new Array(n);
        input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<n;i++){
            arr[i] = input_ar1[i];
        }
        let obj = new Solution();
        let res = obj.valueEqualToIndex(arr, n);
        printList(res,res.length);
        
    }
}// } Driver Code Ends
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {number}
*/

class Solution{
    valueEqualToIndex(arr,n){
        let returnarr=[];
        for(let i=0;i<n;i++){
            if(i+1==arr[i]){
                returnarr.push(i+1);
            }
        }
        return returnarr;
    }
}


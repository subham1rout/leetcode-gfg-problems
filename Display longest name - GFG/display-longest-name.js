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
        let names = [];
        for(let j = 0;j<n;j++){
            let name = readLine().trim();
            names.push(name);
        }
        let obj = new Solution();
        let res = obj.longest(names,n);
        console.log(res);
        
    }
}

// } Driver Code Ends


//User function Template for javascript

/**
 * @param {string[]} names
 * @param {number} n
 * @return {number}
*/

class Solution {

    longest(names,n){
        let longestname=names[0];
        for(let i=0;i<n;i++){
            if(names[i].length>longestname.length){
                longestname=names[i];
            }
        }
        return longestname;
    }
}
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
        let [S1,S2] = readLine().trim().split(" ");
        let obj = new Solution();
        let res = obj.merge(S1, S2);
        console.log(res.toString());
    }
}


// } Driver Code Ends


//User function Template for javascript
/**
 * @param {string} S1
 * @param {string} S2
 * @returns {string}
*/

class Solution {
    //Function to merge two strings.
    merge(S1, S2)
    {
        let c1=S1.split('');
        let c2=S2.split('');
        let i=0;
        let j=0;
        let string='';
        while(i<c1.length && j<c2.length){
            string+=c1[i];
            string+=c2[j];
            i++;
            j++;
        }
        while(i<c1.length){
            string+=c1[i];
            i++;
        }
        while(j<c2.length){
            string+=c2[j];
            j++;
        }
        return string;
    }
}
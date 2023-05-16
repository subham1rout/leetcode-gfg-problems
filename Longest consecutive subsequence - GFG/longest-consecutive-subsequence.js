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
    for(let i=0;i<t;i++)
    {
        let input_line = readLine().split(' ');
        let n = parseInt(input_line[0]);
        
        let arr = new Array(n);
        
        input_line = readLine().split(' ');
        for(let i=0;i<n;i++)
        {
            arr[i] = parseInt(input_line[i]);
        }
        
        let obj = new Solution();
        
        let ans = obj.findLongestConseqSubseq(arr, n)
        if(ans==-0)
        {
            ans=0;
        }
        console.log(ans);
    }
}

// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} N
 * @returns {number}
*/

class Solution {
    //Function to return length of longest subsequence of consecutive integers.
    findLongestConseqSubseq(arr, N){
        arr=arr.sort((a,b)=>a-b);
        let max=1;
        let count=0;
        let smaller=Number.MIN_SAFE_INTEGER;
        for(let i=0;i<N;i++){
            if(arr[i]-1 ==smaller){
                count++;
                smaller=arr[i];
                if(count>max){
                    max=count;
                }
            }else if(arr[i]!==smaller){
                count=1;
                smaller=arr[i];
            }
        }
        return max;
    }
}
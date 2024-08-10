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
        let arr = new Array(n);
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<n;i++)
            arr[i] = input_ar1[i];
        let obj = new Solution();
        console.log(obj.trappingWater(arr, n));
        
    }
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {number}
*/

class Solution {
    // Function to find the trapped water between the blocks.
    trappingWater(arr, n)
    {
        let maxLArr=[];
        let maxRArr=new Array(n).fill(0);
        let maxL=0;
        maxLArr.push(maxL)
        for(let i=1;i<n;i++){
            if(maxL<arr[i-1]){
                maxL=arr[i-1];
            }
            maxLArr.push(maxL);
        }
        let maxR=0;
        maxRArr[n-1]=maxR;
        for(let i=n-2;i>=0;i--){
            if(maxR<arr[i+1]){
                maxR=arr[i+1];
            }
            maxRArr[i]=maxR;
        }
        let min=[];
        for(let i=0;i<n;i++){
            if(maxLArr[i]<=maxRArr[i]){
                min.push(maxLArr[i]);
            }else{
                min.push(maxRArr[i]);
            }
        }
        let sum=0;
        for(let i=0;i<n;i++){
            let temp=min[i]-arr[i];
            if(temp>0){
                sum+=temp;
            }
        }
        return sum;
    }
}
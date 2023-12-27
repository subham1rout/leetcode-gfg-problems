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
        let m = input_ar0[1];
        let arr1 = new Array(n);
        let arr2 = new Array(m);
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<n;i++)
            arr1[i] = input_ar1[i];
        let input_ar2 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<m;i++)
            arr2[i] = input_ar2[i];
        let obj = new Solution();
        obj.merge(arr1, arr2, n, m);
        let i;
        let s='';
        for (i=0; i < n; i++) {
            s += arr1[i] + " ";
        }
        for (i=0; i < m; i++) {
            s += arr2[i] + " ";
        }
        console.log(s);
    }
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} n
 * @param {number} m
*/

class Solution {
    //Function to merge the arrays.
    merge(arr1, arr2, n, m)
    {
        let i=0;
        let j=0;
        let index=0;
        let mrgArr=[];
        while(i<n && j<m){
            if(arr1[i]<=arr2[j]){
                mrgArr.push(arr1[i]);
                i++;
                index++;
            }else{
                mrgArr.push(arr2[j]);
                j++;
                index++;
            }
        }
        while(i<n){
            mrgArr.push(arr1[i++]);
            index++;
        }
        while(j<m){
            mrgArr.push(arr2[j++]);
            index++;
        }
        for(let k=0;k<n+m;k++){
            if(k<n){
                arr1[k]=mrgArr[k];
            }else{
                arr2[k-n]=mrgArr[k];
            }
        }
    }
}
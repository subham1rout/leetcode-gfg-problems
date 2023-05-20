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
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        let n = input_ar1[0];
        let m = input_ar1[1];
        let k = input_ar1[2];
        let arr = [];
        let p=0;
        input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<n;i++){
            let temp = [];
            for(let j=0;j<m;j++){
                temp.push(input_ar1[p++]);
            }
            arr.push(temp);
        }
        let obj = new Solution();
        let res = obj.findK(arr, n, m, k);
        console.log(res);
        
    }
}// } Driver Code Ends

// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[][]} a
 * @param {number} n
 * @param {number} m
 * @param {number} k
 * @returns {number}
*/

class Solution{
    findK(a,n,m,k){
        let ans=[];
        let top=0;
        let bottom=n-1;
        let left=0;
        let right=m-1;
        while(top<=bottom && left<=right){
            for(let i=left;i<=right;i++){
                ans.push(a[top][i]);
            }
            top++;
            for(let i=top;i<=bottom;i++){
                ans.push(a[i][right]);
            }
            right--;
            if(top<=bottom){
                 for(let i=right;i>=left;i--){
                    ans.push(a[bottom][i]);
                }   
                bottom--;
            }
            if(left<=right){
                for(let i=bottom;i>=top;i--){
                    ans.push(a[i][left]);
                }
                left++;   
            }
        }
        return ans[k-1];
    }
}


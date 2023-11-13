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
        let arr = new Array(n);
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<n;i++){
            arr[i] = input_ar1[i];
        }
        let obj = new Solution();
        let res = obj.Solve(n,arr);
        printList(res,res.length);
        
    }
}// } Driver Code Ends



// } Driver Code Ends


//User function Template for javascript
/**
 * @param {number} n
 * @param {number[]} a
 * @returns {number}
*/

class Solution {
    Solve(n, a)
    {
        let el1=Number.MIN_SAFE_INTEGER;
        let el2=Number.MIN_SAFE_INTEGER;
        let count1=0;
        let count2=0;
        for(let i=0;i<n;i++){
            if(count1==0 && el2!=a[i]){
                count1=1;
                el1=a[i];
            }else if(count2==0 && el1!=a[i]){
                count2=1;
                el2=a[i];
            }else if(a[i]==el1){
                count1++;
            }else if(a[i]==el2){
                count2++;
            }else{
                count1--;
                count2--;
            }
        }
        let ans=[];
        count1=0;
        count2=0;
        for(let i=0;i<n;i++){
            if(a[i]==el1) count1++;
            else if(a[i]==el2) count2++
        }
        let value=Math.floor(n/3);
        if(count1>value) ans.push(el1);
        if(count2>value) ans.push(el2);
        if(ans.length==0) return [-1];
        else return ans;
    }
}
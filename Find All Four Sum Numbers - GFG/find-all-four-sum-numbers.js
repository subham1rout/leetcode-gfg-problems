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

function printArray(res, n) {
    let s="";
    for(let i=0;i<n;i++){
        
        for(let j=0;j<res[i].length;j++){
            s+=res[i][j];
            s+=" ";
        }
        s+="$";
        
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
        let k = input_ar1[1];
        input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        let arr = [];
        for(let i=0;i<n;i++){
            arr.push(input_ar1[i]);
        }
        let obj = new Solution();
        let res = obj.fourSum(arr, n, k);
        if(res.length===0) {
            console.log(-1);
        } else {
            printArray(res,res.length);
        }
    }
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @param {number} k
 * @returns {number[][]} 
 */
 
class Solution {
    fourSum(arr, n, k){
        arr.sort((a,b)=>a-b);
        let ans=new Set();
        for(let i=0;i<n;i++){
            if(i>0 && arr[i]==arr[i-1]) continue;
            for(let j=i+1;j<n;j++){
                if(j !=i+1 && arr[j]==arr[j-1]) continue;
                let y=j+1;
                let z=n-1;
                while(y<z){
                    let sum=arr[i]+arr[j];
                    sum+=arr[y];
                    sum+=arr[z];
                    if(sum==k){
                        ans.add(JSON.stringify([arr[i],arr[j],arr[y],arr[z]]));
                        y++;
                        z--;
                        while(y<z && arr[y]==arr[y-1]){
                            y++;
                        }
                        while(y<z && arr[z]==arr[z+1]){ 
                            z--;
                        }
                    }else if(sum<k) y++;
                    else z--;
                }
            }
        }
        let ansarr=[];
        for(const el of ans){
            ansarr.push(JSON.parse(el));
        }
        return ansarr;
    }
}

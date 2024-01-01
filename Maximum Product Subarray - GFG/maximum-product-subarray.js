//{ Driver Code Starts
//Initial Template for javascript

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
      return string.trim();
    });

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/* Function to print an array */
function printArray(arr, size) {
  let i;
  let s = "";
  for (i = 0; i < size; i++) {
    s += arr[i] + " ";
  }
  console.log(s);
}

function main() {
  let t = parseInt(readLine());
  let i = 0;
  for (; i < t; i++) {
    let n = parseInt(readLine())
    let input1 = readLine().split(" ").map((x)=>BigInt(x));
    let arr = new Array(n);
    for(let j =0;j<n;j++) arr[j] = input1[j];
    let obj = new Solution();
    let res = obj.maxProduct(arr,n);
    if(res===-0){
      res = 0;
    }
    console.log(res.toString());
  }
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @return {number}
 */

class Solution {
    maxProduct(arr,n){
        let max=Number.MIN_SAFE_INTEGER;
        let prefixM=1n;
        let suffixM=1n;
        for(let i=0;i<n;i++){
            if(prefixM==0n) prefixM=1n;
            if(suffixM==0n) suffixM=1n;
            prefixM*=arr[i];
            suffixM*=arr[n-1-i];
            if(prefixM>suffixM){
                if(prefixM>max){
                    max=prefixM;
                }
            }else{
                if(suffixM>max){
                    max=suffixM;
                }
            }
        }
        return max;
    }
}
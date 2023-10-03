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
    let n = parseInt(readLine());
    let arr = new Array(n);
    let input_ar1 = readLine().split(" ").map((x) => parseInt(x));
    for (let i = 0; i < n; i++) arr[i] = input_ar1[i];
    let obj = new Solution();
    let res = obj.rearrange(arr,n);
    printArray(res,res.length);
  }
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {Number[]} arr
 * @param {Number} n
 * @returns {Number[]}
 */

class Solution{
    rearrange(arr,n){
        let parr=[];
        let narr=[];
        for(let i=0;i<n;i++){
            if(arr[i]<0) narr.push(arr[i]);
            else parr.push(arr[i]);
        }
        if(parr.length>narr.length){
            for(let i=0;i<narr.length;i++){
                arr[2*i]=parr[i];
                arr[2*i+1]=narr[i];
            }
            let index=2*narr.length;
            for(let i=narr.length;i<parr.length;i++){
                arr[index]=parr[i];
                index++;
            }
        }else{
            for(let i=0;i<parr.length;i++){
                arr[2*i]=parr[i];
                arr[2*i+1]=narr[i];
            }
            let index=2*parr.length;
            for(let i=parr.length;i<narr.length;i++){
                arr[index]=narr[i];
                index++;
            }
        }
        return arr;
    }
}
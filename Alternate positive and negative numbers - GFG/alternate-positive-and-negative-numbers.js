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
        let positivearr = [];
        let negativearr = [];
        for (let i = 0; i < n; i++) {
            if (arr[i] >= 0) {
                positivearr.push(arr[i]);
            } else {
                negativearr.push(arr[i]);
            }
        }
        let templength;
        let positivelength=positivearr.length;
        let negativelength=negativearr.length;
        
        if(positivelength>negativelength){
            templength=negativelength;
        }else{
            templength=positivelength;
        }
        for (let i = 0; i < templength; i++) {
            arr[2 * i] = positivearr[i];
        }
        for (let i = 0; i < templength; i++) {
            arr[2 * i + 1] = negativearr[i];
        }
        
        let templength1=2*templength;
        
        let i=templength;
        while(i<positivelength){
            arr[templength1]=positivearr[i];
            templength1++;
            i++;
        }

        let j=templength;
        while(j<negativelength){
            arr[templength1]=negativearr[j];
            templength1++;
            j++;
        }
        return arr;
    }
}
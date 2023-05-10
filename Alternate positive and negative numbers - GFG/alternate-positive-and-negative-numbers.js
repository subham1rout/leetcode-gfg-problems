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
        let length = arr.length;
        let posarr = [];
        let negarr = [];
        for (let i = 0; i < length; i++) {
            if (arr[i] >= 0) {
                posarr.push(arr[i]);
            } else {
                negarr.push(arr[i]);
            }
        }
        // console.log(posarr);
        // console.log(negarr);
        if (posarr.length > negarr.length) {
            for (let i = 0; i < negarr.length; i++) {
                arr[2 * i] = posarr[i];
                arr[2 * i + 1] = negarr[i];
            }
            let templength = negarr.length * 2;
            for (let i = negarr.length; i < posarr.length; i++) {
                arr[templength] = posarr[i];
                templength++;
            }
            
        } else {
            for (let i = 0; i < posarr.length; i++) {
                arr[2 * i] = posarr[i];
                arr[2 * i + 1] = negarr[i];
            }
            let templength = posarr.length * 2;
            for (let i = posarr.length; i < negarr.length; i++) {
                arr[templength] = negarr[i];
                templength++;
            }
        }
        return arr;
    }
}
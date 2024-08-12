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
function printArray(arr) {
  let s = "";
  for (let i of arr) {
    s = s + i + " ";
  }
  console.log(s);
}

function main() {
  let t = parseInt(readLine());
  let i = 0;
  for (; i < t; i++) {
    let n = parseInt(readLine());
    let arr = readLine()
      .trim()
      .split(" ")
      .map((x) => parseInt(x));
    let obj = new Solution();
    let res = obj.findSum(arr, n);
    console.log(res);
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
  findSum(arr, n) {
    let hashmap=new Map();
    let result=[];
    for(let i=0;i<n;i++){
        if(hashmap.get(arr[i])){
            let temp=hashmap.get(arr[i])
            hashmap.set(arr[i],temp+1);
        }else{
            hashmap.set(arr[i],1);
        }
    }
    let sum=0;
    for(let [key,value] of hashmap){
        sum+=key;
    }
    return sum;
  }
}
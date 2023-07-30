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
    if(arr[i] === -0)
      arr[i] = 0;
    s += arr[i] + " ";
  }
  console.log(s);
}

function main() {
  let t = parseInt(readLine());
  for (let i = 0; i < t; i++) {
    let n = parseInt(readLine());
    let arr = new Array(n);
    let input_line = readLine().split(" ").map((x) => parseInt(x));
    for(let j = 0;j<n;j++) {
        arr[j] = input_line[j];
    }
    let obj = new Solution();
    obj.mergeSort(arr,0,n-1);
    printArray(arr,arr.length);
  }
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} l
 * @param {number} r
 */

class Solution
{
    merge(arr, l, m, r)
    {
        let temp=[];
        let left=l;
        let right=m+1;
        while(left<=m&&right<=r){
            if(arr[left]<=arr[right]){
                temp.push(arr[left]);
                left++;
            }else{
                temp.push(arr[right]);
                right++;
            }
        }
        while(left<=m){
            temp.push(arr[left]);
            left++;
        }
        while(right<=r){
            temp.push(arr[right]);
            right++;
        }
        for(let i=l;i<=r;i++){
            arr[i]=temp[i-l];
        }
    }
    
    mergeSort(arr, l, r){
     if(l==r) return;
     let m=Math.floor((l+r)/2);
     this.mergeSort(arr,l,m);
     this.mergeSort(arr,m+1,r);
     this.merge(arr,l,m,r);
    }
    
}
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


function main() {
  let t = parseInt(readLine());
  let i = 0;
 
  for (; i < t; i++) {
    let n = parseInt(readLine());
    
    let obj = new Solution();
    obj.printPat(n);
  }

}

// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number} n
*/

class Solution {
  printPat(n){
    let string='';
    for(let i=n;i>0;i--){
        for(let j=i*n-1;j>=0;j--){
            string+=(Math.floor(j/i)+1)+' ';
        }
        string+='$';
    }
    console.log(string);
  }
}
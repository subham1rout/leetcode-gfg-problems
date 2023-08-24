//{ Driver Code Starts
// Initial Template for javascript
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(
        string => { return string.trim(); });

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function main() {
    let t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        let input_line = readLine().split(' ');
        let n = parseInt(input_line[0]);
        let m = parseInt(input_line[1]);

        let a = new Array(n);
        let b = new Array(m);

        input_line = readLine().split(' ');
        for (let i = 0; i < n; i++) {
            a[i] = parseInt(input_line[i]);
        }

        input_line = readLine().split(' ');
        for (let i = 0; i < m; i++) {
            b[i] = parseInt(input_line[i]);
        }
        let obj = new Solution();

        let ans = obj.NumberofElementsInIntersection(a, b, n, m);
        console.log(ans);
    }
}

// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number[]} a
 * @param {number[]} b
 * @param {number} n
 * @param {number} m
 * @returns {number}
*/
class Solution {
    // Function to return the count of the number of elements in
    // the intersection of two arrays.
    NumberofElementsInIntersection(a, b, n, m) {
        a=a.sort((a,b)=>a-b);
        b=b.sort((a,b)=>a-b);
        let i=0;
        let j=0;
        let result=[];
        while(i<n && j<m){
            if(a[i]<b[j]) i++;
            else if(a[i]>b[j]) j++;
            else{
                result.push(a[i]);
                i++;
                j++;
            }
        }
        if(result.length==0) return 0;
        let count=1;
        for(let i=0;i<result.length-1;i++){
            if(result[i]!=result[i+1]){
                count++;
            }
        }
        return count;
    }
}
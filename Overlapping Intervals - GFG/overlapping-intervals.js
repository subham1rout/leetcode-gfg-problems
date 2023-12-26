//{ Driver Code Starts
//Initial Template for javascript

//Initial Template for javascript

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

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let n = parseInt(readLine());
        let input1 = readLine().split(' ').map(x=>parseInt(x));
        let intervals = new Array(n);
        for(let i = 0;i < 2*n;i+=2)
        {
            intervals[i/2] = [input1[i],input1[i+1]];
        }
        let obj = new Solution();
        let res = obj.overlappedInterval(intervals);
        let s = "";
        for(let i=0; i<res.length; i++)
        {
            for(let j=0; j<res[i].length; j++)
            {
                s += res[i][j] +" ";
            }
        }
        console.log(s);
    
    }
}
// } Driver Code Ends


//User function Template for javascript
/**
 * @param {number[][]} Intervals
 * @returns {number[][]}
*/

class Solution {
    //Function to Merge overlapping intervals.
    overlappedInterval(Intervals)
    {
        let n=Intervals.length;
        Intervals.sort((a,b)=>a[0]-b[0]);
        let ans=[];
        for(let i=0;i<n;i++){
            let start=Intervals[i][0];
            let end=Intervals[i][1];
            if(ans.length!==0 && ans[ans.length-1][1]>=end){
                continue;
            }
            for(let j=i+1;j<n;j++){
                if(Intervals[j][0]<=end){
                    if(end<Intervals[j][1]){
                        end=Intervals[j][1];
                    }
                    
                }else{
                    break;
                }
            }
            ans.push([start,end]);
        }
        return ans;
    }
}
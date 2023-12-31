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

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let N = parseInt(readLine());
        let arr = new Array(N);
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<N;i++)
            arr[i] = input_ar1[i];
        let obj = new Solution();
        console.log(obj.inversionCount(arr, N));
        
    }
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} N
 * @returns {number}
*/

class Solution {
    // Function to count inversions in the array.
    merge(arr,low,mid,high){
        let left=low;
        let right=mid+1;
        let temp=[];
        let count=0;
        while(left<=mid && right<=high){
            if(arr[left]<=arr[right]){
                temp.push(arr[left]);
                left++;
            }else{
                count+=mid-left+1;
                temp.push(arr[right]);
                right++;
            }
        }
        while(left<=mid){
            temp.push(arr[left]);
            left++;
        }
        while(right<=high){
            temp.push(arr[right]);
            right++;
        }
        for(let i=low;i<=high;i++){
            arr[i]=temp[i-low];
        }
        return count;
    }
    mergeSort(arr,low,high){
        let count=0;
        if(low>=high) return 0;
        let mid=Math.floor((low+high)/2);
        count+=this.mergeSort(arr,low,mid);
        count+=this.mergeSort(arr,mid+1,high);
        count+=this.merge(arr,low,mid,high);
        return count;
    }
    inversionCount(arr, N)
    {
        return this.mergeSort(arr,0,N-1);
    }
}
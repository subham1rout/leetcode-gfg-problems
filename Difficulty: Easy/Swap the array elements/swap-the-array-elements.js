//{ Driver Code Starts

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split("\n").map(string => {
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
    for(;i<t;i++){
        
        let n = parseInt(readLine());
        
        
        let arr = new Array(n);
        let input_arr = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<n;i++){
            arr[i] = input_arr[i];
        }
        
        let obj = new Solution();
        obj.swapElements(n, arr);
        ans = '';
        for(let i=0;i<n;i++){
            ans = ans + arr[i]+" ";
        }
        console.log(ans);
        
    }
}

// } Driver Code Ends



class Solution {
/**
* @param number n
* @param number[] arr

* @returns none
*/
    swapElements(n, arr) {
       for(let i=0;i<n;i++){
           if(i+2<n){
               let temp=arr[i];
               arr[i]=arr[i+2];
               arr[i+2]=temp;
           }
       }
    }
}
        

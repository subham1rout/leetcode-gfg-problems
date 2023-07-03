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

function printList(res,n){
    let s="";
    for(let i=0;i<n;i++){
        s+=res[i];
        s+=" ";
    }
    console.log(s);
}


function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        let a = input_ar1[0];
        let b = input_ar1[1];
        let obj = new Solution();
        let res = obj.lcmAndGcd(a, b);
        if(res && res.length == 2)
            console.log(res[0] + " " + res[1]);
        
    }
}// } Driver Code Ends



// } Driver Code Ends


//User function Template for javascript


/**
 * @param {number} a
 * @param {number} b
 * @returns {number[]}
*/

class Solution{
    lcmAndGcd(a, b){
        let temp=a*b;
        let gcd;
        while(a!=0 && b!=0){
            if(a>b) a=a%b;
            else b=b%a;
        }
        if(a==0) gcd=b;
        else gcd=a;
        
        let lcm=temp/gcd;
        return [lcm,gcd];
    }
}

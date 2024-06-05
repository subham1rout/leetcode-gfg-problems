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

class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}


function printlist(head){
    let current = head; 
    let s='';
    while (current !== null)
    {
       s+=current.data+" ";
       current = current.next;
    }
    console.log(s);
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let n = parseInt(readLine());
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        let arr = new Array(n);
        let i = 0;
        for(let i=0;i<n;i++){
            arr[i] = input_ar1[i];
        }
        let obj = new Solution();
        let head = obj.construct(arr, n); 
        printlist(head);
    }
}


// } Driver Code Ends


//User function Template for javascript
/**
 * class Node{
 *     constructor(data){
 *         this.data = data;
 *         this.next = null;
 *     }
 * }
 */

class Solution {
    //Function to construct linked list from given array.
    construct(arr)
    {
        let head=new Node(arr[0]);
        let mover=head;
        for(let i=1;i<arr.length;i++){
            let temp=new Node(arr[i]);
            mover.next=temp;
            mover=temp;
        }
        return head;
    }
    
}
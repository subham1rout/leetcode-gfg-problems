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
        this.prev = null;
    }
}

function printlist(head){
    let current = head; 
    if(current){
        while(current.next !== null){
            current = current.next;
        }
        while(current.prev !== null){
            current = current.prev;
        }
    }
    let s='';
    while (current !== null)
    {
        s+=current.data+" ";
        current = current.next;
    }
    console.log(s);
}

function insert(head, x){
    if(head === null){
        return (new Node(x));
    }
    let n = new Node(x);
    head.next = n;
    n.prev = head;
    head = n;
    return head;
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let n = parseInt(readLine());
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        let head = null;
        let root = null;
        for(let i=0;i<n;i++){
            head = insert(head, input_ar1[i]);
            if(root === null){
                root = head;
            }
        }
        let input_ar2 = readLine().split(' ').map(x=>parseInt(x));
        let pos = input_ar2[0];
        let data = input_ar2[1];
        let obj = new Solution();
        obj.addNode(root, pos, data);
        printlist(root);
        
    }
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {Node} head
 * @param {number} pos
 * @param {number} data
*/

/*
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}
*/

class Solution {
    //Function to insert a new node at given position in doubly linked list.
    addNode(head, pos, data)
    {
        if(head==undefined) return undefined;
        let temp=head;
        let count=0;
        while(temp!=undefined){
            if(count==pos){
                break;
            }
            temp=temp.next;
            count++;
        }
        let newNode=new Node(data);
        if(temp.next==undefined){
            temp.next=newNode;
            newNode.prev=temp;
        }else{
            let nextNode=temp.next;
            newNode.next=nextNode;
            newNode.back=temp;
            temp.next=newNode;
            nextNode.back=newNode;
        }
    }
    
}
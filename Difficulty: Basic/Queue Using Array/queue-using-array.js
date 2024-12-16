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
        let obj = new MyQueue();
        let q = parseInt(readLine());
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        let index = 0;
        let s = '';
        while(q--){
            if(input_ar1[index] === 1){
                index++;
                let a = input_ar1[index++];
                obj.push(a);
            }
            else{
                index++;
                s += obj.pop() + " ";
            }
        }
        console.log(s);
        
    
console.log("~");
}
}
// } Driver Code Ends


//User function Template for javascript

class MyQueue {
    
    constructor(){
		this.front = -1;
		this.rear = -1;
		this.arr = new Array(100005);
		this.curSize=0;
	}
	
	
	/**
     * @param {number} x
    */
    
	//Function to push an element x in a queue.
	push(x)
	{
	    if(this.curSize==this.arr.length) return -1;
	    if(this.curSize==0){
	        this.front++;
	        this.rear++;
	    }else{
	        this.rear=(this.rear+1)%this.arr.length;
	    }
	    this.arr[this.rear]=x;
	    this.curSize++;
	} 
	
	/**
     * @returns {number}
    */

    //Function to pop an element from queue and return that element.
	pop()
	{
		if(this.curSize==0){
		    return -1;
		}
		let el=this.arr[this.front];
		if(this.curSize==1){
		    this.front=-1;
		    this.rear=-1;
		}else{
		    this.front=(this.front+1)%this.arr.length;
		}
		this.curSize--;
		return el;
	} 
}

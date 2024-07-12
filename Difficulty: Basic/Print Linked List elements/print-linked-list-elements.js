//{ Driver Code Starts
// Node class for representing each node in the linked list
class Node {
    constructor(x) {
        this.data = x;
        this.next = null;
    }
}

// Main function to handle input and process each test case
function main() {
    const readline = require('readline');
    const rl = readline.createInterface(
        {input : process.stdin, output : process.stdout, terminal : false});

    let input = [];
    rl.on('line', function(line) { input.push(line.trim()); });

    rl.on('close', function() {
        let index = 0;
        const t = parseInt(input[index++]);

        for (let testCase = 0; testCase < t; testCase++) {
            const inputArray = input[index++].split(' ');

            let head = null;
            let tail = null;

            for (let i = 0; i < inputArray.length; i++) {
                if (inputArray[i] !== '') {
                    if (head === null) {
                        head = new Node(parseInt(inputArray[i]));
                        tail = head;
                    } else {
                        tail.next = new Node(parseInt(inputArray[i]));
                        tail = tail.next;
                    }
                }
            }

            const solution = new Solution();
            solution.display(head);
        }
    });
}

// Running the main function to start the program
main();

// } Driver Code Ends


// User function Template for javascript

/*LINKED LIST NODE
class Node {
  constructor(x){
    this.data = x;
    this.next = null;
  }
}
*/
/*
    Print elements of a linked list on console
    Head pointer input could be NULL as well for empty list
*/

/**
 * @param {Node} head
 */

class Solution {
    // Function to display the elements of a linked list
    display(head) {
        let string='';
        if(head==undefined){
            return string;
        }
        let temp=head;
        while(temp){
            string+=temp.data+' ';
            temp=temp.next;
        }
        console.log(string);
    }
}
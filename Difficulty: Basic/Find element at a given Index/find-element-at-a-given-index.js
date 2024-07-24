//{ Driver Code Starts

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString =
        inputString.trim().split("\n").map(string => { return string.trim(); });

    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let key = parseInt(readLine());
        let arr = readLine().trim().split(" ").map((x) => parseInt(x));

        let obj = new Solution();
        let res = obj.findElementAtIndex(key, arr);
        console.log(res);
    }
}

// } Driver Code Ends



class Solution {
    /**
    * @param number key
    * @param number[] arr

    * @returns number
    */
    findElementAtIndex(key, arr) {
        return arr[key];
    }
}

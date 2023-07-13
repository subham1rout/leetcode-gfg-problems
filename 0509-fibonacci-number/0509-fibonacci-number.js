/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if(n<=1) return n;
    return fib(n-1)+fib(n-2);

    //using loop
    // let arr=[0,1];
    // for(let i=2;i<=n;i++){
    //     arr[i]=arr[i-1]+arr[i-2];
    // }
    // return arr[n];
};
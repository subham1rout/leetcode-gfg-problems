/**
 * @param {number} numRows
 * @return {number[][]}
 */

var getRow=function(n){
    let ans=1;
    let arr=[];
    arr.push(ans);
    for(let i=1;i<n;i++){
        ans=ans*(n-i);
        ans=Math.floor(ans/i);
        arr.push(ans);
    }
    return arr;
}
var generate = function(numRows) {
    let ans=[];
    for(let i=1;i<=numRows;i++){
        ans.push(getRow(i));
    }
    return ans;
};
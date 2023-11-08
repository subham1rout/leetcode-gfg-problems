/**
 * @param {number} numRows
 * @return {number[][]}
 */

var getValue=function(r,c){
    let value=1;
    for(let i=0;i<c;i++){
        value=value*(r-i);
        value=Math.floor(value/(i+1));
    }
    return value;
}
var generate = function(numRows) {
    let ans=[];
    for(let i=1;i<=numRows;i++){
        let arr=[];
        for(let j=1;j<=i;j++){
            arr.push(getValue(i-1,j-1));
        }
        ans.push(arr);
    }
    return ans;
};
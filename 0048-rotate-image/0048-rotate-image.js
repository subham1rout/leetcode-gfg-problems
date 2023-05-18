/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let n=matrix.length;
    let ans=[];
    for(let i=0;i<n;i++){
        let temp=[];
        for(let j=0;j<n;j++){
            temp.push(0);
        }
        ans.push(temp);
    }
    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){
            ans[j][n-1-i]=matrix[i][j];
        }
    }
    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){
            matrix[i][j]=ans[i][j];
        }
    }
};
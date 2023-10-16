/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let m=matrix.length;
    let newmatrix = [];
    for (let i = 0; i < m; i++) {
        let arr = [];
        for (let j = 0; j < m; j++) {
            arr.push(0);
        }
        newmatrix.push(arr);
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < m; j++) {
            newmatrix[j][m-1 - i] = matrix[i][j];
        }
    }
    for(let i=0;i<m;i++){
        for(let j=0;j<m;j++){
            matrix[i][j]=newmatrix[i][j];
        }
    }
};

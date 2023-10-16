/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

var setZeroes = function(matrix) {
    let m=matrix.length;
    let n=matrix[0].length;
    let col1=1;
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(matrix[i][j]==0){
                if(j==0){
                    col1=0;
                    matrix[i][0]=0;
                }else{
                    matrix[i][0]=0;
                    matrix[0][j]=0;
                }
            }
        }
    }
    for(let i=1;i<m;i++){
        for(let j=1;j<n;j++){
            if(matrix[i][0]==0 || matrix[0][j]==0){
                matrix[i][j]=0;
            }
        }
    }
    for(let j=1;j<n;j++){
        if(matrix[0][0]==0 || matrix[0][j]==0){
            matrix[0][j]=0;
        }
    }
    for(let i=0;i<m;i++){
        if(col1==0 || matrix[i][0]==0){
            matrix[i][0]=0;
        }
    }
};

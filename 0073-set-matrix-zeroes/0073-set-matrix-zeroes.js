/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

var markRow=(arr,i,n)=>{
    for(let j=0;j<n;j++){
        if(arr[i][j]!==0){
            arr[i][j]=Number.MAX_SAFE_INTEGER;
        }
    }
}
var markColumn=(arr,j,m)=>{
    for(let i=0;i<m;i++){
        if(arr[i][j]!==0){
            arr[i][j]=Number.MAX_SAFE_INTEGER;
        }
    }
}
var setZeroes = function(matrix) {
    let m=matrix.length;
    let n=matrix[0].length;
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(matrix[i][j]==0){
                markRow(matrix,i,n);
                markColumn(matrix,j,m);
            }
        }
    }
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(matrix[i][j]==Number.MAX_SAFE_INTEGER){
                matrix[i][j]=0;
            }
        }
    }
};

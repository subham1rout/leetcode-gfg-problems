/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let m=matrix.length;
    let n=matrix[0].length;
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(matrix[i][j]==0){
                markRow(matrix,n,i);
                markColumn(matrix,m,j);
            }
        }
    }
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(matrix[i][j]==-1000){
                matrix[i][j]=0;
            }
        }
    }
};

var markRow=(arr,n,i)=>{
    for(let k=0;k<n;k++){
        if(arr[i][k]!=0){
            arr[i][k]=-1000;
        }
    }
}

var markColumn=(arr,m,j)=>{
    for(let k=0;k<m;k++){
        if(arr[k][j]!== 0){
            arr[k][j]=-1000;
        }
    }
}
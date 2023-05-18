/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let m=matrix.length;
    let n=matrix[0].length;
    let rowarr=new Array(m).fill(0);
    let colarr=new Array(n).fill(0);
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(matrix[i][j]==0){
                rowarr[i]=1;
                colarr[j]=1;
            }
        }
    }
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(rowarr[i] || colarr[j]){
                matrix[i][j]=0;
            }
        }
    }
};

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let n=matrix.length;
    for(let i=0;i<=n-2;i++){
        for(let j=i+1;j<=n-1;j++){
            let temp=matrix[i][j];
            matrix[i][j]=matrix[j][i];
            matrix[j][i]=temp;
        }
    }
    for(let i=0;i<n;i++){
        reverse(matrix[i]);
    }
};

var reverse=(arr)=>{
    let start=0;
    let end=arr.length-1;
    while(start<end){
        let temp=arr[start];
        arr[start]=arr[end];
        arr[end]=temp;
        start++;
        end--;
    }
}
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let n=matrix.length;
    let m=matrix[0].length;
    let row=0;
    let column=m-1;
    while(row<n && column>=0){
        if(matrix[row][column]==target){
            return true;
        }else if(matrix[row][column]<target){
            row++;
        }else{
            column--;
        }
    }
    return false;
};
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let n=matrix.length;
    let m=matrix[0].length;
    for(let i=0;i<n;i++){
        if(matrix[i][0]<=target && target<=matrix[i][m-1]){
            let low=0;
            let high=m-1;
            while(low<=high){
                let mid=Math.floor((low+high)/2);
                if(matrix[i][mid]==target){
                    return true;
                }else if(matrix[i][mid]<target){
                    low=mid+1;
                }else{
                    high=mid-1;
                }
            }
        }
    }
    return false;
};
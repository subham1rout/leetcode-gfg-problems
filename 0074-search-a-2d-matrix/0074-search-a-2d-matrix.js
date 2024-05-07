/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let n=matrix.length;
    let m=matrix[0].length;
    let low=0;
    let high=n*m-1;
    while(low<=high){
        let mid=Math.floor((low+high)/2);
        let temp=matrix[Math.floor(mid/m)][Math.floor(mid%m)];
        if(temp==target){
            return true;
        }else if(temp<target){
            low=mid+1;
        }else{
            high=mid-1;
        }
    }
    return false;
};
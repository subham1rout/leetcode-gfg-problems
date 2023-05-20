/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let ans=[];
    let m=matrix.length;
    let n=matrix[0].length;
    let top=0;
    let bottom=m-1;
    let left=0;
    let right=n-1;
    while(top<=bottom && left<=right){
        for(let i=left;i<=right;i++){
            ans.push(matrix[top][i]);
        }
        top++;
        for(let i=top;i<=bottom;i++){
            ans.push(matrix[i][right]);
        }
        right--;
        if(top<=bottom){
             for(let i=right;i>=left;i--){
                ans.push(matrix[bottom][i]);
            }   
            bottom--;
        }
        if(left<=right){
            for(let i=bottom;i>=top;i--){
                ans.push(matrix[i][left]);
            }
            left++;   
        }
    }
    return ans;
};
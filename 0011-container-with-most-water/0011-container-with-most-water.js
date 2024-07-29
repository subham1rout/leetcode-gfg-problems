/**
 * @param {number[]} height
 * @return {number}
 */

var min=function(a,b){
    if(a>b) return b;
    else return a;
}
var maxArea = function(height) {
    let maxA=0;
    let leftI=0;
    let rightI=height.length-1;
    while(leftI<rightI){
        let minh=min(height[leftI],height[rightI]);
        let tempA=(rightI-leftI)*minh;
        if(tempA>maxA){
            maxA=tempA;
        }
        if(height[leftI]<=height[rightI]){
            leftI++;
        }else{
            rightI--;
        }
    }
    return maxA;
};
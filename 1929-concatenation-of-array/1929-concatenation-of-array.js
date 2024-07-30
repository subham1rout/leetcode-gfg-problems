/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    let n=nums.length;
    let conArr=new Array(2*n).fill(0);
    for(let i=0;i<nums.length;i++){
        conArr[i]=nums[i];
        conArr[i+n]=nums[i];
    }
    return conArr;
};
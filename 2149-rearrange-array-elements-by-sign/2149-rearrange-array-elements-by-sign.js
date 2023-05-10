/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    let length=nums.length;
    let posindex=0;
    let negindex=1;
    let ans=new Array(length).fill(0);
    for(let i=0;i<length;i++){
        if(nums[i]>=0){
            ans[posindex]=nums[i];
            posindex+=2;
        }else{
            ans[negindex]=nums[i];
            negindex+=2;
        }
    }
    return ans;
};
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countPairs = function(nums, target) {
    let nocount=0;
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(i<j){
                if(nums[i]+nums[j]<target){
                    nocount++;
                }
            }
        }
    }
    return nocount;
};
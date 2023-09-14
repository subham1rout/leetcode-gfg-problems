/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let el;
    let count=0;
    for(let i=0;i<nums.length;i++){
        if(count==0){
            el=nums[i];
            count=1;
        }else if(el==nums[i]) count++;
        else count--;
    }
    return el;
};
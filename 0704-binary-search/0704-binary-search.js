/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let low=0;
    let high=nums.length-1;
    function rec(nums,target,low,high){
        if(low>high) return -1;
        let mid=Math.floor((low+high)/2);
        if(target==nums[mid]) return mid;
        else if(target>nums[mid]) return rec(nums,target,mid+1,high);
        else return rec(nums,target,low,mid-1);
    }
    return rec(nums,target,low,high);
};
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let n=nums.length;
    let low=0;
    let high=n-1;
    let ans=n;
    while(low<=high){
        let mid=Math.floor((low+high)/2);
        if(nums[mid]==target){
            ans=mid;
            break;
        }else if(nums[mid]>target){
            ans=mid;
            high=mid-1;
        }else{
            low=mid+1;
        }
    }
    return ans;
};
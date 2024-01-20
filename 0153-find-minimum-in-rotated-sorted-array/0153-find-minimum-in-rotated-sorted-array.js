/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let low=0;
    let high=nums.length-1;
    let ans=Number.MAX_SAFE_INTEGER;
    while(low<=high){
        let mid=Math.floor((low+high)/2);
        if(nums[low]<=nums[mid]){
            if(nums[low]<ans){
                ans=nums[low];
            }
            low=mid+1;
        }else{
            if(nums[mid]<ans){
                ans=nums[mid];
            }
            high=mid-1;
        }
    }
    return ans;
};
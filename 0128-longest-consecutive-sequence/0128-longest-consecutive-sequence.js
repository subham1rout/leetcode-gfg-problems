/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let n = nums.length;
    if(n==0){
        return 0;
    }
    nums=nums.sort((a,b)=>a-b);
    let max=1;
    let count=0;
    let smaller=Number.MIN_SAFE_INTEGER;
    for(let i=0;i<n;i++){
        if(nums[i]-1 ==smaller){
            count++;
            smaller=nums[i];
            if(count>max){
                max=count;
            }
        }else if(nums[i]!==smaller){
            count=1;
            smaller=nums[i];
        }
    }
    return max;
};

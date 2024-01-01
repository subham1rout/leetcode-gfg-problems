/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let max=Number.MIN_SAFE_INTEGER;
    let n=nums.length;
    let prefixM=1;
    let suffixM=1;
    for(let i=0;i<n;i++){
        if(prefixM==0) prefixM=1;
        if(suffixM==0) suffixM=1;
        prefixM*=nums[i];
        suffixM*=nums[n-1-i];
        if(prefixM>suffixM){
            if(prefixM>max){
                max=prefixM;
            }
        }else{
            if(suffixM>max){
                max=suffixM;
            }
        }
    }
    return max;
};
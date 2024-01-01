/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let max=Number.MIN_SAFE_INTEGER;
    let n=nums.length
    for(let i=0;i<n;i++){
        let temp=1;
        for(let j=i;j<n;j++){
            temp*=nums[j];
            if(temp>max){
                max=temp;
            }
        }
    }
    return max;
};
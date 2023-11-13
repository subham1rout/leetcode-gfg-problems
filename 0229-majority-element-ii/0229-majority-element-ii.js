/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    let el1=Number.MIN_SAFE_INTEGER;
    let el2=Number.MIN_SAFE_INTEGER;
    let count1=0;
    let count2=0;
    let n=nums.length;
    for(let i=0;i<n;i++){
        if(count1==0 && el2!=nums[i]){
            count1=1;
            el1=nums[i];
        }else if(count2==0 && el1!=nums[i]){
            count2=1;
            el2=nums[i];
        }else if(nums[i]==el1){
            count1++;
        }else if(nums[i]==el2){
            count2++;
        }else{
            count1--;
            count2--;
        }
    }
    let ans=[];
    count1=0;
    count2=0;
    for(let i=0;i<n;i++){
        if(nums[i]==el1) count1++;
        else if(nums[i]==el2) count2++
    }
    let value=Math.floor(n/3);
    if(count1>value) ans.push(el1);
    if(count2>value) ans.push(el2);
    return ans;
};
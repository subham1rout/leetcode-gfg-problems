/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const set=new Set();
    let max=0;
    for(let i=0;i<nums.length;i++){
        set.add(nums[i]);
    }
    for(const value of set){
        if(set.has(value-1)==false){
            let count=1;
            let temp=value;
            while(set.has(temp+1)){
                count++;
                temp++;
            }
            if(count>max) max=count;
        }
    }
    return max;
};

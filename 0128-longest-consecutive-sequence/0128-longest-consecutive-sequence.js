/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let n = nums.length;
    if(n==0){
        return 0;
    }
    let max=1;
    let set=new Set();
    for(let i=0;i<n;i++){
        set.add(nums[i]);
    }
    for(const el of set){
        let x=el;
        if(!set.has(x-1)){
            let count=1;
            while(set.has(x+1)){
                count++;
                x++;
            }
            if(count>max){
                max=count;
            }
        }
    }
    return max;
};

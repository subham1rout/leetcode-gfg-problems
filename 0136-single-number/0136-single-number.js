/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let map=new Map();
    for(let i=0;i<nums.length;i++){
        let value=map.get(nums[i]);
        if(!value){
            map.set(nums[i],1);
        }else{
            map.set(nums[i],value+1);
        }
    }
    for(const [key,value] of map){
        if(value==1) return key;
    }
};
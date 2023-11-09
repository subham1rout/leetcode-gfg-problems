/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    const map=new Map();
    for(let i=0;i<nums.length;i++){
        let value=map.get(nums[i]);
        if(value==undefined){
            map.set(nums[i],1);
        }else{
            map.set(nums[i],value+1);
        }
    }
    let res=[];
    for(let [key,value] of map){
        if(value>(nums.length/3)){
            res.push(key);
        }
    }
    return res;
};
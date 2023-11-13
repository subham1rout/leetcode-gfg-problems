/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    const map=new Map();
    let res=[];
    for(let i=0;i<nums.length;i++){
        let value=map.get(nums[i]);
        if(value==undefined){
            value=0;
            map.set(nums[i],1);
        }else{
            map.set(nums[i],value+1);
        }
        if(value+1==Math.floor(nums.length/3)+1){
            res.push(nums[i]);
        }
        if(res.length==2) break;
    }
    return res;
};
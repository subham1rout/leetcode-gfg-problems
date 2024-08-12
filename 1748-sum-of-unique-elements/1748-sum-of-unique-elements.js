/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    let hashmap=new Map();
    let result=[];
    for(let i=0;i<nums.length;i++){
        if(hashmap.get(nums[i])){
            let temp=hashmap.get(nums[i])
            hashmap.set(nums[i],temp+1);
        }else{
            hashmap.set(nums[i],1);
        }
    }
    let sum=0;
    for(let [key,value] of hashmap){
        if(value==1){
            sum+=key;
        }
    }
    return sum;
};
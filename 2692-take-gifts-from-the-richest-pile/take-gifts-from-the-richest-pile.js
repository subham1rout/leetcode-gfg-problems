/**
 * @param {number[]} gifts
 * @param {number} k
 * @return {number}
 */

var findMax=function(arr){
    let maxIndex=0;
    for(let i=1;i<arr.length;i++){
        if(arr[maxIndex]<arr[i]){
            maxIndex=i;
        }
    }
    return maxIndex;
}

var findSqrtFloor=(num)=>{
    let temp=Math.sqrt(num);
    return Math.floor(temp);
}

var pickGifts = function(gifts, k) {
    if(gifts.length==0){
        return 0;
    }
    for(let i=0;i<k;i++){
        let maxIndex=findMax(gifts);
        let value=findSqrtFloor(gifts[maxIndex]);
        gifts[maxIndex]=value;
    }
    let sum=0;
    for(let i=0;i<gifts.length;i++){
        sum+=gifts[i];
    }
    return sum;
};
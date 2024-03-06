/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */

var max=function(piles){
    let max=Number.MIN_SAFE_INTEGER;
    for(let i=0;i<piles.length;i++){
        if(max<piles[i]){
            max=piles[i];
        }
    }
    return max;
}

var getHoursSpend=function(piles,noOfBanana){
    let hoursTaken=0;
    for(let i=0;i<piles.length;i++){
        hoursTaken+=Math.ceil(piles[i]/noOfBanana);
    }
    return hoursTaken;
}
var minEatingSpeed = function(piles, h) {
    let low=1;
    let high=max(piles);
    while(low<=high){
        let mid=Math.floor((low+high)/2);
        let hourTaken=getHoursSpend(piles,mid);
        if(hourTaken<=h){
            high=mid-1
        }else{
            low=mid+1;
        }
    }
    return low;
};
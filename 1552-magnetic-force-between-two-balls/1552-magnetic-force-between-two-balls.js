/**
 * @param {number[]} position
 * @param {number} m
 * @return {number}
 */

var isPossible=function(arr,minD,m){
    let noOfBalls=1;
    let lastBall=arr[0];
    for(let i=1;i<arr.length;i++){
        if((arr[i]-lastBall)>=minD){
            noOfBalls++;
            lastBall=arr[i];
        }
    }
    if(noOfBalls>=m) return true;
    else return false;
}
var maxDistance = function(position, m) {
    position.sort((a,b)=>a-b);
    let low=1;
    let high=position[position.length-1]-position[0];
    while(low<=high){
        let mid=Math.floor((low+high)/2);
        let value=isPossible(position,mid,m);
        if(value){
            low=mid+1;
        }else{
            high=mid-1;
        }
    }
    return high;
};
/**
 * @param {string} s
 * @return {number}
 */
var minimumChairs = function(s) {
    let max=0;
    let temp=0;
    for(let i=0;i<s.length;i++){
        if(s[i]=='E'){
            temp++;
        }else{
            temp--;
        }
        if(temp>max){
            max=temp;
        }
    }
    return max;
};
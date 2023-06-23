/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let newno=0;
    let y=x;
    while(y>0){
        let r=y%10;
        newno=newno*10+r;
        y= Math.floor(y/10);
    }
    if(x==newno) return true;
    else return false;
};
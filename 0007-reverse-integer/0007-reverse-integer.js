/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x){
    let n=x;
    let revno=0;
    while(n!=0){
        let r=n%10;
        revno=revno*10+r;
        n= n>0 ? Math.floor(n/10) : Math.ceil(n/10);
    }
    if(revno> (Math.pow(2,31)-1) || revno < Math.pow(2,31)*(-1)){
        return 0;
    }
    return revno;
};
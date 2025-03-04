/**
 * @param {number} n
 * @return {boolean}
 */
var checkPowersOfThree = function(n) {
    let string='';
    while(n!=0){
        let rem= n % 3;
        n=Math.floor(n/3);
        string+=rem;
    }
    if(string.includes('2')) return false;
    else return true;

};
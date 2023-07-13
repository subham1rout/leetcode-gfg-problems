/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s=s.toLowerCase();
    let regex=/[^A-Za-z0-9]/g;
    s=s.replace(regex,'');
    
    function check(s,i){
        if(i>=Math.floor(s.length/2)) return true;
        if(s[i]!=s[s.length-1-i]) return false;
        return check(s,i+1);
    }
    return check(s,0);
    // while(i<Math.floor(s.length/2)){
    //     if(s[i]!=s[s.length-1-i]) return false;
    // }
    // return true;
};
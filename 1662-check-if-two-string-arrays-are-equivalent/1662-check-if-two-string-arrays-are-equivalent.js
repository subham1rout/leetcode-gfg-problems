/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    let string='';
    let string2='';
    for(let i=0;i<word1.length;i++){
        string+=word1[i];
    }
    for(let i=0;i<word2.length;i++){
        string2+=word2[i];
    }
    if(string==string2){
        return true;
    }else{
        return false;
    }
};
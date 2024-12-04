/**
 * @param {string} str1
 * @param {string} str2
 * @return {boolean}
 */
var canMakeSubsequence = function(str1, str2) {
    let point1=0;
    let point2=0;
    while(point1<str1.length && point2<str2.length){
        if(str1[point1]==str2[point2]){
            point2++;
        }else if(str1[point1].charCodeAt(0)+1==str2[point2].charCodeAt(0)){
            point2++;
        }else if(str1[point1].charCodeAt(0)-25==str2[point2].charCodeAt(0)){
            point2++;
        }
        point1++;
    }
    if(point2==str2.length){
        return true;
    }else{
        return false;
    }
};
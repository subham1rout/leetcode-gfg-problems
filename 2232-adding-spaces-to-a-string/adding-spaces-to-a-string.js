/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
var addSpaces = function(s, spaces) {
    let strArr=s.split('');
    for(let i=0;i<spaces.length;i++){
        let value=spaces[i];
        strArr[value]=' '+strArr[value];
    }
    strArr=strArr.join('');
    return strArr;
};
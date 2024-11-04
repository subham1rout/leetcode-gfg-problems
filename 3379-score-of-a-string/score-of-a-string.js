/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function(s) {
    let finalVal=0;
    let prev=parseInt(s.charCodeAt(0));
    for(let i=1;i<s.length;i++){
        let value=s.charCodeAt(i);
        finalVal+=parseInt(Math.abs(prev-value));
        prev=value;
    }
    return finalVal;
};
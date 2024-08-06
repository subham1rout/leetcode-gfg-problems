/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let string='';
    for(let i=0;i<digits.length;i++){
        string+=digits[i];
    }
    
    string=BigInt(string)+1n;
    string=string.toString().split('');
    return string;
};
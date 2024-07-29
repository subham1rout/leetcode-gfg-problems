/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let charWord1=word1.split('');
    let charWord2=word2.split('');
    let string='';
    let i=0;
    let j=0;
    while(i<charWord1.length && j<charWord2.length){
        string+=charWord1[i];
        string+=charWord2[i];
        i++;
        j++;
    }
    while(i<charWord1.length){
        string+=charWord1[i];
        i++;
    }
    while(j<charWord2.length){
        string+=charWord2[j];
        j++;
    }
    return string;
};
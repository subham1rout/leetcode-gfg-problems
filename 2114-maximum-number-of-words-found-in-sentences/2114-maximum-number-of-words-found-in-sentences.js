/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let maxlength=0;
    for(let i=0;i<sentences.length;i++){
        let el=sentences[i];
        let temp=el.split(' ');
        if(temp.length>maxlength){
            maxlength=temp.length;
        }
    }
    return maxlength;
};
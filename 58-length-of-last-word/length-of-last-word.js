/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let news=s.split(' ');
    for(let i=news.length-1;i>=0;i--){
        if(news[i]!==''){
            return news[i].length;
        }
    }
};
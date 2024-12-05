/**
 * @param {string} start
 * @param {string} target
 * @return {boolean}
 */
var canChange = function(start, target) {
    let startL=start.length;
    let targetL=target.length;
    let sI=0;
    let tI=0;
    while(sI<startL || tI<targetL){
        while(start[sI]=='_') sI++;
        while(target[tI]=='_') tI++;
        if(start[sI]==target[tI]){
            if(start[sI]=='L'){
                if(sI>=tI){
                    sI++;
                    tI++;
                }else{
                    return false;
                }
            }else if(start[sI]=='R'){
                if(sI<=tI){
                    sI++;
                    tI++;
                }else{
                    return false;
                }
            }
        }else{
            return false;
        }
    }
    if(sI<startL){
        return false;
    }
    if(tI<startL){
        return false;
    }
    return true;
};
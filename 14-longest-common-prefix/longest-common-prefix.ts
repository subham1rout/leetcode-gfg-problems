function longestCommonPrefix(strs: string[]): string {
    let res="";
    for(let i=0;i<strs[0].length;i++){
        for(let j=0;j<strs.length;j++){
            if(strs[0][i]!= strs[j][i]){
                return res;
            }
        }
        res+=strs[0][i];
    }
    return res;
};
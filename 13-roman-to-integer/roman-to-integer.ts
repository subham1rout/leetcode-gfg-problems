function romanToInt(s: string): number {
    const hashmap: Map<string,number>=new Map([
        ['I',1],
        ['V',5],
        ['X',10],
        ['L',50],
        ['C',100],
        ['D',500],
        ['M',1000]
    ]);

    let sum:number= 0;
    for(let i=0;i<s.length;i++){
        if(hashmap.get(s[i])<hashmap.get(s[i+1])){
            sum =sum-hashmap.get(s[i]);
        }else{
            sum=sum+hashmap.get(s[i]);
        }
    }
    return sum;

};
function zainAssaf(str){
    const set = new Set()
    const set2 = new Set()
     for(let i of str){
        if(set.has(i)){
            set2.add(i)
        }
        else{
            set.add(i)
        }
     } 

     for(let i of set){
        if(!set2.has(i)){
            return i
        }
     }

     
}

console.log(zainAssaf("abca"))
// “aabbccdee” will return “d”
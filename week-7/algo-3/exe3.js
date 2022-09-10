function zainAssaf(str){  // “aabbccdee” will return “d”
    const set = new Set()
    const set2 = new Set()
     for(let i of str){
        if(set.has(i)){
            set2.add(i) //abcde
        }
        else{
            set.add(i) //abce
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
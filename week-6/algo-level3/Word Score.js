function missingNumbers(numbers,n){

    let missingSet = new Set()
    let set =  new Set(numbers)
    if(n==0){
      return missingSet
    }

    for(let i = 1 ; i <= n ; i++) {
       if(!set.has(i)){
          missingSet.add(i)
       }
    }

   return missingSet
}

console.log(missingNumbers([4,3,7,1,6] , 7));
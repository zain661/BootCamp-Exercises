const reverse = function(str){
        let reversed = ""
        let i = 0 
        let temp 
        let j= str.length -1 
        let sizeOfCats= Math.floor(str.length)
        console.log(sizeOfCats);
         while (sizeOfCats--) {
          // temp = str[i]
          reversed += (str[j])
          // reversed[i] = str[j]
          // reversed[j] = temp
          //  i++
           j--
         }
           
            
         

    
    return reversed
  }
      
console.log(reverse("dog"))  //should return "god"
console.log(reverse("race car"));  //should return "rac ecar"
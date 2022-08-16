class UniqueArray{
    constructor(){
        this.UniqueArray = []
        this.UniqueArrayLength = 0
    }
    add(item){
        if(!(this.exists(item))){
            this.UniqueArray[this.UniqueArrayLength] = item
            this.UniqueArrayLength++
        }

    }

    showAll(){
        console.log(this.UniqueArray);
    }

    exists(item){
        this.UniqueArray.forEach(a =>  {
           if( a == item ){
            return true
           }
           else {
            return false
           }
        } )
       
    }

    get(index){
        if(index <= this.UniqueArrayLength -1){
            return this.UniqueArray[index]
        }
        else {
            return -1
        }
    }
}

const uniqueStuff = new UniqueArray()
uniqueStuff.add("toy")
uniqueStuff.showAll() //prints ["toy"]
uniqueStuff.add("toy")
uniqueStuff.showAll() //prints ["toy"]
uniqueStuff.exists("toy") //returns true
uniqueStuff.add("poster")
uniqueStuff.add("hydrogen")
console.log(uniqueStuff.get(2)) //prints "hydrogen"


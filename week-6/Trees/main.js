class BSNode {
    constructor(value) {
        this.value = value;
        this.leftChild;
        this.rightChild;
    }

    insertNode(newVal) {
        if (!this.value) {
            this.value = newVal
        }
        else if (newVal > this.value && this.rightChild) {
            this.rightChild.insertNode(newVal)
        }
        else if(newVal <= this.value && this.leftChild) {
            this.leftChild.insertNode(newVal)
        }
        else if (newVal <= this.value) {
            this.leftChild = new BSNode(newVal)
        }
        else {
            this.rightChild = new BSNode(newVal)
        }
    }

    findNode(Fvalue){
        if (this.value === Fvalue) {
            return true
        }
        else if (Fvalue > this.value && this.rightChild) {
           return this.rightChild.findNode(Fvalue)
        }
        else if(Fvalue <= this.value && this.leftChild) {
             return this.leftChild.findNode(Fvalue)
        }
         else{
            return false
         }
       
    }

    findCommonParent(val1,val2){
        
    }
}

const bsTree = new BSNode()
const letters = ["H", "E", "S", "G", "L", "Y", "I"]
letters.forEach(l => bsTree.insertNode(l))
console.log(bsTree)
//Use the following to test
 const ans = bsTree.findNode("H") // should print true
 console.log(ans)
 const ans1 = bsTree.findNode("G")
console.log(ans1) // should print true
const ans2 = bsTree.findNode("Z")
console.log(ans2) // should print false
const t = bsTree.findNode("F") 
console.log(t)// should print false
const z = bsTree.findNode("y")
console.log(z) // should print false - we didn't make the tree case sensitive!

const bsTree2 = new BSNode()
//insert nodes from array
const arr2 = ["J", "H", "R", "E", "S", "P", "G", "B", "L", "Y", "I"]
arr2.forEach(a => bsTree2.insertNode(a))
console.log(bsTree2)
bsTree.findCommonParent("B", "I") //should return "H"
bsTree.findCommonParent("B", "G") //should return "E"
bsTree.findCommonParent("B", "L") //should return "J"
bsTree.findCommonParent("L", "Y") //should return "R"
bsTree.findCommonParent("E", "H") //should return "J"
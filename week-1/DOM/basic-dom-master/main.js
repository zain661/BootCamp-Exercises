const playingField = document.getElementById("playing-field")
 console.log(playingField);
 const down= document.getElementById("down");
 console.log(down);
 console.log( playingField.innerHTML)
 console.log(playingField.style)
 const green = document.getElementById("ball")
 green.style.backgroundColor ="yellow"
  let x= 0;
//  const moveRight = function(){
// // x=parseInt(x)+15+"px";
// // console.log(x);
// //  x =parseInt(x)+parseInt("15px")  + "px";
// // console.log(x)
// x +=15;
//     document.getElementById("ball").style.left =  x + "px";
//   }
const header = document.createElement("h1");
header.innerHTML="The Best Game Ever";
header.style.color= "red";
header.style.fontFamily = "Helvetica"
header.style.position="absolute"
header.style.marginTop ="-13px"
document.body.appendChild(header)
const subHeader = document.createElement("h2")
subHeader.innerHTML="anything"
subHeader.setAttribute("class","sub-header")
document.body.appendChild(subHeader)

const moveUp = function(){
x -=15;
document.getElementById("ball").style.top =  x + "px";
}
const moveDown =function(){
  x +=15;
  document.getElementById("ball").style.down =  x + "px";
  }
  const moveLeft =function(){
    x -=15;
    document.getElementById("ball").style.left =  x + "px";
    }
    const moveRight =function(){
      x +=15;
      document.getElementById("ball").style.right =  x + "px";
      }
      




 